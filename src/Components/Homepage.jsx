
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../API/Products";
import Card from "./Card";


function Homepage() {

    const [Products, setProducts] = useState();

    // to  get the products data
    const {
      data: productData,
      isLoading,
      error,
    } = useQuery({
      queryKey: ["products"],
      queryFn: getProducts,
    });
  
    useEffect(() => {
      if (productData) {
        setProducts(productData);
      }
    }, [productData]);
  
    const sortByTitle = () => {
      let sortedProducts = [...Products.data].sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
      setProducts({ data: sortedProducts });
    };
  
    const sortByPrice = () => {
      let sortedProducts = [...Products.data].sort((a, b) => {
        return a.price - b.price;
      });
      setProducts({ data: sortedProducts });
    };
  
    if (isLoading) {
      return <div>Loading...</div>;
    } else if (error) {
      return <div>Error: {error.message}</div>;
    }

  return (
    <>
      <div className="container mx-auto px-4 py-8 bg-gray-100 shadow-lg rounded-lg">
        <div className="text text-center">
          <h1 className="text-3xl font-bold tracking-wide text-blue-700">
            E-Commerce Application
          </h1>
        </div>
      </div>
      <br />
      <button
        type="button"
        onClick={sortByTitle}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Sort By Title
      </button>
      <button
        type="button"
        onClick={sortByPrice}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Sort By Price
      </button>
      <div className="flex flex-wrap justify-center gap-5">
        {Products?.data.map((product) => (
          <Card
            key={product.id}
            product={product}
            className="w-full md:w-1/2 lg:w-1/3 xl:flex-grow"
          />
        ))}
      </div>
    </>
  );
}

export default Homepage;
