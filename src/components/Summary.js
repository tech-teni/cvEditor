import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeProps,
  activateProps,
  selectedElement,
} from "../store/slices/propSlice";
import { updateSelectedElement } from "../store/slices/selectedSlice";
import { editHeader, getselected } from "../store/slices/headerSlice";

const Summary = () => {
  const dispatch = useDispatch();
  const propStore = useSelector((state) => state);
  const [title, setTitle] = useState("OPERATIONS MANAGER");
  const [para, setPara] = useState(
    "An accomplished Operations Manager with a track record of success in media management and leadership roles. Experienced in leading fghfv managing media operationghfgdds in North America and APAC, improvingteam performance, and forging partnerships with internal and external stakeholders. Specializes in launching new media products and services from concept to roll-out, with expertise in subscription video-on-demand and over-the-top streaming."
  );
  const [show, setShow] = useState({
    title: false,
    para: false,
  });
  return (
    <section className="summary">
      <h3>
        {show.title || show.para ? (
          <button
            className="clear-edit"
            onClick={() => {
              dispatch(updateSelectedElement({ element: "00" }));

              setShow({
                title: false,
                para: false,
              });
            }}
          >
            done
          </button>
        ) : (
          ""
        )}
        <span>
          {show.title ? (
            <span>
              <input
                style={{
                  width: "250px",
                  color: propStore?.header?.Stitle?.color,
                  fontSize: propStore?.header?.Stitle?.fontsize + "px",
                  fontFamily: propStore?.header?.Stitle?.fontFamily,
                  fontWeight: "bold",
                }}
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                // onMouseOut={() => {
                //   setSurNameInput(false);
                // }}
              />
            </span>
          ) : (
            <span
              style={{
                color: propStore?.header?.Stitle?.color,
                fontSize: propStore?.header?.Stitle?.fontsize + "px",
                fontFamily: propStore?.header?.Stitle?.fontFamily,
                fontWeight: "bold",
              }}
              onClick={(e) => {
                setShow({
                  title: true,
                  para: false,
                });
                dispatch(updateSelectedElement({ element: "07" }));
              }}
            >
              {title}
            </span>
          )}
        </span>
      </h3>
      <p>
        {" "}
        <span>
          {show.para ? (
            <span>
              <textarea
                style={{
                  color: propStore?.header?.parasummary?.color,
                  fontSize: propStore?.header?.parasummary?.fontsize + "px",
                  fontFamily: propStore?.header?.parasummary?.fontFamily,
                  fontWeight: "light",
                }}
                className="input-sum"
                type="text"
                value={para}
                onChange={(e) => {
                  setPara(e.target.value);
                  dispatch(editHeader({ active: true }));
                }}
                // onMouseOut={() => {
                //   setSurNameInput(false);
                // }}
              ></textarea>
            </span>
          ) : (
            <span
              style={{
                color: propStore?.header?.parasummary?.color,
                fontSize: propStore?.header?.parasummary?.fontsize + "px",
                fontFamily: propStore?.header?.parasummary?.fontFamily,
                fontWeight: "light",
              }}
              onClick={(e) => {
                setShow({
                  title: false,
                  para: true,
                });
                dispatch(updateSelectedElement({ element: "08" }));
              }}
            >
              {para}
            </span>
          )}
        </span>
      </p>
    </section>
  );
};

export default Summary;
