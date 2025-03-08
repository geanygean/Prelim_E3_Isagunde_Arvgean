import React from "react";
import { useNavigate } from "react-router-dom";
import UserInfo from "./UserInfo";
import ProfilePicture from "./ProfilePicture";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import "./Home.css"; // Import CSS for background styling

function Profile({ user, setUser }) {
    const navigate = useNavigate();

    const handleNameChange = (e) => {
        setUser({ ...user, name: e.target.value });
    };

    return (
        <div className="profile-container">
            {/* Fixed Navigation Bar at the Top */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">User Profile</a>
                    <div className="d-flex">
                        <button className="btn btn-outline-primary me-2" onClick={() => navigate("/")}>
                            Home
                        </button>
                        <button className="btn btn-outline-secondary" onClick={() => navigate("/settings")}>
                            Settings
                        </button>
                    </div>
                </div>
            </nav>

            {/* Profile Content */}
            <div className={`container mt-5 p-4 rounded shadow profile-content ${user.settings.darkMode ? "bg-dark text-white" : "bg-light text-dark"}`}>
                <div className="text-center">
                    <ProfilePicture className="mb-3" />
                    <UserInfo name={user.name} className="mb-3" />
                    <input 
                        type="text" 
                        value={user.name} 
                        onChange={handleNameChange} 
                        placeholder="Enter Name" 
                        className="form-control w-50 mx-auto mt-3"
                    />
                </div>
            </div>
        </div>
    );
}

export default Profile;
