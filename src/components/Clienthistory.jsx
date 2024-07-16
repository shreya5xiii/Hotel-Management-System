import React from "react";
import "./style3.css";
import { useEffect } from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Clienthistory({ setshowComp }) {
  const [tabledata, settabledata] = useState([]);
  useEffect(() => {
    try {
      const dbName = localStorage.getItem("loggedin_user_name");
      fetch(`http://localhost:3000/clienthistory?dbName=${dbName}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          settabledata(data);
        });
    } catch (error) {
      console.error("Error:", error);
    }
  }, []);

  const goBackToStartPage = () => {
    setshowComp(0);
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="card cardform">
          <div className="card-header text-center">
            <span
              className="float-start"
              data-bs-toggle="tooltip"
              data-bs-placement="left"
              title="Go back to start chat"
              onClick={goBackToStartPage}
            >
              <i className="fa fa-arrow-left"></i>
            </span>
            <h3>All Client Information</h3>
          </div>
          <div className="card-body allroomcont allclientdiv">
            <table className="table " id="room-list">
              <thead>
                <tr>
                  <td>Customer Name</td>
                  <td>ID type</td>
                  <td>ID number</td>
                  <td>Mobile Number</td>
                  <td>Gender</td>
                  <td>Room Number</td>
                  <td>In Date</td>
                  <td>In Time</td>
                  <td>Deposite</td>
                  <td>Out Date</td>
                  <td>Out Time</td>
                  <td>Final Price</td>
                </tr>
              </thead>
              <tbody>
                {tabledata.length === 0 ? (
                  <tr>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                ) : (
                  tabledata.map((card) => {
                    return (
                      <tr key={card.roomNo}>
                        <td>{card.custname}</td>
                        <td>{card.custidtype}</td>
                        <td>{card.custidnumber}</td>
                        <td>{card.custmobno}</td>
                        <td>{card.gender}</td>
                        <td>{card.roomNo}</td>
                        <td>{card.indate}</td>
                        <td>{card.intime}</td>
                        <td>{card.deposite}</td>
                        <td>{card.outdate || "-"}</td>
                        <td>{card.outtime || "-"}</td>
                        <td>{card.finalamount || "-"}</td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
