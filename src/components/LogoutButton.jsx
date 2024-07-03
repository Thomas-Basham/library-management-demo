// components/LogoutButton.js
const LogoutButton = ({ onLogout }) => {
  const handleLogout = () => {
    // Add your logout logic here
    console.log("User logged out");
    if (onLogout) {
      onLogout();
      
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
