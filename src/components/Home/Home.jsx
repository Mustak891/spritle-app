import React from "react";
import "./Home.css";
import Fab from "@mui/material/Fab";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="homeTitle">
        <h1 className="homeheading">
          Reimagining & Re-engineering Enterprise solutions towards efficiency
        </h1>
        <p className="homedesc">
          Advanced custom made Softwares.
          <br /> Premium Apps, Portals & Digital Solutions. <br />
          We aim to innovate cutting-edge technologies for a better tomorrow.
        </p>
      </div>
      <div className="homeButton">
        <Link to="/" className="link">
          <Fab
            variant="extended"
            size="small"
            aria-label="add"
            style={{ padding: "15px" }}
          >
            Get quote
          </Fab>
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/" className="link">
          <Fab
            variant="extended"
            size="small"
            aria-label="add"
            style={{ padding: "15px" }}
          >
            services
          </Fab>
        </Link>
      </div>
      <div className="custom-shape-divider-bottom-1671678322">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Home;
