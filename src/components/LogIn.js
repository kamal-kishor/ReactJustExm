// import React from "react";
import React, { useState } from "react";

export default function LogIn(props) {
  const handleOnChange = (event) => {
    setmsg(event.target.value);
  };

  const converttoUpperCase = () => {
    let newmsg = msg.toUpperCase();
    setmsg(newmsg);
  };

  const [msg, setmsg] = useState("Enter The Message");
  // setmsg=("hello");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "white" : "#042743" }}
      >
        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6">
            <h1>{props.heading}</h1>
            <form>
              <div className="my-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  value={msg}
                  onChange={handleOnChange}
                  style={{
                    backgroundColor: props.mode === "light" ? "grey" : "white",
                    color: props.mode === "dark" ? "white" : "#042743",
                  }}
                  id="myBox"
                  rows="8"
                ></textarea>
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={converttoUpperCase}
              >
                To Uppercase
              </button>
            </form>
          </div>
        </div>
      </div>
      <div
        className="container"
        my-5
        style={{ color: props.mode === "light" ? "white" : "#042743" }}
      >
        <h1>Text summery</h1>
        <p>
          {msg.length} Characters, {msg.split(" ").length} Words
        </p>
      </div>
    </>
  );
}
