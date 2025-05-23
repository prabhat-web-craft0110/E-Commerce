"use client";


import { useEffect, useState } from "react";
import ProductCard from "../components/Card";
import { getProducts } from "../../utils/Apiclient";
// import { baseURL, getProducts } from "../utils/Apiclient";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await getProducts();

      const data = await res.json();
      if (data.error) {
        alert(data.message);
        return;
      }
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product,ind) => (
          <ProductCard key={ind} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;