const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

// Mock user credentials
const mockUser = {
  email: "test@netflix.com",
  password: "123456",
};

// Login Route
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  // Validation
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required.",
    });
  }

  // Mock authentication
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

// Render requires dynamic PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});