import React from "react";
import { useGetAllProductsQuery } from "../slices/productsApi";

const HomePage = () => {
     const {data, error, isLoading} = useGetAllProductsQuery()
     console.log("data home",data)
     console.log("data error",error)
     console.log("data isLoading", isLoading)
	return (
        <div>
            <h1>"home"</h1>
      </div>
	);
};

export default HomePage