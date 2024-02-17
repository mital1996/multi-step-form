import React from "react";
import MainContain from "../components/MainContain";
import classes from "./style.module.css";
import { Link } from "react-router-dom";
import InputButton from "../components/InputButton";
import { useSelector } from "react-redux";

const SummaryPage = () => {
  const { addonPrices } = useSelector((state) => state.addsOn);

  const { billingFrequency, selectedPlan, selectedPlanPrice } = useSelector(
    (state) => state.plan
  );

  const totalAddonPrice = addonPrices.reduce(
    (total, addon) => total + addon.price,
    0
  );
  const totalMonthlyPrice = selectedPlanPrice + totalAddonPrice;

  const planDuration =
    billingFrequency === "yearly" ? "yr" : billingFrequency.slice(0, 2);

  return (
    <div>
      <MainContain>
        <div className={classes.main_content}>
          <h1>Summary Page</h1>
          <p>Double-check everything looks OK before confirming.</p>
          <div className={classes.summary_content}>
            <div className={classes.summary_first_row}>
              <div>
                <p>{`${selectedPlan} (${billingFrequency})`}</p>

                <Link to={"/"}>
                  <span>Change</span>
                </Link>
              </div>

              <p>{`${selectedPlanPrice}/${planDuration}`}</p>
            </div>
            <hr />
            {addonPrices.map((addplan) => {
              if (addplan) {
                return (
                  <div key={addplan} className={classes.summary_row}>
                    <p>{addplan.name}</p>
                    <span>{`$${addplan.price}/mo`}</span>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
          <div className={classes.final_row}>
            <p>Total (per month)</p>
            <span>{`$${totalMonthlyPrice}/mo`}</span>
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
