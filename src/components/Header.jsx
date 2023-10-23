import React from "react";
import pingLogo from "../assets/logo.svg";
import Form from "./Form";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <img src={pingLogo} alt="ping-logo" />
      <h1>
        <span>We are launching</span> soon!
      </h1>
      <p>Subscribe and get notified</p>
      <Form />
    </div>
  );
};

export default Header;
