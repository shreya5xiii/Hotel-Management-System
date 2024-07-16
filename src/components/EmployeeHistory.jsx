import React from "react";
import "./style3.css";
import { useEffect } from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Employeehistory({ setshowComp }) {
  const [tabledata, settabledata] = useState([]);
  useEffect(() => {
    try {
      const dbName = localStorage.getItem("loggedin_user_name");
      fetch(`http://localhost:3000/employeehistory?dbName=${dbName}`)
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
            <h3>All Employee History</h3>
          </div>
          <div className="card-body allroomcont ">
            <table className="table " id="room-list">
              <thead>
                <tr>
                  <td>Employee ID</td>
                  <td>Name</td>
                  <td>age</td>
                  <td>Adhar No.</td>
                  <td>Gender</td>
                  <td>Mobile No.</td>
                  <td>Job</td>
                  <td>Salary</td>
                  <td>Working</td>
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
                  </tr>
                ) : (
                  tabledata.map((card) => {
                    return (
                      <tr key={card.empid}>
                        <td>{card.empid}</td>
                        <td>{card.empname}</td>
                        <td>{card.empage}</td>
                        <td>{card.empadharno}</td>
                        <td>{card.empgender}</td>
                        <td>{card.empmobno}</td>
                        <td>{card.empjob}</td>
                        <td>{card.empsalary}</td>
                        <td>{card.working}</td>
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
