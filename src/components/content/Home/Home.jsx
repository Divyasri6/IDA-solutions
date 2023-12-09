import React from "react";
import "./Home.css";
import SliderImage from "./SliderImage";
export default function Home() {
  return (
    <div className="section__padding">
      <SliderImage />
      <p className="hometext">
        Ida provides technology-enabled solutions that meet the varied and
        unique needs of the business industry. Whether our clients need
        consulting and application expertise for a particular project or support
        with staffing, managing and integrating technology professionals, we
        offer wide array of services to get the job done.
      </p>
    </div>
  );
}
