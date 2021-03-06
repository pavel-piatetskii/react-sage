import React from "react";

import "components/Button.scss";


export default function Button(props) {
   return (
      <button
        className = "button"
        onClick = {props.onClick}
      >
        {props.children}
      </button>
    );
}

