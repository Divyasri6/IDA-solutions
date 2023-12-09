import React from "react";
import "./services.css";

export default function Collapsible(props) {
  const { name, text } = props.faq;
  const active = props.active;
  return (
    <div>
      <button
        variant="text"
        className="servicesbutton"
        onClick={props.onToggle}
      >
        {name}
      </button>
      <div className={`answer_wrapper ${active ? "open" : ""}`}>
        <div className="servicestext">{text} </div>
      </div>
    </div>
  );
}
