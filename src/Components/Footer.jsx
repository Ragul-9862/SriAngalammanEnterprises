import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row footer-main">
        <div className="col-lg-3">
           
          </div>
          <div className="col-lg-3">
            <h4>Reach Us</h4>
            <p>123 Main Street</p>
            <p>City, State, Zip</p>
            <p>Phone: 123-456-7890</p>
          </div>
         
          <div className="col-lg-3">
            <h4>Address</h4>
            <p>123 Main Street</p>
            <p>City, State, Zip</p>
          </div>
          <div className="col-lg-3 social-links">
            <h4>Social Links</h4>
            <ul>
              <li><a href="#"><FaFacebook /></a></li>
              <li><a href="#"><FaXTwitter/></a></li>
              <li><a href="#"><FaWhatsapp/></a></li>
              <li><a href="#"> <FaInstagram/> </a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
