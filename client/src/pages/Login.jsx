import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });

      if (res.data.success) {
        navigate("/dashboard");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen relative bg-black">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/4e4f0d2e-3b9c-4f88-bc47-6b1b25b3a9f4/1bdfeb34-4c6d-43df-8b2a-2b5a9c08e1f1/US-en-20240408-popsignuptwoweeks-perspective_alpha_website_large.jpg')] bg-cover bg-center opacity-40"></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Netflix Logo */}
      <div className="relative z-10 px-10 pt-6">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix Logo"
          className="w-40"
        />
      </div>

      {/* Login Form */}
      <div className="relative z-10 flex justify-center items-center min-h-screen">
        <div className="w-full max-w-md bg-black/80 p-10 rounded-md shadow-lg">
          <h1 className="text-white text-3xl font-bold mb-6">Sign In</h1>

          {/* Error */}
          {error && (
            <div className="bg-red-600 text-white p-3 rounded mb-4 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email or phone number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-600 text-white font-semibold p-3 rounded hover:bg-red-700 transition"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          {/* Remember Me */}
          <div className="flex justify-between text-gray-400 text-sm mt-4">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-red-600" />
              Remember me
            </label>

            <a href="#" className="hover:underline">
              Need help?
            </a>
          </div>

          {/* Footer */}
          <p className="text-gray-400 mt-6 text-sm">
            New to Netflix?{" "}
            <span className="text-white hover:underline cursor-pointer">
              Sign up now.
            </span>
          </p>

          <p className="text-gray-500 mt-4 text-xs">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
          </p>
        </div>
      </div>
    </div>
  );
}