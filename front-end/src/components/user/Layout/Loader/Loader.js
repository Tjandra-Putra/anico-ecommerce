import React from "react";
import "./Loader.css";

import BarLoader from "react-spinners/BarLoader";

const Loader = (props) => {
  return (
    <div className="loader">
      {/* <h1>Loading</h1> */}
      <BarLoader loading={true} size={50} color="white" />
    </div>
  );
};

export default Loader;
