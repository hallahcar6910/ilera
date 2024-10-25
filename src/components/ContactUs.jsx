
import './ContactUs.css';
import imageFile from '../assets/confirm.jpg';

const ContactUs = () => {
  return (
    <div className="contact-us-container" id='contact-us'>
      {/* Button with Contact Section label */}
      <button className="contact-section-button"  >Contact </button>

      {/* Content container for image and form */}
      <div className="contact-content">
        {/* Image container */}
        <div className="contact-image-container">
          <img src={imageFile} alt="Contact Us" />
        </div>

        {/* Contact form container */}
        <div className="contact-form-container">
          <h2>Contact Us</h2>
          <form className="contact-form">
            <div className="input-field">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />
            </div>
            <div className="input-field">
              <label>Name</label>
              <input type="text" placeholder="Enter your name" required />
            </div>
            <div className="input-field">
              <label>Message</label>
              <textarea placeholder="Write your message" rows="6" required></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
