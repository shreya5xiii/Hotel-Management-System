import React from "react";
export default function History({ setshowComp }) {
  const handleOnBookroomClick = () => {
    setshowComp(9);
  };
  const handleOnCheckoutClick = () => {
    setshowComp(10);
  };
  const handleOnCliendtistoryClick = () => {
    setshowComp(11);
  };
  const handleOnEmployeehistoryClick = () => {
    setshowComp(12);
  };

  return (
    <div className=" roomsdiv">
      <div className="container con2">
        <div className="row">
          <div className="col-md-4 col-xl-3">
            <div className="card bg-c-blue order-card">
              <div className="card-block">
                <i className="fa fa-key" aria-hidden="true"></i>
                <br />
                <h3>Book Room</h3>
                <p>Book any of the available room of hotel</p>
                <button className="btn" onClick={handleOnBookroomClick}>
                  click
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-xl-3">
            <div className="card bg-c-green order-card">
              <div className="card-block">
                <i className="fa fa-suitcase" aria-hidden="true"></i>
                <br />
                <h3>Check Out</h3>
                <p>Check out the hotel and pay remaining bill </p>
                <button className="btn" onClick={handleOnCheckoutClick}>
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
                <h3> Client record</h3>
                <p>history of customer stayed hotel uptill now</p>
                <button className="btn" onClick={handleOnCliendtistoryClick}>
                  click
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-xl-3">
            <div className="card bg-c-pink order-card">
              <div className="card-block">
                <i className="fa fa-search" aria-hidden="true"></i>
                <br />
                <h3>staff record</h3>
                <p>history of all the employees uptill now</p>
                <button className="btn" onClick={handleOnEmployeehistoryClick}>
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
