import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero fade-in">
      <div className="hero-content">
        <h1>Welcome to EZ Labs</h1>
        <p>We bring your digital ideas to life with creativity, technology, and innovation.</p>
        <a href="#contact" className="cta-btn">Get in Touch</a>
      </div>
    </section>
  );
};

export default Hero;