import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // Import the CSS file

function Home() {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <h1>Welcome to the User Profile App</h1>
            <button className="btn btn-primary mt-3" onClick={() => navigate("/profile")}>
                Go to Profile
            </button>
        </div>
    );
}

export default Home;
