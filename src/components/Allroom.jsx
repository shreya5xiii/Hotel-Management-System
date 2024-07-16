import React from "react";
import "./style3.css";
import { useEffect } from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Allroom({ setshowComp }) {
  const [tabledata, settabledata] = useState([]);
  useEffect(() => {
    try {
      const dbName = localStorage.getItem("loggedin_user_name");
      fetch(`http://localhost:3000/getallroom?dbName=${dbName}`)
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
            <h3>All Room Information</h3>
          </div>
          <div className="card-body allroomcont ">
            <table className="table " id="room-list">
              <thead>
                <tr>
                  <td>Room Number</td>
                  <td>AC or NonAC</td>
                  <td>Price</td>
                  <td>availability</td>
                  <td>Status</td>
                  <td>Bed Type</td>
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
                  </tr>
                ) : (
                  tabledata.map((card) => {
                    return (
                      <tr key={card.roomno}>
                        <td>{card.roomno}</td>
                        <td>{card.acNonac}</td>
                        <td>{card.price}</td>
                        <td>{card.available}</td>
                        <td>{card.status}</td>
                        <td>{card.bed}</td>
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
