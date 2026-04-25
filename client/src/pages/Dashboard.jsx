import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  function handleLogout() {
    navigate("/");
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Navbar */}
      <div className="flex items-center justify-between px-10 py-6">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix Logo"
          className="w-40"
        />

        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-6 py-2 rounded font-semibold hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>

      {/* Dashboard Content */}
      <div className="flex flex-col items-center justify-center h-[80vh] space-y-6">
        {/* Netflix N Icon */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Netflix-new-icon.png"
          alt="Netflix N"
          className="w-20"
        />

        <h1 className="text-white text-4xl font-bold">
          Welcome to Dashboard 🎉
        </h1>
      </div>
    </div>
  );
}