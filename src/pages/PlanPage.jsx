import React, { useState } from "react";
import MainContain from "../components/MainContain";
import classes from "./style.module.css";
import arcade from "../images/icon-arcade.svg";
import advanced from "../images/icon-advanced.svg";
import pro from "../images/icon-pro.svg";
import { Link } from "react-router-dom";
import InputButton from "../components/InputButton";
import SwitchCheckbox from "../components/SwitchCheckbox";

const PlanPage = () => {
  const [value, setValue] = useState("monthly");
  return (
    <div>
      <MainContain>
        <div className={classes.main_content}>
          <h1>Select Your Plan</h1>
          <p>You have the option of monthly or yearly billing.</p>
          <div className={classes.card_contain}>
            <Link className={classes.card}>
              <img src={arcade} alt="arcade" />
              <div>
                <p>Arcade</p>
                <span>$9/mo</span>
                {value === "yearly" && (
                  <p className={classes.para}>2 Months Free</p>
                )}
              </div>
            </Link>
            <Link className={classes.card}>
              <img src={advanced} alt="advanced" />
              <div>
                <p>Advanced</p>
                <span>$12/mo</span>
                {value === "yearly" && (
                  <p className={classes.para}>2 Months Free</p>
                )}
              </div>
            </Link>
            <Link className={classes.card}>
              <img src={pro} alt="pro" />
              <div>
                <p>Pro</p>
                <span>$15/mo</span>
                {value === "yearly" && (
                  <p className={classes.para}>2 Months Free</p>
                )}
              </div>
            </Link>
          </div>
          <div className={classes.check_contain}>
            <SwitchCheckbox
              isOn={value === "yearly"}
              handleToggle={() =>
                setValue(value === "monthly" ? "yearly" : "monthly")
              }
            />
          </div>
          <div className="d-flex justify-content-between mt-5">
            <Link to={"/"} style={{ color: "gray" }}>
              Go Back
            </Link>
            <Link to={"/add_on"}>
              {" "}
              <InputButton text={"Next"} />
            </Link>
          </div>
        </div>
      </MainContain>
    </div>
  );
};

export default PlanPage;
