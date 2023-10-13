import { createSlice } from "@reduxjs/toolkit";
import { getselected } from "./headerSlice";
import { Dispatch } from "@reduxjs/toolkit";

const initialState = {
  fontsize: "",
  fontFamily: "",
  color: "",
  element: "",
};

export const propSlice = createSlice({
  name: "props",
  initialState,
  reducers: {
    changeProps: (state, action) => {
      console.log("props changed", action.payload);
      state = { ...state, ...action.payload };

      // if (action.payload.type === "fs") {
      //   state.fontsize = action.payload.fontSize;
      // } else if (action.payload.type === "ff") {
      //   state.fontFamily = action.payload.fontFamily;
      // } else if (action.payload.type === "co") {
      //   state.color = action.payload.color;
      // }
    },
    activateProps: (state, payload) => {
      console.log(payload);
      state = {
        ...state,
        active: payload.active,
      };
    },
    updateProps: (state, action) => {
      if (action.payload.selected === state.element) {
        // action.payload.dispatch(
        //   getselected({ active: true, type: "s", info: state })
        // );
      }
    },
    selectedElement: (state, action) => {
      state.element = action.payload.element;
    },
    clearProps: (state, action) => {
      state.element = {
        fontsize: "",
        fontFamily: "",
        color: "",
        element: "",
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeProps, activateProps, selectedElement, clearProps } =
  propSlice.actions;

export default propSlice.reducer;
