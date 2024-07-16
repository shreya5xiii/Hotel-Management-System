import React from "react";
import "./style3.css";
import { useForm } from "react-hook-form";
export default function Checkoutform({ setcheckout, data }) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  function calculateFinalPrice(
    inDate,
    inTime,
    outDate,
    outTime,
    pricePerNight,
    deposite
  ) {
    const checkInDateTime = new Date(inDate + "T" + inTime);
    const checkOutDateTime = new Date(outDate + "T" + outTime);

    const timeDifferenceMs = checkOutDateTime - checkInDateTime;

    const nightsSpent = Math.ceil(timeDifferenceMs / (1000 * 60 * 60 * 24));

    const finalPrice = nightsSpent * pricePerNight;

    return finalPrice - deposite;
  }
  const onSubmit = async (d) => {
    console.log(d);
    try {
      var object = {
        ...d,
        dbName: localStorage.getItem("loggedin_user_name"),
      };
      let response = await fetch("http://localhost:3000/checkout", {
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

      console.log(res);
      window.alert("checkout successfully");
      setcheckout(0);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const goBackToStartPage = () => {
    setcheckout(0);
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
                      {...register("roomno")}
                      type="text"
                      className="form-control"
                      placeholder="Enter room Number"
                      defaultValue={data[0].roomNo}
                      required
                      readOnly
                    />
                  </div>
                </div>
                <div className="form-group row mt-2 ">
                  <label className="col-md-4 text-md-right">Name</label>
                  <div className="col-md-8">
                    <input
                      {...register("custname")}
                      type="text"
                      className="form-control"
                      placeholder="Enter Name"
                      defaultValue={data[0].custname}
                      required
                      readOnly
                    />
                  </div>
                </div>
                <div className="form-group row mt-2 ">
                  <label className="col-md-4 text-md-right">In Date</label>
                  <div className="col-md-8">
                    <input
                      {...register("indate")}
                      type="date"
                      className="form-control"
                      placeholder="Enter date"
                      defaultValue={data[0].indate}
                      required
                      readOnly
                    />
                  </div>
                </div>
                <div className="form-group row mt-2 ">
                  <label className="col-md-4 text-md-right">In Time</label>
                  <div className="col-md-8">
                    <input
                      {...register("intime")}
                      type="time"
                      className="form-control"
                      placeholder="Enter time"
                      defaultValue={data[0].intime}
                      required
                      readOnly
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
                      defaultValue={data[1]}
                      required
                      readOnly
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
                      defaultValue={data[2]}
                      required
                      readOnly
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
                      defaultValue={data[0].deposite}
                      required
                      readOnly
                    />
                  </div>
                </div>

                <div className="form-group row mt-2 ">
                  <label className="col-md-4 text-md-right">Finalamount</label>
                  <div className="col-md-8">
                    <input
                      {...register("finalamount")}
                      defaultValue={calculateFinalPrice(
                        data[0].indate,
                        data[0].intime,
                        data[1],
                        data[2],
                        data[0].price,
                        data[0].deposite
                      )}
                      id="finalamount"
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
                      Checkout
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
