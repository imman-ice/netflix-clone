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

// Home route (optional)
app.get("/", (req, res) => {
  res.send("Netflix Clone Backend is Running 🚀");
});

// Login route
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required.",
    });
  }

  if (email === mockUser.email && password === mockUser.password) {
    return res.status(200).json({
      success: true,
      message: "Login successful!",
      token: "mock-netflix-token-12345",
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid email or password.",
  });
});

// Port for Render
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});