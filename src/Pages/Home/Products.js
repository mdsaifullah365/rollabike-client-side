import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import ProductCard from "./ProductCard";

const Products = () => {
  const { data: products, isLoading } = useQuery("products", () =>
    axios.get("/product")
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <section className="container">
      <div className="text-4xl text-center text-dark">Motorbike Parts</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products?.data.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
