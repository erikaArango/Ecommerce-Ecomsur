import { useDispatch } from "react-redux";
import {  useGetAllProductsQuery } from "../slices/productsApi";
import { addToCart } from "../slices/cartSlice";
import { Link } from "react-router-dom";
import RatingProduct from "../rating";


const ProductListPage = () => {
     const {data, error, isLoading} = useGetAllProductsQuery();
     const dispatch = useDispatch();

     const handleAddToCart = (product) =>{
      dispatch(addToCart(product));
     };

      return (
            <div className="home-container">
                  {isLoading ? (
                  <p>loading...</p>
                  ) : error ? (
                        <p>An error ocurred</p> 
                  ) : (
                        <>
                              <h2>THE BEST TECHNOLOGY</h2>
                              <div className="products">
                                    {data?.map( (product) => (
                                                <div key={product._id} className="product">
                                                      <h3>{product.name}</h3>
                                                      <Link to={`/product/${product._id}`}>
                                                            <img src={`http://localhost:5000/${product.image}`} alt={product.name}/>
                                                      </Link>
                                                            <div className="details">
                                                                  <span className="price">${product.price}</span>
                                                                  <RatingProduct rating={product.rating} />
                                                            </div>
                                                      <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                                                </div>
                                    ))}
                              </div>
                        </>       
                  )}
            </div>
            );
};

export default ProductListPage