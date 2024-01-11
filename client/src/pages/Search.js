import Layout from "../components/Layout/Layout";
import React from "react";
import { useSearch } from "../context/Search";

const Search = () => {
  const [values] = useSearch();
  return (
    <Layout title="Search -result rongry">
      <div className="container">
        <div className="text-center">
          <h1>Search Results</h1>
          <h5>
            {values?.results.length < 1
              ? "No Products Found"
              : `Found ${values?.results.length} Products`}
          </h5>
          <div className="d-flex flex-wrap mt-5">
            {values.results?.map((p) => (
              <div className="card m-1" style={{ width: "18rem" }}>
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">
                    {p.description.substring(0, 30)}...
                  </p>
                  <p className="card-text"> ₹{p.price}</p>
                  <button className="btn btn-primary ms-1">More Details</button>
                  <button className="btn btn-secondary ms-1">
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
