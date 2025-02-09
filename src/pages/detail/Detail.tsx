import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  rating: number;
  stock: number;
  category: string;
  reviews: { rating: number; comment: string; reviewerName: string }[];
}

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [quantity, setQuantity] = useState(1);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch(`https://dummyjson.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data);
          setSelectedImage(data.images[0]);
          const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
          setIsInWishlist(wishlist.some((item: Product) => item.id === data.id));
          setIsLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching product:", err);
          setIsLoading(false);
        });
    }, 1500); // Skeleton loading with delay
  }, [id]);

  const handleWishlistToggle = () => {
    if (!product) return;

    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    if (isInWishlist) {
      const updatedWishlist = wishlist.filter((item: Product) => item.id !== product.id);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    } else {
      wishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
    setIsInWishlist(!isInWishlist);
  };

  const renderRatingStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;
    return (
      <>
        {"★".repeat(fullStars)}{"☆".repeat(emptyStars)}
      </>
    );
  };

  if (isLoading) {
    return (
      <div className="container mx-auto py-10 px-4 flex flex-col lg:flex-row gap-10 justify-center">
        {/* Skeleton for images */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="flex sm:flex-col gap-6">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="w-16 sm:w-28 h-16 sm:h-28 bg-gray-300 rounded-md animate-pulse"></div>
            ))}
          </div>
          <div className="w-72 sm:w-96 h-72 sm:h-96 bg-gray-300 animate-pulse rounded-md"></div>
        </div>

        {/* Skeleton for product details */}
        <div className="w-full lg:w-1/2 text-center sm:text-left">
          <div className="h-8 w-3/4 bg-gray-300 animate-pulse rounded mb-4"></div>
          <div className="h-6 w-1/2 bg-gray-300 animate-pulse rounded mb-4"></div>
          <div className="h-6 w-1/4 bg-gray-300 animate-pulse rounded mb-4"></div>
          <div className="h-24 bg-gray-300 animate-pulse rounded mb-4"></div>
          <div className="h-12 w-full sm:w-2/3 bg-gray-300 animate-pulse rounded mb-4"></div>
        </div>
      </div>
    );
  }

  if (!product) {
    return <p className="text-center py-10">Product not found</p>;
  }

  return (
    <div className="container mx-auto py-20 px-4 flex flex-col lg:flex-row gap-10 justify-center">
      {/* Left side - Images and Gallery */}
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <div className="flex sm:flex-col gap-6">
          {product.images.map((img) => (
            <img
              key={img}
              src={img}
              alt="Product Thumbnail"
              className="w-16 sm:w-28 h-16 sm:h-28 object-cover cursor-pointer border rounded-md transition-transform duration-300 transform hover:scale-110 hover:shadow-lg"
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
        <div>
          <img src={selectedImage} alt="Selected Product" className="w-72 sm:w-96 h-72 sm:h-96 object-contain" />
        </div>
      </div>

      {/* Right side - Product Details */}
      <div className="w-full lg:w-1/2 text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl font-bold">{product.title}</h1>
        <div className="flex items-center justify-center sm:justify-start mt-2">
          <span className="text-yellow-500 text-xl sm:text-2xl">{renderRatingStars(product.rating)}</span>
          <p className="text-gray-600 ml-2">({product.reviews.length} Reviews)</p>
          <span className="text-green-600 ml-2">{product.stock > 0 ? "In Stock" : "Out of Stock"}</span>
        </div>
        <p className="text-red-500 text-2xl font-bold mt-4">${product.price}</p>
        <p className="text-gray-600 mt-4">{product.description}</p>

        <div className="mt-4 flex flex-col sm:flex-row gap-4 items-center">
          <div className="flex items-center border rounded-md px-4 py-2">
            <button className="text-2xl font-bold" onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
            <span className="px-4 text-2xl">{quantity}</span>
            <button className="text-2xl font-bold" onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
          <button className="bg-red-500 text-white px-12 py-3 rounded-md w-full sm:w-auto">Buy Now</button>
          <button className="border px-4 py-3 rounded-md" onClick={handleWishlistToggle}>
            {isInWishlist ? <FaHeart className="text-2xl text-red-500" /> : <FaRegHeart className="text-2xl" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
