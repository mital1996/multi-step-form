import React from "react";
import sidebar from "../images/bg-sidebar-desktop.svg";
import classes from "./Navigation.module.css";
import { useLocation } from "react-router";

const NavigationBar = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <div className={classes.img_content}>
        <img src={sidebar} alt="sidebar" />
      </div>
      <ul>
        <li className={classes.content}>
          <p
            className={
              pathname === "/" ? classes.active_button : classes.roundButton
            }
          >
            1
          </p>
          <div>
            <p>Step 1</p>
            <p className={classes.other_para}>YOUR INFO</p>
          </div>
        </li>
        <li className={classes.content}>
          <p
            className={
              pathname === "/plan" ? classes.active_button : classes.roundButton
            }
          >
            2
          </p>
          <div>
            <p>Step 2</p>
            <p className={classes.other_para}>SELECT PLAN</p>
          </div>
        </li>
        <li className={classes.content}>
          <p
            className={
              pathname === "/add_on"
                ? classes.active_button
                : classes.roundButton
            }
          >
            3
          </p>
          <div>
            <p>Step 3</p>
            <p className={classes.other_para}>ADD-ONS</p>
          </div>
        </li>
        <li className={classes.content}>
          <p
            className={
              pathname === "/summary" || pathname === "/final"
                ? classes.active_button
                : classes.roundButton
            }
          >
            4
          </p>
          <div>
            <p>Step 4</p>
            <p className={classes.other_para}>SUMMARY</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;
