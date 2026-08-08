import { IoClose } from "react-icons/io5";
import { FiTrash2, FiPlus, FiMinus, FiShoppingBag } from "react-icons/fi";

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onOpenCheckout }) {
  if (!isOpen) return null;
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex justify-end">
      <div className="bg-white w-full sm:max-w-md h-full shadow-2xl flex flex-col justify-between">
        
        {/* Header Drawer */}
        <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-rose-50/50">
          <div className="flex items-center gap-2">
            <FiShoppingBag className="text-[#D38B95] text-xl" />
            <h2 className="text-base sm:text-lg font-bold text-gray-800">Keranjang Belanja</h2>
            <span className="bg-pink-100 text-pink-700 text-xs font-bold px-2 py-0.5 rounded-full">
              {cartItems.reduce((acc, item) => acc + item.quantity, 0)} Item
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition"
          >
            <IoClose className="text-2xl" />
          </button>
        </div>

        {/* List Item */}
        <div className="p-4 flex-1 overflow-y-auto space-y-3">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div 
                key={item.id} 
                className="flex items-center gap-3 bg-white p-3 rounded-2xl border border-pink-100/60 shadow-xs"
              >
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-xl border border-gray-100"
                />
                
                <div className="flex-1">
                  <h4 className="text-xs sm:text-sm font-bold text-gray-800 line-clamp-1">{item.name}</h4>
                  <p className="text-xs text-[#D38B95] font-extrabold mt-0.5">
                    Rp {item.price.toLocaleString("id-ID")}
                  </p>

                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      className="p-1 bg-gray-100 hover:bg-pink-100 text-gray-600 hover:text-pink-600 rounded-md transition text-xs"
                    >
                      <FiMinus />
                    </button>
                    <span className="text-xs font-bold w-5 text-center">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      disabled={item.quantity >= item.stock}
                      className={`p-1 rounded-md transition text-xs ${
                        item.quantity >= item.stock 
                          ? "bg-gray-50 text-gray-300 cursor-not-allowed" 
                          : "bg-gray-100 hover:bg-pink-100 text-gray-600 hover:text-pink-600"
                      }`}
                    >
                      <FiPlus />
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="text-gray-400 hover:text-rose-500 p-2 transition"
                >
                  <FiTrash2 className="text-base" />
                </button>
              </div>
            ))
          ) : (
            <div className="text-center py-20">
              <FiShoppingBag className="text-4xl text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500 font-medium text-xs sm:text-sm">Keranjang Anda masih kosong</p>
            </div>
          )}
        </div>

        {/* Footer Drawer */}
        {cartItems.length > 0 && (
          <div className="p-4 border-t border-gray-100 bg-rose-50/30">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs sm:text-sm text-gray-500">Total Pembayaran</span>
              <span className="text-lg sm:text-xl font-black text-[#D38B95]">
                Rp {totalPrice.toLocaleString("id-ID")}
              </span>
            </div>
            <button 
              onClick={onOpenCheckout}
              className="w-full bg-[#D38B95] hover:bg-[#C27A84] text-white font-bold py-3 rounded-xl shadow-md transition-all text-xs sm:text-sm"
            >
              Lanjutkan Checkout
            </button>
          </div>
        )}

      </div>
    </div>
  );
}