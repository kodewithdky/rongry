import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <h5 className="text-center">All right reserved &copy; RONGRY</h5>
      <p className="text-center mt-2">
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/policy">Policy</Link>
      </p>
    </div>
  );
};

export default Footer;
