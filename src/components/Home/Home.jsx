import React from "react";

const Home = () => {
  return (
    <div className="hero">
      <div class="card bg-dark text-dark border-0">
        <img
          src="/assets/bg.jpg"
          class="card-img"
          alt="background"
          height="649px"
        />
        <div class="card-img-overlay">
          <div className="container">
            <h5 class="card-title display-3 fw-bolder mb-0 d-flex justify-content-center">
              فصل جدید رسید
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
