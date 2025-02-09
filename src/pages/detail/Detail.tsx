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
        {"★".repeat(fullStars)}
        {"☆".repeat(emptyStars)}
      </>
    );
  };

  if (isLoading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  if (!product) {
    return <p className="text-center py-20">Product not found</p>;
  }

  return (
    <div className="container mx-auto py-10 px-4">
      {/* Breadcrumb */}
      <nav className="text-gray-500 text-sm mb-4">
        <a href="/" className="hover:underline">Home</a> &gt;{" "}
        <a href={`/category/${product.category}`} className="hover:underline">{product.category}</a> &gt;{" "}
        <span className="text-gray-700 font-bold">{product.title}</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left side - Images */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex sm:flex-col gap-4">
            {product.images.map((img) => (
              <img
                key={img}
                src={img}
                alt="Product Thumbnail"
                className="w-16 sm:w-20 h-16 sm:h-20 object-cover cursor-pointer border rounded-md hover:scale-105 transition-transform"
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
          <div className="flex-1">
            <img
              src={selectedImage}
              alt="Selected Product"
              className="w-full h-96 object-contain border rounded-md"
            />
          </div>
        </div>

        {/* Right side - Product Details */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <div className="flex items-center gap-2 text-yellow-500 text-xl">
            {renderRatingStars(product.rating)}
            <span className="text-gray-600 text-sm">({product.reviews.length} Reviews)</span>
          </div>
          <p className="text-green-600 text-sm">{product.stock > 0 ? "In Stock" : "Out of Stock"}</p>
          <p className="text-2xl text-red-500 font-bold my-4">${product.price}</p>
          <p className="text-gray-700 mb-4">{product.description}</p>

          {/* Size and Color Options */}
          <div className="flex gap-4 mb-4">
            <div>
              <p className="font-bold mb-1">Colour:</p>
              <div className="flex gap-2">
                <span className="w-6 h-6 bg-red-500 rounded-full cursor-pointer border"></span>
                <span className="w-6 h-6 bg-blue-500 rounded-full cursor-pointer border"></span>
              </div>
            </div>
            <div>
              <p className="font-bold mb-1">Size:</p>
              <select className="border rounded px-2 py-1">
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>
          </div>

          {/* Quantity and Buttons */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border rounded-md px-4 py-2">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-2xl font-bold">-</button>
              <span className="px-4 text-2xl">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="text-2xl font-bold">+</button>
            </div>
            <button className="bg-red-500 text-white px-6 py-3 rounded-md">Buy Now</button>
            <button className="border px-4 py-3 rounded-md" onClick={handleWishlistToggle}>
              {isInWishlist ? <FaHeart className="text-red-500 text-2xl" /> : <FaRegHeart className="text-2xl" />}
            </button>
          </div>

          {/* Additional Information */}
          <div className="border-t pt-4 text-sm text-gray-600">
            <p>Free Delivery: Enter your postal code for Delivery Availability</p>
            <p>Return Delivery: Free 30 Days Delivery Returns.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
