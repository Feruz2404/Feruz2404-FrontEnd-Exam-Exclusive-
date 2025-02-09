import { useEffect, useState } from "react";
import { FaRegHeart, FaRegEye, FaHeart } from "react-icons/fa";
import { FaStar, FaStarHalfStroke } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  price: number;
  rating: number;
  images: string[];
  brand: string;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setProducts(data.products);
        setDisplayedProducts(data.products.slice(0, 12));
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching products:", err);
        setIsLoading(false);
      }
    };

    const loadDataFromLocalStorage = () => {
      try {
        const savedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
        setWishlist(savedWishlist);

        const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCart(savedCart);
      } catch (error) {
        console.error("Error parsing localStorage data:", error);
      }
    };

    fetchProducts();
    loadDataFromLocalStorage();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleWishlistToggle = (product: Product) => {
    let updatedWishlist = [...wishlist];

    if (wishlist.some((item) => item.id === product.id)) {
      updatedWishlist = wishlist.filter((item) => item.id !== product.id);
    } else {
      updatedWishlist.push(product);
    }

    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => {
      if (prevCart.some((item) => item.id === product.id)) {
        return prevCart;
      } else {
        return [...prevCart, product];
      }
    });
  };

  const generateRating = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    return (
      <>
        {Array(fullStars)
          .fill(null)
          .map((_, index) => (
            <FaStar key={index} className="text-yellow-500" />
          ))}
        {halfStar ? <FaStarHalfStroke className="text-yellow-500" /> : ""}
        {Array(emptyStars)
          .fill(null)
          .map((_, index) => (
            <FaStar key={`empty-${index}`} className="text-gray-300" />
          ))}
      </>
    );
  };

  const navigateToProductDetail = (id: number) => {
    navigate(`/product/${id}`);
  };

  const loadMoreProducts = () => {
    const nextProducts = products.slice(displayedProducts.length, displayedProducts.length + 4);
    setDisplayedProducts((prevProducts) => [...prevProducts, ...nextProducts]);
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-16">
        {isLoading ? (
          Array(12)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="bg-gray-100 py-4 px-5 rounded-lg shadow-md hover:shadow-lg transition relative animate-pulse"
              >
                <div className="w-full h-40 bg-gray-300 rounded-md mb-4"></div>
                <div className="w-2/3 h-6 bg-gray-300 rounded-md mb-2"></div>
                <div className="w-1/3 h-6 bg-gray-300 rounded-md mb-2"></div>
                <div className="w-1/2 h-6 bg-gray-300 rounded-md mb-3"></div>
                <div className="w-full h-10 bg-gray-300 rounded-md"></div>
              </div>
            ))
        ) : (
          displayedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white py-6 px-5 rounded-lg shadow-lg hover:shadow-xl transition relative"
            >
              <div className="absolute top-3 right-3 flex flex-col gap-3">
                {wishlist.some((item) => item.id === product.id) ? (
                  <FaHeart
                    className="text-2xl cursor-pointer text-red-600"
                    onClick={() => handleWishlistToggle(product)}
                  />
                ) : (
                  <FaRegHeart
                    className="text-2xl cursor-pointer hover:text-red-600"
                    onClick={() => handleWishlistToggle(product)}
                  />
                )}
                <FaRegEye
                  className="text-2xl cursor-pointer hover:text-blue-600"
                  onClick={() => navigateToProductDetail(product.id)}
                />
              </div>

              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-40 object-cover rounded-md mb-4 cursor-pointer"
              />

              <h3 className="text-lg font-semibold mt-3 truncate text-gray-800">{product.title}</h3>
              <div className="flex items-center justify-between mt-2">
                <p className="text-red-500 font-bold text-xl">${product.price}</p>
                <div className="flex items-center">
                  <div className="text-yellow-500 flex gap-1">{generateRating(product.rating)}</div>
                  <p className="text-sm text-gray-600 ml-2">{product.rating.toFixed(1)}</p>
                </div>
              </div>

              <button
                onClick={() => handleAddToCart(product)}
                className="bg-gray-800 text-white w-full py-2 mt-4 rounded-md hover:bg-gray-500 transition duration-300"
              >
                Add To Cart
              </button>
            </div>
          ))
        )}
      </div>

      {!isLoading && displayedProducts.length < products.length && (
        <div className="text-center mt-8">
          <button
            onClick={loadMoreProducts}
            className="bg-gray-800 text-white py-2 px-6 rounded-md hover:bg-gray-900 transition duration-300"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
