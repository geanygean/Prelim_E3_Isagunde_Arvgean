import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

function Settings({ user, setUser }) {
    const navigate = useNavigate();

    const toggleDarkMode = () => {
        setUser({ ...user, settings: { darkMode: !user.settings.darkMode } });
    };

    return (
        <div className={`container mt-5 p-4 rounded shadow ${user.settings.darkMode ? "bg-dark text-white" : "bg-light text-dark"}`}>
            <h2 className="text-center">Settings</h2>

            {/* Dark Mode Toggle Switch */}
            <div className="form-check form-switch text-center mt-4">
                <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id="darkModeSwitch" 
                    checked={user.settings.darkMode} 
                    onChange={toggleDarkMode} 
                />
                <label className="form-check-label ms-2" htmlFor="darkModeSwitch">
                    {user.settings.darkMode ? "Dark Mode Enabled" : "Dark Mode Disabled"}
                </label>
            </div>

            {/* Back to Profile Button */}
            <div className="text-center mt-4">
                <button className="btn btn-primary" onClick={() => navigate("/profile")}>
                    Back to Profile
                </button>
            </div>
        </div>
    );
}

export default Settings;
