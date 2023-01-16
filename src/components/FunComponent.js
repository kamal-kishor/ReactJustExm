import React from "react";
import InputField from "./InputField";
import { useState, useEffect, useRef } from "react";

export default function FunComponent() {
  const [inputValue, setinputValue] = useState("");
  const count = useRef(0);
  const refElement = useRef("");

  useEffect(() => {
    count.current = count.current + 1;
  },[inputValue]
  );

  function handleInput() {
    refElement.current.style.color ="red";
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <input
            ref={refElement}
            type="text"
            value={inputValue}
            className="form-control"
            id="InputText"
            row="1"
            onChange={(e) => setinputValue(e.target.value)}
          />
          <button className="btn btn-danger my-2 c" onClick={handleInput}>Change Color</button>
        </div>
        <div className="col-lg-4">
          <p>Total no of count {count.current}</p>
        </div>
      </div>
    </div>
  );
}
