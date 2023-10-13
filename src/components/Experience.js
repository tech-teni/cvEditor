import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeProps,
  activateProps,
  selectedElement,
} from "../store/slices/propSlice";
import {
  editHeader,
  getselected,
  editSkillsText,
  editexperienceText,
} from "../store/slices/headerSlice";
import { updateSelectedElement } from "../store/slices/selectedSlice";

const Experience = () => {
  const dispatch = useDispatch();
  const propStore = useSelector((state) => state);
  const [title, setTitle] = useState("PROFESSIONAL EXPERIENCE");
  const [experience, setExperience] = useState();
  const [selected, setSelected] = useState("");
  const [selectedw, setSelectedw] = useState("");

  const [show, setShow] = useState({
    title: false,
    list: false,
  });
  return (
    <section className="experience">
      {show.title || show.list ? (
        <button
          className="clear-edit"
          onClick={() => {
            dispatch(updateSelectedElement({ element: "00" }));

            setShow({
              title: false,
              list: false,
            });
          }}
        >
          done
        </button>
      ) : (
        ""
      )}
      <h3>
        {" "}
        <span>
          {show.title ? (
            <span>
              <input
                style={{
                  color: propStore?.header?.Etitle?.color,
                  fontSize: propStore?.header?.Etitle?.fontsize + "px",
                  fontFamily: propStore?.header?.Etitle?.fontFamily,
                }}
                className="ex-tittle"
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </span>
          ) : (
            <span
              style={{
                color: propStore?.header?.Etitle?.color,
                fontSize: propStore?.header?.Etitle?.fontsize + "px",
                fontFamily: propStore?.header?.Etitle?.fontFamily,
                fontWeight: "bold",
              }}
              className="ex-tittle"
              onClick={(e) => {
                setShow({
                  title: true,
                  list: false,
                });
                dispatch(updateSelectedElement({ element: "11" }));
              }}
            >
              {title}
            </span>
          )}
        </span>
      </h3>

      <div className="experince-conatainer">
        <ul>
          {propStore.header.experiences.map((each, index) => {
            return (
              <li
                className="each-experience"
                onClick={() => {
                  setShow({
                    title: false,
                    list: true,
                  });

                  setSelected(index);
                  setSelectedw(each);
                }}
              >
                <h5 className="company-info">
                  <span
                    onClick={() => {
                      dispatch(
                        updateSelectedElement({
                          element: "12",
                          subset: "10" + index + "h",
                        })
                      );
                    }}
                  >
                    {console.log(
                      propStore.selected_element.subset,
                      "10" + index + "h"
                    )}
                    {selected === index &&
                    show.list &&
                    propStore.selected_element.subset === "10" + index + "h" ? (
                      <span>
                        <input
                          style={{
                            color:
                              propStore?.header?.experiences[index].company
                                .color,
                            fontSize:
                              propStore?.header?.experiences[index].company
                                .fontsize + "px",

                            fontFamily:
                              propStore?.header?.experiences[index].company
                                .fontFamily,
                            fontWeight: "bold",
                          }}
                          type="text"
                          value={each.company.text}
                          onChange={(e) => {
                            dispatch(
                              editexperienceText({
                                text: e.target.value,
                                id: index,
                                innerid: index + "c",
                              })
                            );
                            setSelectedw(e.target.value);
                          }}
                          // onMouseOut={() => {
                          //   setSurNameInput(false);
                          // }}
                        />
                      </span>
                    ) : (
                      <span
                        style={{
                          color:
                            propStore?.header?.experiences[index].company.color,
                          fontSize:
                            propStore?.header?.experiences[index].company
                              .fontsize + "px",

                          fontFamily:
                            propStore?.header?.experiences[index].company
                              .fontFamily,
                          fontWeight: "bold",
                          fontWeight: "bold",
                        }}
                        onClick={(e) => {
                          console.log(index);
                        }}
                      >
                        {each.company.text}
                      </span>
                    )}
                  </span>
                  <span
                    onClick={() => {
                      dispatch(
                        updateSelectedElement({
                          element: "12",
                          subset: "10" + index + "t",
                        })
                      );
                    }}
                  >
                    {" "}
                    <span>
                      {selected === index &&
                      show.list &&
                      propStore.selected_element.subset ===
                        "10" + index + "t" ? (
                        <span>
                          <input
                            style={{
                              color:
                                propStore?.header?.experiences[index].time
                                  .color,
                              fontSize:
                                propStore?.header?.experiences[index].time
                                  .fontsize + "px",

                              fontFamily:
                                propStore?.header?.experiences[index].time
                                  .fontFamily,
                              fontWeight: "bold",
                            }}
                            type="text"
                            value={each.time.text}
                            onChange={(e) => {
                              dispatch(
                                editexperienceText({
                                  text: e.target.value,
                                  id: index,
                                  innerid: index + "t",
                                })
                              );
                              setSelectedw(e.target.value);
                            }}
                            // onMouseOut={() => {
                            //   setSurNameInput(false);
                            // }}
                          />
                        </span>
                      ) : (
                        <span
                          style={{
                            color:
                              propStore?.header?.experiences[index].time.color,
                            fontSize:
                              propStore?.header?.experiences[index].time
                                .fontsize + "px",

                            fontFamily:
                              propStore?.header?.experiences[index].time
                                .fontFamily,
                            fontWeight: "bold",
                            fontWeight: "bold",
                          }}
                          onClick={(e) => {
                            console.log(index);
                          }}
                        >
                          {each.time.text}
                        </span>
                      )}
                    </span>
                  </span>
                </h5>
                <h5
                  className="designation"
                  onClick={() => {
                    dispatch(
                      updateSelectedElement({
                        element: "12",
                        subset: "10" + index + "d",
                      })
                    );
                  }}
                >
                  {selected === index &&
                  show.list &&
                  propStore.selected_element.subset === "10" + index + "d" ? (
                    <span>
                      <input
                        style={{
                          color:
                            propStore?.header?.experiences[index].designation
                              .color,
                          fontSize:
                            propStore?.header?.experiences[index].designation
                              .fontsize + "px",

                          fontFamily:
                            propStore?.header?.experiences[index].designation
                              .fontFamily,
                          fontWeight: "bold",
                        }}
                        type="text"
                        value={each.designation.text}
                        onChange={(e) => {
                          dispatch(
                            editexperienceText({
                              text: e.target.value,
                              id: index,
                              innerid: index + "d",
                            })
                          );
                          setSelectedw(e.target.value);
                        }}
                        // onMouseOut={() => {
                        //   setSurNameInput(false);
                        // }}
                      />
                    </span>
                  ) : (
                    <span
                      style={{
                        color:
                          propStore?.header?.experiences[index].designation
                            .color,
                        fontSize:
                          propStore?.header?.experiences[index].designation
                            .fontsize + "px",

                        fontFamily:
                          propStore?.header?.experiences[index].designation
                            .fontFamily,
                        fontWeight: "bold",
                        fontWeight: "bold",
                      }}
                      onClick={(e) => {
                        console.log(index);
                      }}
                    >
                      {each.designation.text}
                    </span>
                  )}
                </h5>
                <p
                  onClick={() => {
                    dispatch(
                      updateSelectedElement({
                        element: "12",
                        subset: "10" + index + "s",
                      })
                    );
                  }}
                >
                  {" "}
                  {selected === index &&
                  show.list &&
                  propStore.selected_element.subset === "10" + index + "s" ? (
                    <span>
                      <textarea
                        className="sum-ex"
                        style={{
                          color:
                            propStore?.header?.experiences[index].summary.color,
                          fontSize:
                            propStore?.header?.experiences[index].summary
                              .fontsize + "px",

                          fontFamily:
                            propStore?.header?.experiences[index].summary
                              .fontFamily,
                        }}
                        type="text"
                        value={
                          propStore?.header?.experiences[index].summary.text
                        }
                        onChange={(e) => {
                          dispatch(
                            editexperienceText({
                              text: e.target.value,
                              id: index,
                              innerid: index + "s",
                            })
                          );
                          setSelectedw(e.target.value);
                        }}
                        // onMouseOut={() => {
                        //   setSurNameInput(false);
                        // }}
                      />
                    </span>
                  ) : (
                    <span
                      style={{
                        color:
                          propStore?.header?.experiences[index].summary.color,
                        fontSize:
                          propStore?.header?.experiences[index].summary
                            .fontsize + "px",

                        fontFamily:
                          propStore?.header?.experiences[index].summary
                            .fontFamily,
                      }}
                      onClick={(e) => {
                        console.log(index);
                      }}
                    >
                      {each.summary.text}
                    </span>
                  )}
                </p>
                <p
                  onClick={() => {
                    dispatch(
                      updateSelectedElement({
                        element: "12",
                        subset: "10" + index + "a",
                      })
                    );
                  }}
                >
                  {" "}
                  {selected === index &&
                  show.list &&
                  propStore.selected_element.subset === "10" + index + "a" ? (
                    <span>
                      <input
                        style={{
                          color:
                            propStore?.header?.experiences[index]
                              .accomplishmentTitle.color,
                          fontSize:
                            propStore?.header?.experiences[index]
                              .accomplishmentTitle.fontsize + "px",

                          fontFamily:
                            propStore?.header?.experiences[index]
                              .accomplishmentTitle.fontFamily,
                        }}
                        type="text"
                        value={each.accomplishmentTitle.text}
                        onChange={(e) => {
                          dispatch(
                            editexperienceText({
                              text: e.target.value,
                              id: index,
                              innerid: index + "a",
                            })
                          );

                          setSelectedw(e.target.value);
                        }}
                        // onMouseOut={() => {
                        //   setSurNameInput(false);
                        // }}
                      />
                    </span>
                  ) : (
                    <span
                      style={{
                        color:
                          propStore?.header?.experiences[index]
                            .accomplishmentTitle.color,
                        fontSize:
                          propStore?.header?.experiences[index]
                            .accomplishmentTitle.fontsize + "px",

                        fontFamily:
                          propStore?.header?.experiences[index]
                            .accomplishmentTitle.fontFamily,
                      }}
                      onClick={(e) => {
                        console.log(index);
                      }}
                    >
                      {each.accomplishmentTitle.text}
                    </span>
                  )}
                </p>
                <ul>
                  {each.task.map((eachh, indexx) => {
                    return (
                      <li
                        onClick={() => {
                          dispatch(
                            updateSelectedElement({
                              element: "12",
                              subset: "10" + index + indexx,
                            })
                          );
                        }}
                      >
                        {selected === index &&
                        show.list &&
                        propStore.selected_element.subset ===
                          "10" + index + indexx ? (
                          <span>
                            <textarea
                              style={{
                                color:
                                  propStore?.header?.experiences[index].task[
                                    indexx
                                  ].color,
                                fontSize:
                                  propStore?.header?.experiences[index].task[
                                    indexx
                                  ].fontsize + "px",

                                fontFamily:
                                  propStore?.header?.experiences[index].task[
                                    indexx
                                  ].fontFamily,
                              }}
                              className="edit-li"
                              type="text"
                              value={each.task[index].text}
                              onChange={(e) => {
                                dispatch(
                                  editexperienceText({
                                    text: e.target.value,
                                    id: index,
                                    innerid: index + "l" + indexx,
                                  })
                                );
                                setSelectedw(e.target.value);
                              }}
                              // onMouseOut={() => {
                              //   setSurNameInput(false);
                              // }}
                            />
                          </span>
                        ) : (
                          <span
                            style={{
                              color:
                                propStore?.header?.experiences[index].task[
                                  indexx
                                ].color,
                              fontSize:
                                propStore?.header?.experiences[index].task[
                                  indexx
                                ].fontsize + "px",

                              fontFamily:
                                propStore?.header?.experiences[index].task[
                                  indexx
                                ].fontFamily,
                            }}
                            onClick={(e) => {
                              console.log(index);
                            }}
                          >
                            {each.task[index].text}
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
