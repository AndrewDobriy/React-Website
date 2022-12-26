import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <form>
          <input
            type="email"
            className="footer-input"
            placeholder="Your Email"
          />
          <Button buttonStyle="btn--outline">Subscribe</Button>
        </form>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorship</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div className="footer-link-items">
            <h2>Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">YouTube</Link>
            <Link to="/">FaceBook</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social">
        <div className=" social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              TRVL <i className="fab fa-typo3" />
            </Link>
          </div>
          <small className="website-rights">TRVL © 2022</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"> </i>
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"> </i>
            </Link>
            <Link
              className="social-icon-link vk"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-vk"> </i>
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-youtube"> </i>
            </Link>
            <Link
              className="social-icon-link linkedin"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-linkedin"> </i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
