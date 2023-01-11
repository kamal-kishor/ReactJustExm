import React from "react";

function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase(0) + lower.slice(1);
  };
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
        style={{ color: props.mode === "light" ? "#042743" : "white" }}
      >
        <strong>{capitalize(props.alert.msg)}</strong>: {props.alert.type}
      </div>
    )
  );
}

export default Alert;
