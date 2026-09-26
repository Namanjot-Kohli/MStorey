import React, { useState, useEffect } from "react";
import api from "../services/api"
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faTruckMoving } from "@fortawesome/free-solid-svg-icons";

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
          const fetchedProduct = async () => {
            const response = await api.get("/allProducts");
            setProducts(response.data.products);
            console.log(response.data)
          };
          fetchedProduct();
  }, [])
  const { categories } = useParams();
  const showProducts =
    categories === "All"
      ? products
      : products.filter((val) => categories === val.category);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div>
      {isOpen ? (
        <div className="fixed bg-[#DDE4EF] absolute w-[95%] h-[90%] z-60 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col md:flex-row overflow-y-auto md:overflow-visible ">
          <div
            onClick={() => setIsOpen(false)}
            className="md:hidden absolute right-0 top-0 text-2xl bg-red-300 border border-red-700 border-3 h-9 w-9 flex justify-center items-center font-semibold cursor-pointer text-red-700 z-50 "
          >
            X
          </div>
          <div className="w-full md:w-[60%] flex flex-col justify-center items-center mt-12 md:mt-0 ">
            <img
              src={selectedProduct.image}
              className="w-[90%] aspect-[1.44] object-cover  "
            />
          </div>

          <div className="w-full md:w-[45%] h-auto md:h-[100%] relative pb-10 md:pb-0 ">
            <div
              onClick={() => setIsOpen(false)}
              className="hidden md:flex absolute right-0 text-2xl bg-red-300 border border-red-700 border-3 h-9 w-9 justify-center items-center font-semibold cursor-pointer text-red-700  "
            >
              X
            </div>
            <div className="mr-0 md:mr-[11.11%] text-center h-full py-6 md:py-[19%] flex flex-col items-center gap-6 md:gap-11 ">
              <div className="text-2xl md:text-4xl font-bold px-4 md:px-0" >{selectedProduct.name}</div>
              <div className="text-teal-900 font-semibold px-4 md:px-0 ">{selectedProduct.description}</div>
              {/* {selectedProduct.stock<5? <div>
                Only {selectedProduct.stock} left! </div> : null} */}
              
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-20 mt-4">
                <div className="font-bold text-teal-900 text-xl" >₹{selectedProduct.price}</div>
                <div className=" cursor-pointer text-teal-900 font-semibold text-lg py-2 px-6 bg-teal-200 rounded-xl" >
                  <div className="scale-90 hover:scale-100" >ADD TO CART</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center px-4 md:px-8 gap-4">
        {showProducts.map((val) => (
          <div
            onClick={() => {
              setSelectedProduct(val);
              setIsOpen(true);
            }}
            className="rounded-xl w-full sm:w-100 h-auto sm:h-85 bg-white border border-gray-200 shadow-md hover:shadow-xl cursor-pointer flex flex-col items-center my-3 p-3 "
          >
            <img
              src={val.image}
              className="rounded-xl w-[100%] h-[200px] sm:h-[70%] object-cover row-span-3"
            />
            <div className="text-gray-900 text-xl mt-2 font-semibold text-center sm:text-left">
              {val.name}
            </div>
            <div className="w-full flex flex-col sm:flex-row mt-3 justify-center items-center gap-3 sm:gap-6">
              <div className="text-xl ">₹{val.price}</div>
              <div className="text-teal-900 font-semibold text-lg py-2 px-6 bg-teal-200 rounded-xl hover:text-red-700 ">
                Add to Cart
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;

{
  /* <div className='flex ' >
              <div className='bg-violet-400 gap-2 rounded-full w-40 h-25 relative flex flex-col justify-center items-center text-md font-bold text-center' >
                <FontAwesomeIcon className='text-4xl text-amber-600' icon={faTruckMoving} />
                On-Time Delivery
              </div>
              <div className='bg-violet-400 rounded-full w-25 h-25  relative flex flex-col justify-center items-center text-xm font-bold text-center ' >
                <FontAwesomeIcon className='text-4xl text-amber-600 ' icon={faCreditCard} />
                Secure Checkout
              </div>
            </div> */
}
