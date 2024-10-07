const hardcodedCredentials = {
    email: "admin@gmail.com",
    password: "12345678",
  };
  
  async function LoginController(req, res) {
    try {
      const { email, password } = req.body;  // Extracting the email and password from the request body
  
      // Check if the email and password match the hardcoded credentials
      if (email === hardcodedCredentials.email && password === hardcodedCredentials.password) {
        // If the credentials match, return a success response
        res.status(200).json({
          message: "Login successful",
          error: false,
          success: true,
          data: { userId: "admin" },  // You can send any user data here, hardcoded as well
        });
      } else {
        // If credentials don't match, return an error
        res.status(401).json({
          message: "Invalid email or password",
          error: true,
          success: false,
        });
      }
    } catch (err) {
      // Handle any unexpected errors
      res.status(500).json({
        message: err.message || "An error occurred",
        error: true,
        success: false,
      });
    }
  }
  
  module.exports = LoginController;
  