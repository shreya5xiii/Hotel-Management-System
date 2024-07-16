import React from "react";
import "./style3.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
export default function Bookroom({ setdata, setbookroom, setshowComp }) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  const [tabledata, settabledata] = useState([]);

  const onSubmit = async (d) => {
    const acNonac = d.acNonac;
    const bed = d.bed;
    const dbName = localStorage.getItem("loggedin_user_name");
    fetch(
      `http://localhost:3000/Search?acNonac=${acNonac}&bed=${bed}&dbName=${dbName}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.length == 0) {
          window.alert("Room is not available");
        }
        console.log(data);
        settabledata(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        window.alert(
          "An error occurred while fetching data. Please try again later."
        );
      });
  };

  const book = (e) => {
    setdata(e);
    setbookroom(1);
  };

  const goBackToStartPage = () => {
    setshowComp(0);
  };

  return (
    <div style={{ width: "80vw", margin: "auto" }}>
      <div className="container choiceform  ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group row mt-2 ">
            <label className="col-md-4 text-md-right">AC or NonAC</label>
            <div className="col-md-8">
              <select {...register("acNonac")} required>
                <option value="ac">AC</option>
                <option value="nonac">Non AC</option>
              </select>
            </div>
          </div>

          <div className="form-group row mt-2 ">
            <label className="col-md-4 text-md-right">Bed Type</label>
            <div className="col-md-8">
              <select {...register("bed")} required>
                <option value="singlebed">Single</option>
                <option value="doublebed">Double</option>
                <option value="triplebed">Double with one single</option>
              </select>
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
                Search
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="container  searchedchoice">
        <div className="row justify-content-center">
          <div className="card cardform">
            <div className="card-header text-center">
              <span
                className="float-start"
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                title="Go back to main page"
                onClick={goBackToStartPage}
              >
                <i className="fa fa-arrow-left"></i>
              </span>
              <h3>Available Rooms</h3>
            </div>
            <div className="card-body allroomcont">
              <table className="table " id="room-list">
                <thead>
                  <tr>
                    <td>Room Number</td>
                    <td>Price</td>
                    <td>book</td>
                  </tr>
                </thead>
                <tbody>
                  {tabledata.length === 0 ? (
                    <tr>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                  ) : (
                    tabledata.map((card) => {
                      return (
                        <tr key={card.roomno}>
                          <td>{card.roomno}</td>
                          <td>{card.price}</td>
                          <td>
                            <button
                              className="button"
                              onClick={() => book(card)}
                            >
                              Book
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
