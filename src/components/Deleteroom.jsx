import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
export default function Updateroom({ setshowComp }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (d) => {
    const dbName = localStorage.getItem("loggedin_user_name");
    const roomno = d.roomNo;
    fetch(`http://localhost:3000/Deleteroom?roomno=${roomno}&dbName=${dbName}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length != 0) {
          window.alert("room deleted successfully");
          setshowComp(0);
        }
      })
      .catch((error) => {
        window.alert("roomno not exist or room is occupied");
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
          <h3>Delete Room</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group row mt-2">
              <label className="col-md-4 text-md-right">
                Enter Room Number
              </label>
              <div className="col-md-8">
                <input
                  {...register("roomNo", {
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
                {errors.roomNo && <p>{errors.roomNo.message}</p>}
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
