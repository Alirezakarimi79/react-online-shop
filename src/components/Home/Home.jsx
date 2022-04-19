import React from "react";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-dark border-0">
        <img
          src="/assets/bg.jpg"
          className="card-img"
          alt="background"
          height="649px"
        />
        <div className="card-img-overlay">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0 d-flex justify-content-center">
              فصل جدید رسید
            </h5>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
