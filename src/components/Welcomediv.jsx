import React from "react";
import "./style2.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Welcomediv() {
  return (
    <div className="container" style={{ height: "70vh" }}>
      <div className="div">
        <h1 id="h1">WEL </h1>
        <h1 id="h2">COME</h1>
      </div>
      <div className="div">
        <h3 id="hotelname">{localStorage.getItem("loggedin_user_name")}</h3>
      </div>
    </div>
  );
}
