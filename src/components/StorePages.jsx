import { useEffect, useState } from "react";
import LoadingPage from "./loading/LoadingPage";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";
import { addToCart, removeFromCart } from "../store/cartSlice";

const StorePages = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const selected = useSelector((state) => state.cart);

  const isSelected = (productId) => {
    return selected.some((item) => item.id === productId);
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = (id) => {
    const index = selected.findIndex((item) => item.id === id);
    if (index >= 0) {
      dispatch(removeFromCart(id));
    }
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      {products.loading ? (
        <LoadingPage />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.list.map((item, index) => (
            <div className="border-2 border-gray-600" key={index}>
              <div className="px-6 py-4">
                <p className="font-semibold text-lg text-gray-700">
                  {item.title}
                </p>
                <button
                  className="bg-blue-300 w-full rounded"
                  onClick={() =>
                    isSelected(item.id)
                      ? handleRemoveFromCart(item.id)
                      : handleAddToCart(item)
                  }
                >
                  {isSelected(item.id) ? "selected" : "add"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default StorePages;
