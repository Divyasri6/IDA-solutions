import React, { useState } from "react";
import Collapsible from "./Collapsible";
import Services_image from "./services.jpg";
import data from "./Data";
import "./services.css";

function Services() {
  const [clicked, setClicked] = useState("0");
  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };
  return (
    <div className="section__padding">
      <article>
        <img className="servicesImage" src={Services_image} alt="Services" />
        {/* <h3 className="imagetext">
          Lorem ipsum dolor <br />
          sit amet,
          <br /> consectetur
        </h3> */}
      </article>
      <div style={{ margin: "3%" }}>
        <h2 className="servicesheader"> Services</h2>
        {data.map((faq, index) => (
          <Collapsible
            key={index}
            faq={faq}
            onToggle={() => handleToggle(index)}
            active={clicked === index}
          />
        ))}
      </div>
    </div>
  );
}
export default Services;
