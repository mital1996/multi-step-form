import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addsOnPlan: [],
  addonPrices: [],
  frequency: "",
};

const addsOnSlice = createSlice({
  name: "addsOn",
  initialState,
  reducers: {
    addOnSelectedPlan: (state, action) => {
      const { addsOnPlan, frequency } = action.payload;

      const addonPrices = addsOnPlan.map((addon) => {
        let price = 0;

        switch (addon) {
          case "Online Service":
            price = frequency === "yearly" ? 10 : 1;
            break;
          case "Larger storage":
          case "Customizable Profile":
            price = frequency === "yearly" ? 20 : 2;
            break;
          default:
            price = 0;
            break;
        }
        return { name: addon, price: price };
      });

      return {
        ...state,
        addsOnPlan: addsOnPlan,
        addonPrices: addonPrices,
        frequency: frequency,
      };
    },
  },
});

export const { addOnSelectedPlan } = addsOnSlice.actions;
export default addsOnSlice.reducer;
