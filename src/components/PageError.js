import React from "react";

import "./styles/PageError.css";

function PageError(props) {
  // return props.error.message;
  return <div className="PageError">{props.error.message}</div>;
}

export default PageError;
