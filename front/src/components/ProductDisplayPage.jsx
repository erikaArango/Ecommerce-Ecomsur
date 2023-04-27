import { useDispatch } from "react-redux";

import {  useGetAllProductsQuery } from "../slices/productsApi";
import { addToCart } from "../slices/cartSlice";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";



const ProductDisplayPage = ({match}) => {
  const {data, error, isLoading} = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const {id} = useParams()
  const [product, setProduct] = useState(

    useEffect(() => {
      if (id && data && !isLoading) setProduct(data.find(item => item._id === id) )

    }, [data, id, isLoading]) 
  )

      const handleAddToCart = (product) =>{
      dispatch(addToCart(product));
      };

return (
     <div className="products">
      { product  &&  
        <div key={product._id} className="product">
          <h3>{product.name}</h3>
          <img src={`http://localhost:5000/${product.image}`} alt={product.name}/>
          <div className="details">
            <span className="price">${product.price}</span>
            <span>BRAND: {product.brand}</span>
            <span>{product.description}</span>
          </div>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div> }
        
      </div>
    
  );
};

export default ProductDisplayPage;


{/* <div key={data.product._id} className="product">
        <h3>{data.product.name}</h3>
        <img src={`http://localhost:5000/${data.product.image}`} alt={data.product.name}/>
        <div className="details">
          <span className="price">${data.product.price}</span>
          <span>{data.product.description}</span>
        </div>
        <button onClick={() => handleAddToCart(data.product)}>Add to Cart</button>
      </div> */}