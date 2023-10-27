import React from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <div>
        <h2>TCS Burger Wala</h2>
        <p>We are trying to give you the best taste possible.</p>
        <em>We give attention to geniune feedback.</em> <br />
        <strong>All Rights Reserved @tcsburgerwala</strong>
      </div>
      <aside>
        <h4>Follow Us</h4>
        <a href="https://twitter.com/Jeetesh91263095">
          <AiFillTwitterSquare />
        </a>
        <a href="https://www.linkedin.com/in/jeetesh-kumar-064719220/">
          <AiFillLinkedin />
        </a>
        <a href="https://www.instagram.com/jeetesh_singh_/">
          <AiFillInstagram />
        </a>
        <a href="https://github.com/Jeetku">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
