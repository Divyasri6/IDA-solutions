import React from "react";
import "./footer.css";
export default function Contactus() {
  const myList1 = [
    "919 N. Plum Grove Rd",
    "Suite # F",
    "Schaumburg, IL 60173",
    "Voice: (847) 637-5900",
    "Fax: (847) 637-5901"
  ];
  const listItems1 = myList1.map((myList1) => {
    return <dd>{myList1}</dd>;
  });
  const myList2 = [
    "Plot no #347 B ,",
    "Road #78,",
    "Phase III ,",
    " JubileeHills ,",
    "Hyderabad – 34."
  ];
  const listItems2 = myList2.map((myList2) => {
    return <dd>{myList2}</dd>;
  });

  return (
    <div className="contactfooter  section__padding">
      <div className="contact-column">
        <h3 className="Main-header">Contact Us</h3>
      </div>
      <div className="contact-column">
        <h4 className="contact-header">India Office</h4>
        <dd className="contactText">{listItems2}</dd>
      </div>
      <div className="contact-column">
        <h4 className="contact-header">Corporate Office</h4>
        <dd className="contactText">{listItems1}</dd>
        <dd>
          <a href="mailto:info@idasolutions.net" className="Footerlink ">
            Info@idasolutions.net
          </a>
        </dd>
        <dd>
          <a href="mailto:training@idasolutions.net" className="Footerlink ">
            training@idasolutions.net
          </a>
        </dd>
      </div>
    </div>
  );
}
