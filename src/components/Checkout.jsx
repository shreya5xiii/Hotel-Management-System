import React from "react";
import "./style3.css";
import { useForm } from "react-hook-form";
export default function Checkout({ setdata, setcheckout, setshowComp }) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = async (d) => {
    console.log(d);
    const roomNo = d.roomNo;
    const dbName = localStorage.getItem("loggedin_user_name");
    fetch(
      `http://localhost:3000/getroomforcheckout?roomNo=${roomNo}&dbName=${dbName}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.length == 0) {
          window.alert("room not exist");
        } else {
          console.log(data);
          data[1] = d.outdate;
          data[2] = d.outtime;
          setdata(data);
          setcheckout(1);
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
              <h3>Checkout</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group row mt-2 ">
                  <label className="col-md-4 text-md-right">Room Number</label>
                  <div className="col-md-8">
                    <input
                      {...register("roomNo")}
                      type="text"
                      className="form-control"
                      placeholder="Enter room Number"
                      required
                    />
                  </div>
                </div>

                <div className="form-group row mt-2 ">
                  <label className="col-md-4 text-md-right">Out Date</label>
                  <div className="col-md-8">
                    <input
                      {...register("outdate")}
                      type="date"
                      className="form-control"
                      placeholder="Enter date"
                      required
                    />
                  </div>
                </div>
                <div className="form-group row mt-2 ">
                  <label className="col-md-4 text-md-right">Out Time</label>
                  <div className="col-md-8">
                    <input
                      {...register("outtime")}
                      type="time"
                      className="form-control"
                      placeholder="Enter time"
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
                      Check Out
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
