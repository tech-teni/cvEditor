import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ktitle: {
    fontsize: "18px",
    fontFamily: "open sans",
    color: "black",
    selected: false,
    fontweight: "bold",
    id: "09",
  },

  kskills: {
    skills: [],
    fontsize: "18px",
    fontFamily: "open sans",
    color: "black",
    selected: false,
    fontweight: "bold",
  },
  email1: {
    fontsize: "15px",
    fontFamily: "open sans",
    color: "black",
    selected: false,
  },
  email2: {
    fontsize: "15px",
    fontFamily: "open sans",
    color: "black",
    selected: false,
  },
  address: {
    fontsize: "15px",
    fontFamily: "open sans",
    color: "black",
    selected: false,
  },
};

export const summarySlice = createSlice({
  name: "summary",
  initialState,
  reducers: {
    editHeaders: (state, action) => {
      if (action.payload.type === "s") {
        // state.surname.selected=
      } else if (action.payload.type === "f") {
      }
    },
    getselecteds: (state, action) => {
      console.log(action);
      console.log("testinggggg");

      if (action.payload.type === "sk" || action.payload.id === "09") {
        console.log("========>>>>", "prevoius", state.surname, "latest", {
          ...state.surname,
          ...action.payload.info,
        });
        state.ktitle = { ...state.ktitle, ...action.payload.info };
      } else if (action.payload.type === "f" || action.payload.id === "02") {
        state.firstname = { ...state.firstname, ...action.payload.info };
      } else if (action.payload.type === "p" || action.payload.id === "03") {
        state.phone = { ...state.phone, ...action.payload.info };
      } else if (action.payload.type === "e1" || action.payload.id === "04") {
        state.email1 = { ...state.email1, ...action.payload.info };
      } else if (action.payload.type === "e2" || action.payload.id === "05") {
        state.email2 = { ...state.email2, ...action.payload.info };
      } else if (action.payload.type === "ad" || action.payload.id === "06") {
        state.address = { ...state.address, ...action.payload.info };
      } else if (action.payload.type === "ad" || action.payload.id === "06") {
        state.address = { ...state.address, ...action.payload.info };
      } else if (action.payload.type === "st" || action.payload.id === "07") {
        state.Stitle = { ...state.Stitle, ...action.payload.info };
      } else if (action.payload.type === "sp" || action.payload.id === "08") {
        state.parasummary = { ...state.parasummary, ...action.payload.info };
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { editHeaders, getselecteds } = summarySlice.actions;

export default summarySlice.reducer;
