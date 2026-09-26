import React, { useEffect, useState } from "react";
import api from "../services/api";

const Dummy_ProductCard = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
        const fetchedProduct = async () => {
          const response = await api.get("/allProducts");
          setProducts(response.data.products);
          console.log(response.data)
        };
        fetchedProduct();
      }, [])
  return (
    
    <div>
      <div>
        <h1>{products[0]?.name}</h1>
      </div>
    </div>
  );
};

export default Dummy_ProductCard;
