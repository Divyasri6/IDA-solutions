import React from "react";
import Training from "./content/Training/Training";
import Services from "./content/Services/Services";
import Careers from "./content/Careers/Careers";
import Home from "./content/Home/Home";
import Aboutus from "./content/aboutus/Aboutus";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Path(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/services" element={<Services />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/training" element={<Training />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
