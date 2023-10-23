import React from "react";
import facebookIcon from "../icons/facebook.svg";
import twitterIcon from "../icons/twitter.svg";
import instagramIcon from "../icons/instagram.svg";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={classes.footer}>
        <img src={facebookIcon} alt="facebook-icon" />
        <img src={twitterIcon} alt="twitter-icon" />
        <img src={instagramIcon} alt="instagram-icon" />
      </footer>
      <p>&copy; Copyright Ping. All rights reserved.</p>
    </>
  );
};

export default Footer;
