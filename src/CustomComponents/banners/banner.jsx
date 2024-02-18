import React from "react";
import "./banner.css";
import { MdReportGmailerrorred } from "react-icons/md";

export default function Banner({ status, children, title }) {
  return (
    <div className={`banner ${status}`}>
      {title && (
        <div className="content">
          <div className="icon">
            <MdReportGmailerrorred />
          </div>
          <div className="title">
            <h1>{title}</h1>
          </div>
        </div>
      )}
      {children && <p>{children}</p>}
    </div>
  );
}
