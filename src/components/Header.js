import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeProps,
  activateProps,
  selectedElement,
} from "../store/slices/propSlice";
import { clearProps } from "../store/slices/propSlice";
import { updateSelectedElement } from "../store/slices/selectedSlice";
import { editHeader, getselected } from "../store/slices/headerSlice";
const Header = () => {
  const dispatch = useDispatch();
  const propStore = useSelector((state) => state);

  console.log(propStore);
  const [firstName, setFirstName] = useState("Mitchell");
  const [firstNameInput, setFirstNameInput] = useState(false);
  const [props, setProps] = useState({
    fontsize: "",
    fontFamily: "",
    color: "",
    element: "",
  });

  const [surName, setSurName] = useState("Henrietta");
  const [show, setShow] = useState({
    surname: false,
    firstname: false,
    phone: false,
    email1: false,
    email2: false,
    address: false,
  });
  const [showButton, setShowButton] = useState(false);

  const [surNameInput, setSurNameInput] = useState(false);
  const [phone, setPhone] = useState("+123-456-7890 ");
  const [email1, setEmail1] = useState("hello@reallygreatsite.com");
  const [email2, setEmail2] = useState("@reallygreatsite.com");
  const [address, setAddress] = useState(
    "123 Anywhere St., Any City, ST 12345"
  );

  const [storeSurName, setStoreSurName] = useState({
    fontsize: "30px",
    fontFamily: "open sans",
    color: "black",
    selected: false,
  });

  useEffect(() => {}, [showButton]);
  return (
    <header>
      {show.surname ||
      show.firstname ||
      show.phone ||
      show.email1 ||
      show.email2 ||
      show.address ? (
        <button
          className="clear-edit"
          onClick={() => {
            dispatch(updateSelectedElement({ element: "00" }));

            setShow({
              surname: false,
              firstname: false,
              phone: false,
              email1: false,
              email2: false,
              address: false,
            });
          }}
        >
          done
        </button>
      ) : (
        ""
      )}
      <h1
      // style={{
      //   fontSize: "30px",
      //   fontFamily: "sans-serif",
      //   color: "black",
      // }}
      >
        <span>
          {show.surname ? (
            <span>
              <input
                style={{
                  color: propStore?.header?.surname?.color,
                  fontSize: propStore?.header?.surname?.fontsize + "px",
                  fontFamily: propStore?.header?.surname?.fontFamily,
                }}
                className="h1"
                type="text"
                value={surName}
                onChange={(e) => {
                  setSurName(e.target.value);

                  dispatch(
                    getselected({
                      active: true,
                      type: "s",
                      info: propStore.props,
                    })
                  );
                  dispatch(editHeader({ active: true }));
                }}
                onMouseOut={() => {
                  // dispatch(clearProps());
                }}
              />
            </span>
          ) : (
            <span
              style={{
                color: propStore?.header?.surname?.color,
                fontSize: propStore?.header?.surname?.fontsize + "px",
                fontFamily: propStore?.header?.surname?.fontFamily,
              }}
              onClick={(e) => {
                setShow({
                  surname: true,
                  firstname: false,
                  phone: false,
                  email1: false,
                  email2: false,
                  address: false,
                });

                dispatch(updateSelectedElement({ element: "01" }));
              }}
            >
              {surName}
            </span>
          )}
        </span>

        <span>
          {show.firstname ? (
            <span>
              <input
                style={{
                  color: propStore?.header?.firstname?.color,
                  fontSize: propStore?.header?.firstname?.fontsize + "px",
                  fontFamily: propStore?.header?.firstname?.fontFamily,
                }}
                className="h1"
                type="text"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                onMouseOut={() => {
                  // setFirstNameInput(false);
                }}
              />
            </span>
          ) : (
            <span
              style={{
                color:
                  propStore.props.element === "02"
                    ? propStore?.props?.color
                    : propStore?.header?.firstname?.color,
                fontSize:
                  propStore.props.element === "02"
                    ? propStore?.props?.fontsize + "px"
                    : propStore?.header?.firstname?.fontsize + "px",

                fontFamily:
                  propStore.props.element === "02"
                    ? propStore?.props?.fontFamily
                    : propStore?.header?.firstname?.fontFamily,
              }}
              onClick={(e) => {
                // setProps({ ...props, element: "firstName" });
                setShow({
                  surname: false,
                  firstname: true,
                  phone: false,
                  email1: false,
                  email2: false,
                  address: false,
                });
                dispatch(updateSelectedElement({ element: "02" }));
              }}
            >
              {firstName}
            </span>
          )}
        </span>
      </h1>
      <p className="para1">
        <span>
          {show.phone ? (
            <span>
              <input
                style={{
                  color: propStore?.header?.phone?.color,
                  fontSize: propStore?.header?.phone?.fontsize + "px",
                  fontFamily: propStore?.header?.phone?.fontFamily,
                }}
                type="text"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                // onMouseOut={() => {
                //   setSurNameInput(false);
                // }}
              />
            </span>
          ) : (
            <span
              style={{
                color: propStore?.header?.phone?.color,
                fontSize: propStore?.header?.phone?.fontsize,
                fontFamily: propStore?.header?.phone?.fontFamily,
              }}
              onClick={(e) => {
                setShow({
                  surname: false,
                  firstname: false,
                  phone: true,
                  email1: false,
                  email2: false,
                  address: false,
                });
                dispatch(updateSelectedElement({ element: "03" }));
              }}
            >
              {phone}
            </span>
          )}
        </span>
        <span>
          {show.email1 ? (
            <span>
              <input
                style={{
                  color: propStore?.header?.email1?.color,
                  fontSize: propStore?.header?.email1?.fontsize + "px",
                  fontFamily: propStore?.header?.email1?.fontFamily,
                }}
                type="text"
                value={email1}
                onChange={(e) => {
                  setEmail1(e.target.value);
                  dispatch(editHeader({ active: true }));
                }}
                // onMouseOut={() => {
                //   setSurNameInput(false);
                // }}
              />
            </span>
          ) : (
            <span
              style={{
                color: propStore?.header?.email1?.color,
                fontSize: propStore?.header?.email1?.fontsize,
                fontFamily: propStore?.header?.email1?.fontFamily,
              }}
              onClick={(e) => {
                setShow({
                  surname: false,
                  firstname: false,
                  phone: false,
                  email1: true,
                  email2: false,
                  address: false,
                });
                dispatch(updateSelectedElement({ element: "04" }));
              }}
            >
              {" " + email1 + " "}
            </span>
          )}
        </span>

        <span>
          {show.email2 ? (
            <span>
              <input
                style={{
                  color: propStore?.header?.email2?.color,
                  fontSize: propStore?.header?.email2?.fontsize + "px",

                  fontFamily: propStore?.header?.email2?.fontFamily,
                }}
                type="text"
                value={email2}
                onChange={(e) => {
                  setEmail2(e.target.value);
                }}
                // onMouseOut={() => {
                //   setSurNameInput(false);
                // }}
              />
            </span>
          ) : (
            <span
              style={{
                color: propStore?.header?.email2?.color,
                fontSize: propStore?.header?.email2?.fontsize,
                fontFamily: propStore?.header?.email2?.fontFamily,
              }}
              onClick={(e) => {
                setShow({
                  surname: false,
                  firstname: false,
                  phone: false,
                  email1: false,
                  email2: true,
                  address: false,
                });
                dispatch(updateSelectedElement({ element: "05" }));
              }}
            >
              {" " + email1 + " "}
            </span>
          )}
        </span>
      </p>
      <p className="para2">
        <span>
          {show.address ? (
            <span>
              <input
                style={{
                  width: "80%",
                  marginTop: "10px",
                  color: propStore?.header.address?.color,
                  fontSize: propStore?.header.address?.fontsize + "px",
                  fontFamily: propStore?.header.address?.fontFamily,
                }}
                type="text"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                // onMouseOut={() => {
                //   setSurNameInput(false);
                // }}
              />
            </span>
          ) : (
            <span
              style={{
                color: propStore?.header.address?.color,
                fontSize: propStore?.header.address?.fontsize,

                fontFamily: propStore?.header.address?.fontFamily,
              }}
              onClick={(e) => {
                setShow({
                  surname: false,
                  firstname: false,
                  phone: false,
                  email1: false,
                  email2: false,
                  address: true,
                });

                dispatch(updateSelectedElement({ element: "06" }));
              }}
            >
              {address}
            </span>
          )}
        </span>
      </p>
    </header>
  );
};

export default Header;
