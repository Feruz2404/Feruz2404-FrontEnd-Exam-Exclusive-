import React, { useEffect, useState } from "react";
import cartImage from "../../assets/images/cart.avif";

interface Product {
  id: number;
  title: string;
  price: number;
  rating: number;
  images: string[];
  brand: string;
}

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart) as Product[];
        setCartItems(parsedCart);
      } catch (error) {
        console.error("Error parsing cart data from localStorage:", error);
        setCartItems([]);
      }
    }
  }, []);

  const removeFromCart = (productId: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        <h2 className="text-3xl font-extrabold text-gray-800 text-center py-8 bg-gray-50">
          Shopping Cart
        </h2>

        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <img
              src={cartImage}
              alt="Shopping Cart"
              className="w-48 sm:w-60 mx-auto mb-6 opacity-75"
            />
            <p className="text-xl text-gray-500">Your cart is currently empty.</p>
            <p className="text-md text-gray-400 mt-2">
              Explore our products and add items to your cart!
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead className="bg-gray-100 text-gray-700 uppercase font-semibold">
                <tr>
                  <th className="p-4 text-left">Product</th>
                  <th className="p-4 text-left">Title</th>
                  <th className="p-4 text-left">Price</th>
                  <th className="p-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b border-gray-200 transition-colors hover:bg-gray-50">
                    <td className="p-4">
                      <img
                        src={item.images[0]}
                        alt={item.title}
                        className="w-20 h-20 object-cover rounded-lg shadow-md"
                      />
                    </td>
                    <td className="p-4">{item.title}</td>
                    <td className="p-4 font-medium text-gray-600">${item.price}</td>
                    <td className="p-4 text-center">
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
