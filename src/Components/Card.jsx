/* eslint-disable react/prop-types */


import {Link} from "react-router-dom"

function Card({ product }) {
  return (
    <>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700 flex flex-col items-center justify-center ">
        <Link to={`/products/${product.id}`}>
          <img
            // className="p-8 rounded-t-lg"
            className="h-48 w-48 object-cover rounded-lg"
            src={product.image}
            // width={300}
            // height={300}
            alt="product image"
          />
        </Link>
        <div className="px-5 pb-5 flex flex-col h-auto">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
             {product.title}
            </h5>
          </a>
          <div className="flex items-center mt-2.5 mb-5">
            
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
           Rating : {product.rating.rate}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ${product.price}
            </span>
            <a
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
