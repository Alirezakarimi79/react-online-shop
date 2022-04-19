import React, { useState, useEffect, Fragment } from "react";
import Skeleton from "react-loading-skeleton";
import { useParams, Link } from "react-router-dom";
import { connect } from "react-redux";

import serviceApi from "../../../services/serviceApi";
import { addToCart } from "./../../../redux/actions/productActions";

const Product = ({ addToCart }) => {
  const params = useParams();

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProduct = async () => {
    setLoading(true);
    const response = await serviceApi.get(`/products/${params.id}`);
    setProduct(response.data);
    setLoading(false);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      {!product ? (
        <Fragment>
          <div className="col-md-3">
            <Skeleton height={900} />
          </div>
        </Fragment>
      ) : (
        <div className="container py-5">
          <div className="row py-5">
            {loading ? (
              <Fragment>
                <div className="col-md-6">
                  <Skeleton height={400} />
                </div>
                <div className="col-md-6" style={{ lineHeight: 2 }}>
                  <Skeleton height={50} width={300} />
                  <Skeleton height={75} />
                  <Skeleton height={25} width={150} />
                  <Skeleton height={50} />
                  <Skeleton height={150} />
                  <Skeleton height={50} width={100} />
                  <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
                </div>
              </Fragment>
            ) : (
              <Fragment>
                <div className="col-md-6">
                  <img
                    src={product.image}
                    alt={product.title}
                    height="400px"
                    width="400px"
                  />
                </div>
                <div className="col-md-6">
                  <h4 className="text-uppercase text-black-50">
                    {product.category}
                  </h4>
                  <h1 className="display-5">{product.title}</h1>
                  <p className="lead">
                    امتیاز: {product.rating && product.rating.rate}{" "}
                    <i className="fa fa-star me-1" />
                  </p>
                  <h3 className="display-6 fw-bold my-4">
                    {product.price} تومان
                  </h3>
                  <p className="lead">{product.description}</p>
                  <button
                    type="button"
                    className="btn btn-outline-success px-4 py-2"
                    onClick={() => addToCart(product)}
                  >
                    اضافه کردن به سبد خرید
                  </button>
                  <Link to="/cart" className="btn btn-secondary me-2 px-3 py-2">
                    رفتن به سبد خرید
                  </Link>
                </div>
              </Fragment>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const mapDispatchToProps = {
  addToCart,
};

export default connect(null, mapDispatchToProps)(Product);
