const ContactFormDetails = require('../model/contactUsModel');

// Create a new contact message
exports.createContact = async (req, res) => {
  try {
    const { name, mobile, email, msg } = req.body;
console.log(req.body)
    // Create a new contact form entry
    const newContact = new ContactFormDetails({
      name,
      mobile,
      email,
      msg
    });

    await newContact.save();

    res.status(201).json({
      success: true,
      message: 'Message sent successfully!',
      data: newContact
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to send the message. Please try again later.',
      error: error.message
    });
  }
};

// Get all contact messages
exports.getContacts = async (req, res) => {
  try {
    const contacts = await ContactFormDetails.find();
    res.status(200).json({
      success: true,
      data: contacts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve messages.',
      error: error.message
    });
  }
};

// Get a single contact message by ID
exports.getContactById = async (req, res) => {
  try {
    const contact = await ContactFormDetails.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Message not found.'
      });
    }

    res.status(200).json({
      success: true,
      data: contact
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve the message.',
      error: error.message
    });
  }
};

