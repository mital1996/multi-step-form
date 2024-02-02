import React from "react";
import MainContain from "../components/MainContain";
import classes from "./style.module.css";
import { Link } from "react-router-dom";
import InputButton from "../components/InputButton";

const SummaryPage = () => {
  return (
    <div>
      <MainContain>
        <div className={classes.main_content}>
          <h1>Summary Page</h1>
          <p>Double-check everything looks OK before confirming.</p>
          <div className={classes.summary_content}>
            <div className={classes.summary_first_row}>
              <div>
                <p>Arcade (monthly)</p>

                <Link to={"/"}>
                  <span>Change</span>
                </Link>
              </div>
              <p>$9/mo</p>
            </div>
            <hr />
            <div className={classes.summary_row}>
              <p>Larger storage</p>
              <span>$2/mo</span>
            </div>
            <div className={classes.summary_row}>
              <p>Larger storage</p>
              <span>$2/mo</span>
            </div>
          </div>
          <div className={classes.final_row}>
            <p>Total (per month)</p>
            <span>$2/mo</span>
          </div>
          <div className="d-flex justify-content-between mt-5">
            <Link to={"/add_on"} style={{ color: "gray" }}>
              Go Back
            </Link>
            <Link to={"/final"}>
              {" "}
              <InputButton text={"Confirm"} />
            </Link>
          </div>
        </div>
      </MainContain>
    </div>
  );
};

export default SummaryPage;
