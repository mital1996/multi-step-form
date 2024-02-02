import React from "react";
import classes from "./Switch.module.css";

const SwitchCheckbox = ({ isOn, handleToggle }) => {
  return (
    <div className={classes.check_contain}>
      <label htmlFor="monthly" style={{ color: isOn ? "gray" : "blue" }}>
        Monthly
      </label>

      <input
        checked={isOn}
        onChange={handleToggle}
        className={classes.react_switch_checkbox}
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        className={classes.react_switch_label}
        htmlFor={`react-switch-new`}
      >
        <span className={classes.react_switch_button} />
      </label>

      <label htmlFor="yearly" style={{ color: isOn ? "blue" : "gray" }}>
        Yearly
      </label>
    </div>
  );
};

export default SwitchCheckbox;
