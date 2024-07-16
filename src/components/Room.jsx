import React from "react";
import "./style2.css";

export default function Room({ setshowComp }) {
  const handleOnAddroomClick = () => {
    setshowComp(1);
  };

  const handleOnUpdateroomClick = () => {
    setshowComp(2);
  };

  const handleOnAllroomClick = () => {
    setshowComp(3);
  };

  const handleOnDeleteroomClick = () => {
    setshowComp(4);
  };

  return (
    <div className="roomsdiv">
      <div className="container con2">
        <div className="row">
          <div className="col-md-4 col-xl-3">
            <div className="card bg-c-blue order-card">
              <div className="card-block">
                <i className="fa fa-plus" aria-hidden="true"></i>
                <br />
                <h3>Add Room</h3>
                <p>Add information of new room in hotel</p>
                <button className="btn" onClick={handleOnAddroomClick}>
                  click
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-xl-3">
            <div className="card bg-c-green order-card">
              <div className="card-block">
                <i className="fa fa-refresh icon" aria-hidden="true"></i>
                <br />
                <h3>Update Room</h3>
                <p>Update information of room in hotel</p>
                <button className="btn" onClick={handleOnUpdateroomClick}>
                  click
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-xl-3">
            <div className="card bg-c-yellow order-card">
              <div className="card-block">
                <i className="fa fa-list" aria-hidden="true"></i>
                <br />
                <h3>All Rooms</h3>
                <p>See information of all rooms in hotel</p>
                <button className="btn" onClick={handleOnAllroomClick}>
                  click
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-xl-3">
            <div className="card bg-c-pink order-card">
              <div className="card-block">
                <i className="fa fa-trash" aria-hidden="true"></i>
                <br />
                <h3>Remove Room</h3>
                <p>remove the room form the hotel data </p>
                <button className="btn" onClick={handleOnDeleteroomClick}>
                  click
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
