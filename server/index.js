const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Mock user data
const mockUser = {
  email: "test@netflix.com",
  password: "123456",
};

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  // Validation
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required.",
    });
  }

  // Authentication check
  if (email === mockUser.email && password === mockUser.password) {
    return res.status(200).json({
      success: true,
      message: "Login successful!",
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid email or password.",
  });
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});