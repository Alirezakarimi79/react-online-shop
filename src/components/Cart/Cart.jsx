import React, { Fragment } from "react";
import { connect } from "react-redux";
import Skeleton from "react-loading-skeleton";

import {
  addToCart,
  removeFromCart,
} from "./../../redux/actions/productActions";

const Cart = ({ products, addToCart, removeFromCart }) => {
  return (
    <Fragment>
      {!products ? (
        <Fragment>
          <div className="col-md-3">
            <Skeleton height={900} />
          </div>
        </Fragment>
      ) : (
        <div className="container py-5 my-5 d-flex flex-column justify-content-center">
          {products.map((product) => (
            <div className="row py-4 mb-5 justify-content-center bg-light">
              <div className="col-md-4">
                <img
                  src={product.image}
                  alt={product.title}
                  height="200px"
                  width="180px"
                />
              </div>
              <div className="col-md-4">
                <h3>{product.title}</h3>
                <p className="lead fw-bold">
                  <span className="m-1">{product.quantity}</span>X{" "}
                  {product.price}= تومان{" "}
                  <span className="me-1">
                    {product.quantity * product.price}
                  </span>
                </p>
                <button
                  type="button"
                  className="btn btn-outline-danger ms-4"
                  onClick={() => addToCart(product)}
                >
                  <i className="fa fa-plus" />
                </button>
                <button
                  type="button"
                  className="btn btn-outline-success"
                  onClick={() => removeFromCart(product)}
                >
                  <i className="fa fa-minus" />
                </button>
              </div>
            </div>
          ))}
          {products.length !== 0 && (
            <button type="button" className="btn btn-success">
              تایید نهایی
            </button>
          )}
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.product,
  };
};

const mapDispatchToProps = {
  addToCart,
  removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
