import React, { useState } from "react";
import MainContain from "../components/MainContain";
import classes from "./style.module.css";
import arcade from "../images/icon-arcade.svg";
import advanced from "../images/icon-advanced.svg";
import pro from "../images/icon-pro.svg";
import { Link } from "react-router-dom";
import InputButton from "../components/InputButton";
import SwitchCheckbox from "../components/SwitchCheckbox";
import { useDispatch, useSelector } from "react-redux";
import { updateSelectedPlan } from "../features/planSlice";

const PlanPage = () => {
  const [value, setValue] = useState("monthly");
  const { selectedPlan, billingFrequency } = useSelector((state) => state.plan);

  const dispatch = useDispatch();
  const handlePlanSelect = (selectedPlan) => {
    dispatch(updateSelectedPlan({ selectedPlan, billingFrequency: value }));
  };

  const handleToggle = () => {
    const updatedValue = value === "monthly" ? "yearly" : "monthly";
    setValue(updatedValue);

    dispatch(
      updateSelectedPlan({
        selectedPlan,
        billingFrequency: updatedValue,
      })
    );
  };

  return (
    <div>
      <MainContain>
        <div className={classes.main_content}>
          <h1>Select Your Plan</h1>
          <p>You have the option of monthly or yearly billing.</p>
          <div className={classes.card_contain}>
            <Link
              className={`${classes.card} ${
                selectedPlan === "Arcade" && classes.selectedCard
              }`}
              onClick={() => handlePlanSelect("Arcade")}
            >
              <img src={arcade} alt="arcade" />
              <div>
                <p>Arcade</p>
                <span>{`${value === "yearly" ? "$90/yr" : "$9/mo"}`}</span>
                {value === "yearly" && (
                  <p className={classes.para}>2 Months Free</p>
                )}
              </div>
            </Link>
            <Link
              className={`${classes.card} ${
                selectedPlan === "Advanced" && classes.selectedCard
              }`}
              onClick={() => handlePlanSelect("Advanced")}
            >
              <img src={advanced} alt="advanced" />
              <div>
                <p>Advanced</p>
                <span>{`${value === "yearly" ? "$120/yr" : "$12/mo"}`}</span>
                {value === "yearly" && (
                  <p className={classes.para}>2 Months Free</p>
                )}
              </div>
            </Link>
            <Link
              className={`${classes.card} ${
                selectedPlan === "Pro" && classes.selectedCard
              }`}
              onClick={() => handlePlanSelect("Pro")}
            >
              <img src={pro} alt="pro" />
              <div>
                <p>Pro</p>
                <span>{`${value === "yearly" ? "$150/yr" : "$15/mo"}`}</span>
                {value === "yearly" && (
                  <p className={classes.para}>2 Months Free</p>
                )}
              </div>
            </Link>
          </div>
          <div className={classes.check_contain}>
            <SwitchCheckbox
              billingFrequency={billingFrequency}
              handleToggle={handleToggle}
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
