import { createSlice } from "@reduxjs/toolkit";
import { getselected } from "./headerSlice";
import { Dispatch } from "@reduxjs/toolkit";

const initialState = {
  element: null,
  subset: null,
};

export const selectedSlice = createSlice({
  name: "props",
  initialState,
  reducers: {
    updateSelectedElement: (state, action) => {
      if (action.payload.element === "10") {
        console.log("this is simple", action.payload.listID);
        state.element = action.payload.element;
        state.subset = action.payload.listID;
      } else if (action.payload.element === "12") {
        console.log("this is simple", action.payload.subset);
        state.element = action.payload.element;
        state.subset = action.payload.subset;
      } else {
        state.element = action.payload.element;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateSelectedElement } = selectedSlice.actions;

export default selectedSlice.reducer;
