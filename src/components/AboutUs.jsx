
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-us-section"  id='about-us'>
      <div className="content-wrapper">
        <button className="about-button" >About Us</button>
        <h1>
          Welcome to ILERAAI <span className="highlight">— Your AI Health Companion</span>
        </h1>
        <p>
          ILERAAI is at the forefront of medical technology, providing healthcare professionals with
          an AI-powered diagnostic assistant. Designed to analyze patient data with precision, ILERAAI
          offers real-time insights and personalized diagnostic recommendations. Our system securely integrates
          with existing medical software, ensuring seamless access while maintaining strict data confidentiality.
        </p>
       
      </div>
      <div className="features-wrapper">
        <h2>Why Choose ILERAAI?</h2>
        <ul className="feature-list">
          <li>🔍 <span>Accurate Diagnostics</span> - AI algorithms tailored for precision and reliability.</li>
          <li>💼 <span>Seamless Integration</span> - Compatible with leading electronic health record (EHR) systems.</li>
          <li>🔒 <span>Data Security</span> - HIPAA-compliant, ensuring the highest levels of data protection.</li>
          <li>⚙️ <span>Continuous Learning</span> - Self-updating AI models that stay current with medical advancements.</li>
          <li>📊 <span>Actionable Insights</span> - Simplifies complex data for better-informed decisions.</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutUs;

