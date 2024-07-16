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
      };
      let response = await fetch("http://localhost:3000/addroom", {
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
      console.log(data, res);
      window.alert("Room Added Successfully");
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
            <h3>Add Room</h3>
          </div>

          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group row mt-2">
                <label className="col-md-4 text-md-right">Room Number</label>
                <div className="col-md-8">
                  <input
                    {...register("roomno")}
                    type="text"
                    className="form-control inputcss"
                    placeholder="Enter room number"
                    required
                  />
                </div>
              </div>

              <div className="form-group row mt-2">
                <label className="col-md-4 text-md-right">AC or NonAC</label>
                <div className="col-md-8">
                  <select
                    {...register("acNonac")}
                    className="form-control"
                    required
                  >
                    <option value="ac">Air Conditioning</option>
                    <option value="nonac">Non Air Conditioning</option>
                  </select>
                </div>
              </div>

              <div className="form-group row mt-2">
                <label className="col-md-4 text-md-right">Enter Price</label>
                <div className="col-md-8">
                  <input
                    {...register("price")}
                    type="text"
                    className="form-control"
                    placeholder="Enter Room Price"
                    required
                  />
                </div>
              </div>

              <div className="form-group row mt-2">
                <label className="col-md-4 text-md-right">Availability</label>
                <div className="col-md-8">
                  <select
                    {...register("available")}
                    className="form-control"
                    required
                  >
                    <option value="available">Available</option>
                    <option value="occupied">Occupied</option>
                  </select>
                </div>
              </div>

              <div className="form-group row mt-2">
                <label className="col-md-4 text-md-right">Status</label>
                <div className="col-md-8">
                  <select
                    {...register("status")}
                    className="form-control"
                    required
                  >
                    <option value="clean">Clean</option>
                    <option value="dirty">Dirty</option>
                  </select>
                </div>
              </div>

              <div className="form-group row mt-2">
                <label className="col-md-4 text-md-right">Bed Type</label>
                <div className="col-md-8">
                  <select
                    {...register("bed")}
                    className="form-control"
                    required
                  >
                    <option value="singlebed">Single</option>
                    <option value="doublebed">Double</option>
                    <option value="triplebed">Double with one single</option>
                  </select>
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
