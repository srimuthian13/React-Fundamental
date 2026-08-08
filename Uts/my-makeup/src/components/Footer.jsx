import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="about" className="bg-[#FAF6F3] text-gray-700 mt-12 sm:mt-16 border-t border-rose-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
          
          {/* Section Brand */}
          <div>
            <h3 className="font-serif text-lg sm:text-xl tracking-[0.2em] font-bold text-gray-900 mb-0.5">
              GLAMOUR
            </h3>
            <p className="text-[8px] sm:text-[9px] tracking-[0.45em] font-sans font-light uppercase text-[#D38B95] mb-3">
              BEAUTY
            </p>
            <p className="text-xs text-gray-500 leading-relaxed max-w-sm">
              Penyedia produk make up premium terlengkap untuk menunjang kecantikan dan rasa percaya diri Anda setiap hari dengan kualitas terbaik.
            </p>
          </div>

          {/* Section Quick Links */}
          <div>
            <h4 className="text-[10px] sm:text-[11px] font-bold text-gray-900 uppercase tracking-wider mb-3">Kategori Pilihan</h4>
            <ul className="text-xs space-y-2 text-gray-500">
              <li className="hover:text-[#D38B95] transition cursor-pointer">Face Makeup (Cushion, Primer, Powder)</li>
              <li className="hover:text-[#D38B95] transition cursor-pointer">Lip Products (Lip Cream, Tint, Oil)</li>
              <li className="hover:text-[#D38B95] transition cursor-pointer">Eye Cosmetics (Mascara, Eyeliner, Palette)</li>
            </ul>
          </div>

          {/* Section Social Media */}
          <div>
            <h4 className="text-[10px] sm:text-[11px] font-bold text-gray-900 uppercase tracking-wider mb-3">Ikuti Kami</h4>
            <div className="flex space-x-3">
              <a href="#" className="p-2 sm:p-2.5 bg-white hover:bg-[#D38B95] border border-rose-100/60 rounded-full text-gray-700 hover:text-white transition-colors duration-300">
                <FaInstagram className="text-xs sm:text-sm" />
              </a>
              <a href="#" className="p-2 sm:p-2.5 bg-white hover:bg-[#D38B95] border border-rose-100/60 rounded-full text-gray-700 hover:text-white transition-colors duration-300">
                <FaTiktok className="text-xs sm:text-sm" />
              </a>
              <a href="#" className="p-2 sm:p-2.5 bg-white hover:bg-[#D38B95] border border-rose-100/60 rounded-full text-gray-700 hover:text-white transition-colors duration-300">
                <FaWhatsapp className="text-xs sm:text-sm" />
              </a>
            </div>
          </div>
        </div>

        {/* Section Copyright */}
        <div className="border-t border-rose-200/40 pt-4 sm:pt-6 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 gap-2 text-center md:text-left">
          <p>© 2026 Glamour Beauty Store. All rights reserved.</p>
          <p className="flex items-center gap-1 uppercase tracking-widest text-[8px] sm:text-[9px] text-[#D38B95] font-semibold">
             Mini Project UTS React Fundamental
          </p>
        </div>
      </div>
    </footer>
  );
}