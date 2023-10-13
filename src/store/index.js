import { configureStore } from "@reduxjs/toolkit";
import propSlice from "./slices/propSlice";
import headerSlice from "./slices/headerSlice";
import summarySlice from "./slices/summarySlice";
import selectedSlice from "./slices/selectedSlice";
export const store = configureStore({
  reducer: {
    props: propSlice,
    header: headerSlice,
    summary: summarySlice,
    selected_element: selectedSlice,
  },
});
