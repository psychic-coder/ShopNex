import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to Our NewsLetter and Stay Updated</p>
      <div className="inputDiv">
        <input type="email" placeholder="Your Email Id" />
        <button>Subscribe</button>
        
      </div>
    </div>
  );
};

export default NewsLetter;
