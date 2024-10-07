const About = require('../model/about'); // Ensure the model path is correct
const multer = require('multer');

// Multer setup for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage }).single('image');

// GET about details
exports.getAbout = async (req, res) => {
  try {
    const aboutData = await About.findOne();
    if (!aboutData) {
      return res.status(404).json({ error: 'No about data found' });
    }
    res.json(aboutData);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching about data' });
  }
};

// UPDATE about data and image
exports.updateAbout = (req, res) => {
  upload(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
      // Handle Multer-specific errors
      return res.status(400).json({ error: err.message });
    } else if (err) {
      // Handle other errors
      return res.status(400).json({ error: err.message });
    }

    try {
      const { description } = req.body;
      let updateData = { description };

      // If a file is uploaded, add imageUrl to update data
      if (req.file) {
        updateData.imageUrl = `/uploads/${req.file.filename}`;
      }

      // Update the about data in the database
      const aboutData = await About.findOneAndUpdate({}, updateData, { new: true });

      if (!aboutData) {
        return res.status(404).json({ error: 'No about data found to update' });
      }

      // Return updated data
      res.json(aboutData);
    } catch (error) {
      res.status(500).json({ error: 'Error updating about data' });
    }
  });
};
