import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedPlan: "Arcade",
  billingFrequency: "monthly",
  selectedPlanPrice: 9,
};

const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    updateSelectedPlan: (state, action) => {
      const { selectedPlan, billingFrequency } = action.payload;
      let selectedPlanPrice = null;

      switch (selectedPlan) {
        case "Arcade":
          selectedPlanPrice = billingFrequency === "yearly" ? 90 : 9;
          break;
        case "Advanced":
          selectedPlanPrice = billingFrequency === "yearly" ? 120 : 12;
          break;
        case "Pro":
          selectedPlanPrice = billingFrequency === "yearly" ? 150 : 15;
          break;
        default:
          selectedPlanPrice = null;
          break;
      }

      return {
        ...state,
        selectedPlan,
        billingFrequency,
        selectedPlanPrice,
      };
    },
  },
});

export const { updateSelectedPlan } = planSlice.actions;
export default planSlice.reducer;
