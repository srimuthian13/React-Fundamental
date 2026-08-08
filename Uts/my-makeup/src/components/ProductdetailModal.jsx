import { IoClose } from "react-icons/io5";
import { FaStar, FaBoxOpen, FaTag } from "react-icons/fa";

export default function ProductDetailModal({ product, onClose, onChangeStatus }) {
  if (!product) return null;
  const statuses = ["Produk Baru", "Best Seller", "Diskon", "Stok Habis", "Stok Terbatas", "Ready Stock"];

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-5 sm:p-6 relative shadow-2xl animate-fade-in border border-rose-100/50">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-100 hover:bg-rose-500 hover:text-white p-2 rounded-full text-gray-500 transition-all z-10"
        >
          <IoClose className="text-lg sm:text-xl" />
        </button>

        <img src={product.image} alt={product.name} className="w-full h-48 sm:h-60 object-cover rounded-2xl mb-4" />
        
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
          <div>
            <span className="text-[10px] font-bold uppercase bg-pink-100 text-pink-600 px-2.5 py-0.5 rounded-full">
              {product.category}
            </span>
            <h2 className="text-lg sm:text-2xl font-extrabold text-gray-800 mt-1">{product.name}</h2>
          </div>
          <div className="sm:text-right">
            <span className="text-[10px] text-gray-400 block uppercase">Harga</span>
            <span className="text-lg sm:text-xl font-black text-[#D38B95]">
              Rp {product.price.toLocaleString("id-ID")}
            </span>
          </div>
        </div>

        <p className="text-gray-600 text-xs sm:text-sm mt-3 leading-relaxed bg-rose-50/50 p-3 rounded-xl border border-pink-100/50">
          {product.description}
        </p>

        {/* Status Changer */}
        <div className="mt-4 pt-4 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-gray-600">
          <div className="flex items-center gap-2">
            <span className="font-bold text-gray-500 text-xs">Ubah Status:</span>
            <select
              value={product.status}
              onChange={(e) => onChangeStatus(product.id, e.target.value)}
              className="border border-pink-200 rounded-xl p-1.5 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white font-semibold text-gray-700 text-xs"
            >
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
          <span className="flex items-center gap-1 font-semibold text-xs">
            <FaBoxOpen className="text-pink-500" /> Stok: {product.stock} pcs
          </span>
        </div>

        <div className="mt-3 pt-3 border-t flex justify-between items-center text-xs text-gray-600">
          <span className="flex items-center gap-1 text-amber-500 font-bold">
            <FaStar /> {product.rating} / 5.0
          </span>
          <span className="flex items-center gap-1 font-semibold">
            <FaTag className="text-purple-500" /> Status: <strong className="text-gray-800">{product.status}</strong>
          </span>
        </div>
      </div>
    </div>
  );
}