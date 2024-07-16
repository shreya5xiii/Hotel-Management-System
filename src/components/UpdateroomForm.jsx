import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
export default function UpdateroomForm({ data, setupdateroom }) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  useEffect(() => {
    if (data[0].available == "occupied") {
      window.alert("Can not update room because it is occupied");
      setupdateroom(0);
    }
  });
  const onSubmit = async (d) => {
    try {
      var object = {
        ...d,
        dbName: localStorage.getItem("loggedin_user_name"),
        realroomNo: data[0].roomno,
        available: data[0].available,
      };
      let response = await fetch("http://localhost:3000/Updateroom", {
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
      window.alert("Room updated successfully");
      console.log(res);
    } catch (error) {
      window.alert("something went wrong");
      console.error("Error:", error);
    }
  };
  const goBackToStartPage = () => {
    setupdateroom(0);
  };

  return (
    <div>
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
              <h3>Update Room</h3>
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
                      defaultValue={data[0].roomno}
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
                      defaultValue={data[0].acNonac}
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
                      defaultValue={data[0].price}
                      type="text"
                      className="form-control"
                      name="price"
                      placeholder="Enter Room Price"
                      required
                    />
                  </div>
                </div>

                <div className="form-group row mt-2">
                  <label className="col-md-4 text-md-right">Status</label>
                  <div className="col-md-8">
                    <select
                      {...register("status")}
                      defaultValue={data[0].status}
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
                      defaultValue={data[0].bed}
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
                      Update
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
