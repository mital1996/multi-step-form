import React from "react";
import MainContain from "../components/MainContain";
import thanks from "../images/icon-thank-you.svg";
import classes from "./style.module.css";

const FinalPage = () => {
  return (
    <div>
      <MainContain>
        <div className={classes.main_content}>
          <div className={classes.final_content}>
            <img src={thanks} alt="thank-you" />
            <h1>Thank You!</h1>
            <p>
              Thanks for confirming your subscription! We hope you have fun
              using our platform.If you ever need support, please feel free to
              email us at support@loremgaming.com.
            </p>
          </div>
        </div>
      </MainContain>
    </div>
  );
};

export default FinalPage;
