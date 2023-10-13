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
} from "../store/slices/headerSlice";
import { updateSelectedElement } from "../store/slices/selectedSlice";
const Skills = () => {
  const dispatch = useDispatch();
  const propStore = useSelector((state) => state);
  const [title, setTitle] = useState("Key Competencies");
  const [selected, setSelected] = useState("");
  const [selectedw, setSelectedw] = useState("");
  const [titlec, setTitlec] = useState("");
  const [storeSelected, setStoreSelected] = useState("");

  const [show, setShow] = useState({
    title: false,
    list: false,
  });
  useEffect(() => {
    setStoreSelected(propStore.selected_element.subset);
  }, [propStore.selected_element.subset]);
  console.log(propStore?.header?.skills?.skills);

  return (
    <section className="skills">
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
                  color: propStore?.header?.Sktitle?.color,
                  fontSize: propStore?.header?.Sktitle?.fontsize + "px",

                  fontFamily: propStore?.header?.Sktitle?.fontFamily,
                  fontWeight: "bold",
                }}
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                id="yy"
              />
            </span>
          ) : (
            <span
              style={{
                color: propStore?.header?.Sktitle?.color,
                fontSize: propStore?.header?.Sktitle?.fontsize + "px",

                fontFamily: propStore?.header?.Sktitle?.fontFamily,
                fontWeight: "bold",
              }}
              onClick={(e) => {
                setShow({
                  title: true,
                  list: false,
                });
                dispatch(updateSelectedElement({ element: "09" }));
              }}
            >
              {title}
            </span>
          )}
        </span>
      </h3>

      <ul className="skills-list">
        {propStore.header.skills.skills.map((each, index) => {
          return (
            <li
              key={index}
              onClick={(e) => {
                setShow({
                  title: false,
                  list: true,
                });
                dispatch(
                  updateSelectedElement({
                    element: "10",
                    listID: "10" + index,
                  })
                );

                setSelected(index);
                setSelectedw(each);
                console.log("10" + index, propStore.selected_element.subset);
              }}
            >
              {" "}
              <span>
                {selected === index && show.list ? (
                  <span>
                    <input
                      style={{
                        color: propStore?.header?.skills?.skills[index].color,
                        fontSize:
                          propStore?.header?.skills?.skills[index].fontsize +
                          "px",

                        fontFamily:
                          propStore?.header?.skills?.skills[index].fontFamily,
                      }}
                      type="text"
                      value={propStore?.header?.skills?.skills[index].text}
                      onChange={(e) => {
                        dispatch(
                          editSkillsText({
                            text: e.target.value,
                            id: index,
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
                      color: propStore?.header?.skills?.skills[index].color,
                      fontSize:
                        propStore?.header?.skills?.skills[index].fontsize +
                        "px",

                      fontFamily:
                        propStore?.header?.skills?.skills[index].fontFamily,
                    }}
                    onClick={(e) => {
                      console.log(index);
                    }}
                  >
                    {each?.text}
                  </span>
                )}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Skills;
