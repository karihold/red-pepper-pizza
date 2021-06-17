import React from "react";
import ReactDOM from "react-dom";
import { useHistory, Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <section class="footer-link-group">
        <h2>About Us</h2>
        <ul class="footer-links">
          <li className="footer-item-link">
            <a className="footer-a" href="#">
              About Us
            </a>
          </li>
          <li className="footer-item-link">
            <a className="footer-a" href="#">
              Order Online
            </a>
          </li>
          <li className="footer-item-link">
            <a className="footer-a" href="#">
              Our Locations
            </a>
          </li>
        </ul>
      </section>
      <section class="footer-link-group">
        <h2 className="footer-h2">Customer Service</h2>
        <ul class="footer-links">
          <li className="footer-item-link">
            <a className="footer-a" href="#">
              {" "}
              Contact Us
            </a>
          </li>
          <li className="footer-item-link">
            <a className="footer-a" href="#">
              FAQs
            </a>
          </li>
          <li className="footer-item-link">
            <a className="footer-a" href="#">
              Opening Hours
            </a>
          </li>
        </ul>
      </section>
      <section class="footer-link-group">
        <h2>Legal</h2>
        <ul class="footer-links">
          <li className="footer-item-link">
            <a className="footer-a" href="#">
              Privacy
            </a>
          </li>
          <li className="footer-item-link">
            <a className="footer-a" href="#">
              Terms and Conditions
            </a>
          </li>
          <li className="footer-item-link">
            <a className="footer-a" href="#">
              Cookies
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
