import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
      <div className="container">
        <a className="navbar-brand" href="#">
          Alireza Collection
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                صفحه اصلی
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                محصولات
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                درباره ما
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                تماس با ما
              </a>
            </li>
          </ul>
          <div className="buttons">
          <a href="#" className="btn btn-outline-success ms-2">
              سبد خرید (0)
              <i className="fa fa-shopping-cart me-2" />
            </a>
            <a href="#" className="btn btn-outline-danger ms-2">
              عضویت
              <i className="fa fa-user-plus me-2" />
            </a>
            <a href="#" className="btn btn-outline-primary ms-2">
              ورود
              <i className="fa fa-sign-in me-2" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
