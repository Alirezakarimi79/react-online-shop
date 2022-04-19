import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Navbar = ({ product }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Alireza Collection
        </Link>
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
              <Link className="nav-link active" aria-current="page" to="/">
                صفحه اصلی
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                محصولات
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                درباره ما
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                تماس با ما
              </Link>
            </li>
          </ul>
          <div className="buttons">
            <Link to="/cart" className="btn btn-outline-success ms-2">
              سبد خرید ({product.length})
              <i className="fa fa-shopping-cart me-2" />
            </Link>
            <Link to="/register" className="btn btn-outline-danger ms-2">
              عضویت
              <i className="fa fa-user-plus me-2" />
            </Link>
            <Link to="/login" className="btn btn-outline-primary ms-2">
              ورود
              <i className="fa fa-sign-in me-2" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    product: state.product,
  };
};

export default connect(mapStateToProps)(Navbar);
