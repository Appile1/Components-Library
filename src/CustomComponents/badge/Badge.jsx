import React from "react";
import "./badge.css";

export default function Badge({ color = "black", children, shape = "" }) {
  return <h2 className={`${color} ${shape} badge`}>{children} </h2>;
}
