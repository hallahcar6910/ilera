import './Hero.css';

const Hero = () => {
  return (
    <section className="pathology-detection-container">
      <div className="text-content">
        <h1>
          Artificial Intelligence
          <br /> for Home Based Medical Diagnosis
        </h1>
        <p>
          Our system enables individuals to assess their health at home, using advanced algorithms to analyze symptoms,
          provide diagnoses, and offer personalized recommendations, all without requiring hospital visits.
        </p>
        <button className="request-demo-btn">Chat Here</button>
      </div>
    </section>
  );
}

export default Hero;
