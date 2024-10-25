
import './Footer.css';

const Footer = () => {
  return (
    <>
    <header className="fheader">
      <h1>
        <span className="highlight">ILERA</span>AI
      </h1>
    </header>
    <nav className="fnavbar">
    <ul>
      <li><a href="about-us">About us</a></li>
      <li><a href="benefits">Benefits</a></li>
      <li><a href="contact-us">Contact Us</a></li>
    </ul>
  </nav>
    <footer className="footer">
      <p>© 2024 ILERAAI. All Rights Reserved</p>
    </footer>
    </>
  );
}

export default Footer;
