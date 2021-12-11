import React from "react";

import introImage from "../../../../../front-end/src/assets/img/living-room.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="display-4">This is home</div>
          </div>
          <div className="col-md-6">
            <img src={introImage} alt="" className="intro-img img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
