import React from "react";
import "./style3.css";
import { useForm } from "react-hook-form";
export default function Updateemp({ setdata, setupdateemp, setshowComp }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (d) => {
    console.log(d);
    const empid = d.empid;
    const dbName = localStorage.getItem("loggedin_user_name");
    fetch(`http://localhost:3000/Getemp?empid=${empid}&dbName=${dbName}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.length == 0) {
          window.alert("employee not exist");
        } else {
          setdata(data);
          setupdateemp(1);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        window.alert(
          "An error occurred while fetching data. Please try again later."
        );
      });
  };

  const goBackToStartPage = () => {
    setshowComp(0);
  };

  return (
    <div className="container">
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
              <label className="col-md-4 text-md-right">
                Enter Employee ID
              </label>
              <div className="col-md-8">
                <input
                  {...register("empid", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  })}
                  type="text"
                  className="form-control"
                  placeholder="Enter Room Number"
                  required
                />
                {errors.empid && <p>{errors.empid.message}</p>}
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
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
