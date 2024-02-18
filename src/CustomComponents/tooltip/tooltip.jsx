import React from "react";
import { IoMdWarning, IoIosInformationCircle } from "react-icons/io";
import { BiSolidError } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
import "./tooltip.css";

export default function Tooltip({ Type }) {
  const Id = React.useId();

  const handleClose = () => {
    document.getElementById(Id).classList.add("none");
  };

  if (Type === "success") {
    return (
      <div className={`${Type} tooltip`} id={Id}>
        <div className="button">
          <div className="head">
            <div className="icon">
              <TiTick />
            </div>
            <h3>Success</h3>
          </div>
          <button className="btn" onClick={handleClose}>
            x
          </button>
        </div>
        <p className="message">Your work has been saved</p>
      </div>
    );
  }
  if (Type === "warning") {
    return (
      <div className={`${Type} tooltip`} id={Id}>
        <div className="button">
          <div className="head">
            <div className="icon">
              <IoMdWarning />
            </div>
            <h3>Warning</h3>
          </div>
          <button className="btn" onClick={handleClose}>
            x
          </button>
        </div>
        <p className="message">A network error was detected </p>
      </div>
    );
  }
  if (Type === "information") {
    return (
      <div className={`${Type} tooltip`} id={Id}>
        <div className="button">
          <div className="head">
            <div className="icon">
              <IoIosInformationCircle />
            </div>
            <h3>Information</h3>
          </div>
          <button className="btn" onClick={handleClose}>
            x
          </button>
        </div>
        <p className="message">Please read updated information</p>
      </div>
    );
  }
  if (Type === "error") {
    return (
      <div className={`${Type} tooltip`} id={Id}>
        <div className="button">
          <div className="head">
            <div className="icon">
              <BiSolidError />
            </div>
            <h3>Error</h3>
          </div>
          <button className="btn" onClick={handleClose}>
            x
          </button>
        </div>
        <p className="message">Please re-save your work again</p>
      </div>
    );
  }
}
