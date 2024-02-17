import React, { useState } from "react";
import MainContain from "../components/MainContain";
import classes from "./style.module.css";
import { Link } from "react-router-dom";
import InputButton from "../components/InputButton";
import { useDispatch, useSelector } from "react-redux";
import { addOnSelectedPlan } from "../features/addsOnSlice";

const AddsonPage = () => {
  const { billingFrequency } = useSelector((state) => state.plan);

  const dispatch = useDispatch();

  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });

  const handleCheckboxChange = (checkboxKey) => {
    setCheckboxes((prevCheckboxes) => {
      const updatedCheckboxes = {
        ...prevCheckboxes,
        [checkboxKey]: !prevCheckboxes[checkboxKey],
      };

      const selectedAddons = [];
      if (updatedCheckboxes.checkbox1) selectedAddons.push("Online Service");
      if (updatedCheckboxes.checkbox2) selectedAddons.push("Larger storage");
      if (updatedCheckboxes.checkbox3)
        selectedAddons.push("Customizable Profile");

      dispatch(
        addOnSelectedPlan({
          addsOnPlan: selectedAddons,
          frequency: billingFrequency,
        })
      );
      return updatedCheckboxes;
    });
  };

  return (
    <div>
      <MainContain>
        <div className={classes.main_content}>
          <h1>Pick add-ons</h1>
          <p>Add-ons help enhance your gaming experience.</p>
          <div className={classes.add_content}>
            <Link
              className={`${classes.add_card} ${
                checkboxes.checkbox1 && classes.checked
              }`}
              onClick={() => handleCheckboxChange("checkbox1")}
            >
              <div style={{ display: "flex" }}>
                <input
                  type="checkbox"
                  checked={checkboxes.checkbox1}
                  onChange={() => handleCheckboxChange("checkbox1")}
                />
                <div className={classes.add_div}>
                  <p>Online Service</p>
                  <span>Access to multiplayer games</span>
                </div>
              </div>
              <p className={classes.add_para}>
                {billingFrequency === "yearly" ? "+$10/mo" : "+$1/mo"}
              </p>
            </Link>
            <Link
              className={`${classes.add_card} ${
                checkboxes.checkbox2 && classes.checked
              }`}
              onClick={() => handleCheckboxChange("checkbox2")}
            >
              <div style={{ display: "flex" }}>
                <input
                  type="checkbox"
                  checked={checkboxes.checkbox2}
                  onChange={() => handleCheckboxChange("checkbox2")}
                />
                <div className={classes.add_div}>
                  <p>Larger storage</p>
                  <span>Extra 1TB of cloud save</span>
                </div>
              </div>
              <p className={classes.add_para}>{`${
                billingFrequency === "yearly" ? "+$20/mo" : "+$2/mo"
              }`}</p>
            </Link>
            <Link
              className={`${classes.add_card} ${
                checkboxes.checkbox3 && classes.checked
              }`}
              onClick={() => handleCheckboxChange("checkbox3")}
            >
              <div style={{ display: "flex" }}>
                <input
                  type="checkbox"
                  checked={checkboxes.checkbox3}
                  onChange={() => handleCheckboxChange("checkbox3")}
                />
                <div className={classes.add_div}>
                  <p>Customizable Profile</p>
                  <span>Custom theme on your profile</span>
                </div>
              </div>
              <p className={classes.add_para}>{`${
                billingFrequency === "yearly" ? "+$20/mo" : "+$2/mo"
              }`}</p>
            </Link>
          </div>
          <div className="d-flex justify-content-between mt-5">
            <Link to={"/plan"} style={{ color: "gray" }}>
              Go Back
            </Link>
            <Link to={"/summary"}>
              {" "}
              <InputButton text={"Next"} />
            </Link>
          </div>
        </div>
      </MainContain>
    </div>
  );
};

export default AddsonPage;
