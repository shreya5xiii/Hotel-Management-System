import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
export default function Updateempform({ setupdateemp, data }) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = async (d) => {
    console.log(d);
    try {
      var object = {
        ...d,
        dbName: localStorage.getItem("loggedin_user_name"),
        realempid: data[0].empid,
      };
      let response = await fetch("http://localhost:3000/Updateemp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(object),
      });
      if (!response.ok) {
        alert("Network response was not ok or room already exist");
      }
      let res = await response.json();
      window.alert("Employee updated successfullt");
      console.log(res);
    } catch (error) {
      window.alert("something went wrong");
      console.error("Error:", error);
    }
  };
  const goBackToStartPage = () => {
    setupdateemp(0);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="card choiceform">
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
            <h3>Update Employee</h3>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group row mt-2">
                <label className="col-md-4 text-md-right">Employee ID</label>
                <div className="col-md-8">
                  <input
                    {...register("empid")}
                    type="text"
                    defaultValue={data[0].empid}
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
                    defaultValue={data[0].empname}
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
                    defaultValue={data[0].empage}
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
                    defaultValue={data[0].empadharno}
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
                  <select
                    {...register("empgender")}
                    defaultValue={data[0].empgender}
                    required
                  >
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
                    defaultValue={data[0].empmobno}
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
                  <select
                    {...register("empjob")}
                    defaultValue={data[0].empjob}
                    required
                  >
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
                    defaultValue={data[0].empsalary}
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
                    Update
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
