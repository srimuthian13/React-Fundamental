import { FaHeart, FaRegHeart, FaStar, FaEye } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

export default function ProductCard({ product, onToggleFavorite, onSelectProduct, onAddToCart, viewMode = "grid" }) {
  const getStatusBadge = (status) => {
    switch (status) {
      case "Best Seller":
        return "bg-[#E6C5B3] text-gray-800";
      case "Produk Baru":
      case "NEW":
        return "bg-[#D38B95] text-white";
      case "Diskon":
        return "bg-rose-400 text-white";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const isGrid = viewMode === "grid";
  const reviewCount = Math.floor((product.id * 17) % 80) + 30;

  return (
    <div
      className={`bg-white rounded-2xl overflow-hidden border border-gray-100/60 hover:shadow-lg transition-all duration-300 group relative ${
        isGrid ? "flex flex-col justify-between" : "flex flex-col sm:flex-row items-center p-3 gap-4"
      }`}
    >
      {/* Image Container */}
      <div className={`relative ${isGrid ? "w-full aspect-square" : "w-full sm:w-36 h-40 rounded-xl"} overflow-hidden bg-[#FAF6F3]`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {product.status && product.status !== "Ready Stock" && (
          <span className={`absolute top-3 left-3 px-2 py-0.5 text-[8px] sm:text-[9px] font-bold tracking-wider uppercase rounded-full shadow-xs ${getStatusBadge(product.status)}`}>
            {product.status === "Produk Baru" ? "NEW" : product.status}
          </span>
        )}

        <button
          onClick={() => onToggleFavorite(product.id)}
          className="absolute top-3 right-3 bg-white/80 backdrop-blur-xs p-1.5 sm:p-2 rounded-full shadow-xs hover:bg-white text-gray-400 hover:text-rose-500 transition-all"
          aria-label="Toggle Wishlist"
        >
          {product.isFavorite ? (
            <FaHeart className="text-rose-500 text-xs sm:text-sm" />
          ) : (
            <FaRegHeart className="text-gray-500 hover:text-rose-500 text-xs sm:text-sm" />
          )}
        </button>
      </div>

      {/* Info Section */}
      <div className={`p-4 flex-1 flex flex-col justify-between ${isGrid ? "w-full" : "w-full"}`}>
        <div>
          <span className="text-[9px] font-bold tracking-widest text-[#D38B95] uppercase block mb-1">
            {product.category}
          </span>

          <h3 
            onClick={() => onSelectProduct(product)}
            className="text-xs sm:text-sm font-semibold text-gray-800 line-clamp-1 cursor-pointer hover:text-rose-500 transition-colors"
          >
            {product.name}
          </h3>

          <div className="flex items-center gap-1 mt-1">
            <div className="flex items-center text-amber-400 text-[10px]">
              <FaStar />
              <span className="ml-1 font-bold text-gray-700">{product.rating}</span>
            </div>
            <span className="text-[10px] text-gray-400 font-medium ml-1">
              ({reviewCount})
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-50">
          <div>
            <span className="text-[8px] sm:text-[9px] text-gray-400 block tracking-wider uppercase">PRICE</span>
            <span className="text-xs sm:text-sm font-bold text-gray-900">
              Rp {product.price.toLocaleString("id-ID")}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => onSelectProduct(product)}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors"
              title="View details"
            >
              <FaEye className="text-xs" />
            </button>

            <button
              onClick={() => onAddToCart(product)}
              disabled={product.stock === 0}
              className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all ${
                product.stock === 0
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-[#D38B95] hover:bg-[#C27A84] text-white shadow-xs"
              }`}
              title={product.stock === 0 ? "Out of Stock" : "Add to cart"}
            >
              <FiShoppingCart className="text-xs" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}