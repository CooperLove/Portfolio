import React from "react";
import { social } from "../Data";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-socialMedia" id="social">
        {social.map((socialMedia) => {
          const { id, url, icon } = socialMedia;
          return (
            <div key={id}>
              <a href={url}>{icon}</a>
            </div>
          );
        })}
      </div>
      <h4>Email: godloveqwer@gmail.com</h4>
    </footer>
  );
}

export default Footer;
