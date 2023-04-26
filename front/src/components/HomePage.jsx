import { useDispatch } from "react-redux";
import {  useGetAllProductsQuery } from "../slices/productsApi";
import { addToCart } from "../slices/cartSlice";

const HomePage = () => {
     const {data, error, isLoading} = useGetAllProductsQuery();
     const dispatch = useDispatch();

     const handleAddToCart = (product) =>{
      dispatch(addToCart(product))
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
                                                <img src={`http://localhost:5000/${product.image}`} alt={product.name}/>
                                                <div className="details">
                                                      <span className="price">${product.price}</span>
                                                      <span>{product.description}</span>
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

export default HomePage