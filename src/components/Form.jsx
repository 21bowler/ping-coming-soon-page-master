import React from "react";
import classes from "./Form.module.css";
import illustrationImg from "../assets/illustration-dashboard.png";

const Form = () => {
  return (
    <div>
      <form className={classes.form}>
        <input type="text" placeholder="Your email address..." />
        <button>Notify Me</button>
      </form>
      <img src={illustrationImg} alt="illus" />
    </div>
  );
};

export default Form;
