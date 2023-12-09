import React from "react";
import Path from "./Path";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div>
      <div className="gradient__bg">
        <Header />
      </div>
      <Path />
      <Footer />
    </div>
  );
}
export default App;
