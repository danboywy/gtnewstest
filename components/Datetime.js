import React from "react";
import styles from "../styles/Home.module.css";
var datetime = () => {
  var showdate = new Date();
  var dt = showdate.toDateString();

  return <div className="datetime">{dt}</div>;
};

export default datetime;
