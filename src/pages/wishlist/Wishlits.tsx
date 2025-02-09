import { useEffect } from "react";
import { FaHeart, FaEye } from "react-icons/fa";
import likes from "../../assets/images/like.jpg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/index";
import { setWishlist, removeFromWishlist } from "../../redux/features/wishlistSlice";

const Wishlist = () => {
  const wishlist = useSelector((state: RootState) => state.wishlist.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    dispatch(setWishlist(savedWishlist));
  }, [dispatch]);

  const handleRemoveFromWishlist = (id: number) => {
    dispatch(removeFromWishlist(id));
  };

  return (
    <div className="container mx-auto py-12 px-4 sm:py-16">
      <h1 className="text-2xl sm:text-3xl text-center font-bold mb-6">
        Your Wishlist
      </h1>

      {wishlist.length === 0 ? (
        <div className="flex flex-col items-center justify-center">
          <img src={likes} alt="Wishlist Empty" className="w-60 sm:w-96 mb-4" />
          <p className="text-lg sm:text-xl text-gray-600 text-center">
            Your wishlist is empty. Start adding some products!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="border p-4 rounded-lg shadow-lg relative group bg-white"
            >
              <button
                className="absolute top-3 right-3 text-xl sm:text-2xl"
                onClick={() => handleRemoveFromWishlist(item.id)}
              >
                <FaHeart className="text-red-500 hover:text-red-700 transition" />
              </button>

              <button
                className="absolute top-10 right-3 text-xl sm:text-2xl"
                onClick={() => navigate(`/product/${item.id}`)}
              >
                <FaEye className="hover:text-red-700 transition" />
              </button>

              <img
                src={Array.isArray(item.images) && item.images.length > 0 ? item.images[0] : "path/to/fallback-image.jpg"}
                alt={item.title}
                className="w-full h-36 sm:h-40 object-contain"
              />

              <h2 className="text-lg font-semibold mt-2 text-center">{item.title}</h2>

              <p className="text-red-500 font-bold text-lg sm:text-xl text-center">
                ${item.price}
              </p>

              <div className="flex items-center justify-center mt-2">
                <span className="text-yellow-500">⭐️⭐️⭐️⭐️☆</span>
                <p className="text-gray-600 ml-2">({item.rating})</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
