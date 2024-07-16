import React from "react";
import { useForm } from "react-hook-form";
export default function Updateroom({ setshowComp }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (d) => {
    const dbName = localStorage.getItem("loggedin_user_name");
    const empid = d.empid;
    fetch(`http://localhost:3000/Deleteemp?empid=${empid}&dbName=${dbName}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length != 0) {
          window.alert("employee deleted successfully");
          setshowComp(0);
        }
      })
      .catch((error) => {
        window.alert("employee not exist or Network response is not ok ");
        location.reload();
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
          <h3>Delete Employee</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group row mt-2">
              <label className="col-md-4 text-md-right">Employee ID</label>
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
                  placeholder="Enter employee ID"
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
                  Delete
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
