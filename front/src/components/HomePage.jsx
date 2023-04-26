import React from "react";
import { useSelector } from "react-redux";
import { productsApi, useGetAllProductsQuery } from "../slices/productsApi";

const HomePage = () => {
     const {data, error, isLoading} = useGetAllProductsQuery();
      return (
            <div className="home-container">
                  {isLoading ? (
                  <p>loading...</p>
                  ) : error ? (
                        <p>An error ocurred</p> 
                  ) : (
                        <>
                              <h2>NEW ARRIVALS</h2>
                              <div className="productos">
                                    {data?.map( (product) => (
                                          <div key={product._id} className="product">
                                                <h3>{product.name}</h3>
                                                <img src={`http://localhost:5000/${product.image}`} alt={product.name}/>
                                                <div className="details">
                                                      <span>{product.description}</span>
                                                      <span className="price">${product.price}</span>
                                                </div>
                                                <button>Add to Cart</button>
                                          </div>
                                    ))}
                              </div>
                        </>       
                  )}
            </div>
            );
};

export default HomePage