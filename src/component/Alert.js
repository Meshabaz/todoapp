import React from "react";

function Alert(props) {
  function capitalize(word) {
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  return (
    props.alert && (
      <div>
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <img
            src={props.alert.img}
            className="card-img-top"
            alt="..."
            style={{ maxWidth: "30px", pointerEvents: "none" }}
          ></img>
          <strong>{capitalize(props.alert.type)}:</strong> {props.alert.msg}
        </div>
      </div>
    )
  );
}

export default Alert;
