import React from "react";
import ReactDOM from "react-dom";

import "./styles/Modal.css";

function Modal(props) {
  if (!props.isOpen) {
    return null;
  } else {
    return ReactDOM.createPortal(
      <div className="Modal">
        <div className="Modal__container">
          <button onClick={props.onClose} className="Modal__close-button">
            X
          </button>
          <h1>Modal cem</h1>

          {/* {props.children} */}
        </div>
      </div>,
      document.getElementById("modal")
    );
  }
}

export default Modal;
