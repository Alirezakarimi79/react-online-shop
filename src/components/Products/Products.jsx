import React, { useState, useEffect, Fragment } from "react";
import Skeleton from "react-loading-skeleton";

import serviceApi from "../../services/serviceApi";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  const getProducts = async () => {
    setLoading(true);
    const response = await serviceApi.get("/products");
    if (componentMounted) {
      setData(response.data);
      setFilter(response.data);
      setLoading(false);
    }
    return () => {
      componentMounted = false;
    };
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">آخرین محصولات</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? (
            <Fragment>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
            </Fragment>
          ) : (
            <Fragment>
              <div className="buttons d-flex justify-content-center pb-5 mb-5">
                <button type="button" className="btn btn-outline-dark me-2">
                  همه محصولات
                </button>
                <button type="button" className="btn btn-outline-dark me-2">
                  لباس مردانه
                </button>
                <button type="button" className="btn btn-outline-dark me-2">
                  لباس زنانه
                </button>
                <button type="button" className="btn btn-outline-dark me-2">
                  جواهرات
                </button>
                <button type="button" className="btn btn-outline-dark me-2">
                  الکترونیک
                </button>
              </div>
              {filter.map((product) => (
                <Fragment>
                  <div className="col-md-3 mb-4">
                    <div class="card h-100 text-center p-4" key={product.id}>
                      <img
                        src={product.image}
                        class="card-img-top"
                        alt={product.title}
                        height="250px"
                      />
                      <div class="card-body">
                        <h5 class="card-title mb-5" style={{height: "100px"}}>{product.title}</h5>
                        <p class="card-text lead fw-bold">
                        تومان {" "}{product.price}    
                        </p>
                        <a href="#" class="btn btn-outline-primary">
                          افزودن به سبد خرید
                        </a>
                      </div>
                    </div>
                  </div>
                </Fragment>
              ))}
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
