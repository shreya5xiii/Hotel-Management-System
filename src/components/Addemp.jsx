import React from "react";
import "./style3.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";

export default function Addroom({ setshowComp }) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      var object = {
        ...data,
        dbName: localStorage.getItem("loggedin_user_name"),
        working: "yes",
      };
      let response = await fetch("http://localhost:3000/addemployee", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(object),
      });
      if (!response.ok) {
        alert("Network response was not ok or employee already exist");
      }
      let res = await response.json();
      console.log(data, res);
      window.alert("Employee added successfullt");
      setshowComp(0);
    } catch (error) {
      console.error("Error:", error);
    }
  };

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
              style={{ cursor: "pointer" }}
            >
              <i className="fa fa-arrow-left"></i>
            </span>
            <h3>Add Employee</h3>
          </div>

          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group row mt-2">
                <label className="col-md-4 text-md-right">Employee ID</label>
                <div className="col-md-8">
                  <input
                    {...register("empid")}
                    type="text"
                    className="form-control inputcss"
                    placeholder="Enter employee Id"
                    required
                  />
                </div>
              </div>

              <div className="form-group row mt-2">
                <label className="col-md-4 text-md-right">Employee Name</label>
                <div className="col-md-8">
                  <input
                    {...register("empname")}
                    type="text"
                    className="form-control inputcss"
                    placeholder="Enter employee name"
                    required
                  />
                </div>
              </div>

              <div className="form-group row mt-2">
                <label className="col-md-4 text-md-right">Employee Age</label>
                <div className="col-md-8">
                  <input
                    {...register("empage")}
                    type="number"
                    className="form-control inputcss"
                    placeholder="Enter employee age"
                    required
                  />
                </div>
              </div>

              <div className="form-group row mt-2">
                <label className="col-md-4 text-md-right">
                  Employee Adhar No.
                </label>
                <div className="col-md-8">
                  <input
                    {...register("empadharno")}
                    type="text"
                    className="form-control inputcss"
                    placeholder="Enter adhar no."
                    required
                  />
                </div>
              </div>

              <div className="form-group row mt-2">
                <label className="col-md-4 text-md-right">
                  Employee Gender
                </label>
                <div className="col-md-8">
                  <select {...register("empgender")} required>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>

              <div className="form-group row mt-2">
                <label className="col-md-4 text-md-right">
                  Employee Mobile No.
                </label>
                <div className="col-md-8">
                  <input
                    {...register("empmobno")}
                    type="text"
                    className="form-control inputcss"
                    placeholder="Enter mobile no."
                    required
                  />
                </div>
              </div>

              <div className="form-group row mt-2">
                <label className="col-md-4 text-md-right">JOB</label>
                <div className="col-md-8">
                  <select {...register("empjob")} required>
                    <option value="manager">Manager</option>
                    <option value="frontdeskclerk">Front Desk Clerk</option>
                    <option value="housekeeping">House Keeping</option>
                    <option value="roomservice">Room Service</option>
                    <option value="kitchenstaff">Kitchen Staff</option>
                    <option value="waiter">Waiter / Waitress</option>
                    <option value="accountant">Accountant</option>
                    <option value="porters">Porters</option>
                  </select>
                </div>
              </div>

              <div className="form-group row mt-2">
                <label className="col-md-4 text-md-right">
                  Employee Salary
                </label>
                <div className="col-md-8">
                  <input
                    {...register("empsalary")}
                    type="text"
                    className="form-control inputcss"
                    placeholder="Enter Salary"
                    required
                  />
                </div>
              </div>

              <div className="form-group row mt-4">
                <div className="col-md-4"></div>
                <div className="col-md-8">
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="btn button"
                  >
                    Add
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
