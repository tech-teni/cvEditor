import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { editHeader, getselected } from "../store/slices/headerSlice";
import { SketchPicker, PhotoshopPicker } from "react-color";
import {
  changeProps,
  activateProps,
  selectedElement,
} from "../store/slices/propSlice";
const Navbar = () => {
  const [fontArray, setFontArray] = useState([
    2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 30, 32,
  ]);
  const [fontFamilyArray, setFontFamilyArray] = useState([
    { family: "sans-serif" },
    { family: "Arial, Helvetica, sans-serif" },
    { family: "open sans" },
    { family: "Noto Sans, sans-serif" },
    { family: "Gill Sans, sans-serif" },
    { family: "Courier New, monospace" },
    { family: "Apple Chancery, cursive" },
  ]);
  const [fontSize, setFontsize] = useState("");

  const [color, setColor] = useState("#000000");
  const [showColor, setShowColor] = useState(false);

  const dispatch = useDispatch();
  const propStore = useSelector((state) => state);

  useEffect(() => {
    // "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyAdp8N1v44Mk__AWi79mdWhs34f4IwX3qk"

    axios
      .get(
        "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyAdp8N1v44Mk__AWi79mdWhs34f4IwX3qk"
      )
      .then(function (response) {
        // handle success
        console.log(response);
        // setFontFamilyArray([...fontFamilyArray, ...response.data.items]);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div className="navbar">
      <div>
        <label>Font-size</label>
        <select
          onChange={(e) => {
            dispatch(changeProps({ fontSize: e.target.value, type: "fs" }));
            dispatch(
              getselected({
                listID: propStore.selected_element.subset,
                sub: propStore.selected_element.subset,
                id: propStore.selected_element.element,
                info: {
                  // ...propStore.props,
                  fontsize: e.target.value,
                },
              })
            );
          }}
        >
          {fontArray.map((each) => {
            return (
              <option key={each} value={each}>
                {each}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label>Font-family</label>
        <select
          onChange={(e) => {
            dispatch(changeProps({ fontFamily: e.target.value, type: "ff" }));
            dispatch(
              getselected({
                listID: propStore.selected_element.subset,
                sub: propStore.selected_element.subset,
                id: propStore.selected_element.element,
                info: {
                  // ...propStore.props,
                  fontFamily: e.target.value,
                },
              })
            );
          }}
        >
          {fontFamilyArray.map((each) => {
            return <option value={each.family}>{each.family}</option>;
          })}
        </select>
      </div>

      <div className="props">
        <label
          onClick={() => {
            setShowColor(!showColor);
          }}
          style={{
            color: showColor ? "white" : "#6d2a2a",
            borderRadius: showColor ? "10px" : "10px",

            backgroundColor: showColor ? "#137648" : "grey",
            padding: "6px",
          }}
        >
          {showColor ? "Close color" : "Choose color"}
        </label>
        <div className="color-picker-con">
          {showColor && (
            <SketchPicker
              color={color}
              onChangeComplete={(color) => {
                console.log(color);
                setColor(color.hex);

                dispatch(changeProps({ color: color.hex, type: "co" }));

                dispatch(
                  getselected({
                    listID: propStore.selected_element.subset,
                    sub: propStore.selected_element.subset,
                    id: propStore.selected_element.element,
                    info: {
                      // ...propStore.props,
                      color: color.hex,
                    },
                  })
                );
              }}
            />
          )}{" "}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
