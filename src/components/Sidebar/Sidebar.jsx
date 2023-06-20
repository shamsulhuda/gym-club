import React, { useState } from "react";
import { useToasts } from "react-toast-notifications";
import "./Sidebar.css";

export default function Sidebar({ time }) {
  let storeTime = localStorage.getItem("break-time");
  if (storeTime) {
    storeTime = parseInt(storeTime);
  } else {
    storeTime = 0;
  }
  const [breakTime, setBreakTime] = useState(storeTime);

  const addBreak = (breakTime) => {
    localStorage.setItem("break-time", breakTime);
    const localStored = localStorage.getItem("break-time");
    setBreakTime(parseInt(localStored));
  };

  const { addToast } = useToasts();

  return (
    <div>
      <div className="sidebar">
        <div className="profile">
          <div className="d-flex">
            <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" />
            <div className="content ms-2">
              <h4 className="mini-heading">Anik Ahmed</h4>
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>
          <div className="user-info mt-4">
            <div className="d-flex justify-content-between text-center">
              <div className="weight">
                <strong className="num">75</strong>
                <sub>kg</sub>
                <p>Weight</p>
              </div>
              <div className="height">
                <strong className="num">6.7</strong>
                <p>Height</p>
              </div>
              <div className="age">
                <strong className="num">28</strong>
                <sub>yrs</sub>
                <p>Age</p>
              </div>
            </div>
          </div>

          <div className="break-times mt-4">
            <h3 className="mini-heading">Add a break</h3>
            <div className="add-break">
              <div className="d-flex justify-content-between text-center">
                <div className="time">
                  <button
                    className={`time-btn btn ${
                      breakTime == 20 ? "btn-primary" : "btn-default"
                    }`}
                    onClick={() => addBreak(20)}
                  >
                    20s
                  </button>
                </div>
                <div className="time">
                  <button
                    className={`time-btn btn ${
                      breakTime == 25 ? "btn-primary" : "btn-default"
                    }`}
                    onClick={() => addBreak(25)}
                  >
                    25s
                  </button>
                </div>
                <div className="time">
                  <button
                    className={`time-btn btn ${
                      breakTime == 30 ? "btn-primary" : "btn-default"
                    }`}
                    onClick={() => addBreak(30)}
                  >
                    30s
                  </button>
                </div>
                <div className="time">
                  <button
                    className={`time-btn btn ${
                      breakTime == 40 ? "btn-primary" : "btn-default"
                    }`}
                    onClick={() => addBreak(40)}
                  >
                    40s
                  </button>
                </div>
                <div className="time">
                  <button
                    className={`time-btn btn ${
                      breakTime == 50 ? "btn-primary" : "btn-default"
                    }`}
                    onClick={() => addBreak(50)}
                  >
                    50s
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="excercise-details mt-4">
            <h3 className="mini-heading">Excercise Details</h3>
            <div className="excercise-time">
              <strong>Excercise time</strong>
              <input
                type="text"
                className="no-shadow"
                placeholder="200 seconds"
                value={time + " seconds"}
                readOnly
              />
            </div>
            <div className="break-time mt-3">
              <strong>Break time</strong>
              <input
                type="read-only"
                className="no-shadow"
                placeholder="15 seconds"
                value={breakTime + " seconds"}
                readOnly
              />
            </div>
          </div>

          <div className="activity-submit mt-4">
            <button
              className="btn btn-primary w-100"
              onClick={() =>
                addToast("Task completed successfully", {
                  appearance: "success",
                  autoDismiss: true,
                })
              }
            >
              Activity Completed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
