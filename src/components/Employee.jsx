import React from "react";
export default function Employee({ setshowComp }) {
  const handleOnaddempClick = () => {
    setshowComp(5);
  };
  const handleOnUpdateempClick = () => {
    setshowComp(6);
  };
  const handleOnGetAllempClick = () => {
    setshowComp(7);
  };
  const handleOnDeleteempClick = () => {
    setshowComp(8);
  };
  return (
    <div className=" employeediv">
      <div className="container con2">
        <div className="row">
          <div className="col-md-4 col-xl-3">
            <div className="card bg-c-blue order-card">
              <div className="card-block">
                <i className="fa fa-plus" aria-hidden="true"></i>
                <br />
                <h3>Add staff</h3>
                <p>Add information of new staff in hotel</p>
                <button className="btn" onClick={handleOnaddempClick}>
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
                <h3>Update staff</h3>
                <p>Update the information of staff in hotel</p>
                <button className="btn" onClick={handleOnUpdateempClick}>
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
                <h3>List of staff</h3>
                <p>See the information of all staff in hotel</p>
                <button className="btn" onClick={handleOnGetAllempClick}>
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
                <h3>Remove staff</h3>
                <p>Remove the employee from hotel staff </p>
                <button className="btn" onClick={handleOnDeleteempClick}>
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
