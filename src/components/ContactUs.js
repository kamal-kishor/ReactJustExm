// import React from "react";
import React, { useState } from "react";
import InputField from "./InputField";
import HomeContainer from "../container/HomeContainer";

export default function ContactUs(props) {
  const handleOnChange = (event) => {
    setmsg(event.target.value);
  };

  const converttoUpperCase = () => {
    let newmsg = msg.toUpperCase();
    setmsg(newmsg);
  };

  const [msg, setmsg] = useState("Enter The Message");
  return (
    <div>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "white" : "#042743" }}
      >
        <div className="row mt-5">
          <div className="col-md-6">
            <HomeContainer />
          </div>
          <div className="col-md-6">
            <h2>
              <center>{props.heading}</center>
            </h2>
            <form>
              <div className="my-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <InputField
                  type="email"
                  className="form-control"
                  id="InputEmail1"
                  row="1"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <InputField
                  type="password"
                  className="form-control"
                  id="InputEmail1"
                  row="1"
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  value={msg}
                  onChange={handleOnChange}
                  style={{
                    backgroundColor: props.mode === "light" ? "grey" : "white",
                    color: props.mode === "dark" ? "#042743" : "white",
                  }}
                  id="myBox"
                  rows="8"
                ></textarea>
              </div>
              <div className="row mb-4">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={converttoUpperCase}
                >
                  Submit{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
