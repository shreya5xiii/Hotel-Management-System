import React from "react";
import "./style3.css";
import { useForm } from "react-hook-form";
export default function Bookroomform({ setbookroom, data }) {
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
        price: data.price,
        available: data.available,
      };
      let response = await fetch("http://localhost:3000/Bookroom", {
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
      window.alert("Room booked sussessfully");
      setbookroom(0);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const goBackToStartPage = () => {
    setbookroom(0);
  };

  return (
    <>
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
              >
                <i className="fa fa-arrow-left"></i>
              </span>
              <h3>Book Room</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group row mt-2 ">
                  <label className="col-md-4 text-md-right">Name</label>
                  <div className="col-md-8">
                    <input
                      {...register("custname")}
                      type="text"
                      className="form-control"
                      placeholder="Enter Name"
                      required
                    />
                  </div>
                </div>

                <div className="form-group row mt-2 ">
                  <label className="col-md-4 text-md-right">ID Type</label>
                  <div className="col-md-8">
                    <select {...register("custidtype")}>
                      <option value="passport">Passport</option>
                      <option value="adharcard">Adhar Card</option>
                      <option value="voterid">Voter ID</option>
                      <option value="drivinglic">Driving Licence</option>
                    </select>
                  </div>
                </div>

                <div className="form-group row mt-2 ">
                  <label className="col-md-4 text-md-right">ID Number</label>
                  <div className="col-md-8">
                    <input
                      {...register("custidnumber")}
                      type="text"
                      className="form-control"
                      placeholder="Enter ID Number"
                      required
                    />
                  </div>
                </div>

                <div className="form-group row mt-2 ">
                  <label className="col-md-4 text-md-right">
                    Mobile Number
                  </label>
                  <div className="col-md-8">
                    <input
                      {...register("custmobno")}
                      type="text"
                      className="form-control"
                      placeholder="Enter mobile Number"
                    />
                  </div>
                </div>

                <div className="form-group row mt-2 ">
                  <label className="col-md-4 text-md-right">Gender</label>
                  <div className="col-md-8">
                    <select {...register("gender")}>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>

                <div className="form-group row mt-2 ">
                  <label className="col-md-4 text-md-right">Room Number</label>
                  <div className="col-md-8">
                    <input
                      {...register("roomNo")}
                      type="text"
                      className="form-control"
                      value={data.roomno}
                      placeholder="Enter room Number"
                      required
                      readOnly
                    />
                  </div>
                </div>

                <div className="form-group row mt-2 ">
                  <label className="col-md-4 text-md-right">Date</label>
                  <div className="col-md-8">
                    <input
                      {...register("indate")}
                      type="date"
                      className="form-control"
                      placeholder="Enter date"
                      required
                    />
                  </div>
                </div>
                <div className="form-group row mt-2 ">
                  <label className="col-md-4 text-md-right">Time</label>
                  <div className="col-md-8">
                    <input
                      {...register("intime")}
                      type="time"
                      className="form-control"
                      placeholder="Enter time"
                      required
                    />
                  </div>
                </div>

                <div className="form-group row mt-2 ">
                  <label className="col-md-4 text-md-right">Deposite</label>
                  <div className="col-md-8">
                    <input
                      {...register("deposite")}
                      type="text"
                      className="form-control"
                      placeholder="Enter deposite value"
                      required
                    />
                  </div>
                </div>

                <div className="form-group row mt-4  ">
                  <div className="col-md-4"></div>
                  <div className="col-md-8">
                    <button
                      disabled={isSubmitting}
                      type="submit"
                      className="btn button"
                    >
                      Book
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
