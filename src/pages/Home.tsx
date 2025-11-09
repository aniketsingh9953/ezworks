// import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <h1>Welcome to EZ Works</h1>
      <p>
        Empowering teams with smart, seamless, and modern web solutions that
        enhance productivity and creativity.
      </p>
      <button onClick={() => navigate("/contact")}>Contact Us</button>
    </section>
  );
};

export default Home;