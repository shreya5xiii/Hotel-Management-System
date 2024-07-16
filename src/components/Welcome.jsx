import React from "react";
import Navbar from "./Navbar";
import Welcomediv from "./Welcomediv";
import Employee from "./Employee";
import History from "./History";
import Room from "./Room";
import "./style2.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Welcome({ setshowComp }) {
  return (
    <>
      <Navbar />
      <Welcomediv />
      <Room setshowComp={setshowComp} />
      <Employee setshowComp={setshowComp} />
      <History setshowComp={setshowComp} />
    </>
  );
}
