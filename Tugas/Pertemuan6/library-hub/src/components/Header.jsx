import { IoBookOutline, IoSearch} from "react-icons/io5";

function Header() {
  return (
    <header className="bg-[#4A3525] text-[#FDFBF7] shadow-md border-b border-[#3D2B1E] sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3.5 sm:py-4">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#5C4033] flex items-center justify-center shadow-sm border border-[#6F5B4C]/40">
         
              <IoBookOutline className="w-5 h-5 sm:w-6 sm:h-6 text-[#F5EBE0]" />
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold tracking-wide text-[#F5EBE0]">
              Library<span className="italic text-[#D6C0B3]">Hub</span>
            </h1>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-4 items-center">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Cari judul buku atau penulis..."
                className="w-full bg-[#3D2B1E]/60 text-[#FDFBF7] placeholder-[#C2B2A3] text-sm py-2 pl-9 pr-4 rounded-xl border border-[#6F5B4C]/50 focus:outline-none focus:border-[#D6C0B3] transition duration-200"
              />
              {/* Ikon Search dari React Icons */}
              <IoSearch className="w-4 h-4 text-[#C2B2A3] absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* Navigation Buttons */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
            <a
              href="#"
              className="text-[#E3D5CA] px-3.5 py-2 rounded-xl hover:text-white hover:bg-[#5C4033] transition duration-200 font-sans text-sm font-medium"
            >
              Masuk
            </a>
            <a
              href="#"
              className="bg-[#D6C0B3] text-[#3D2B1E] hover:bg-[#E3D5CA] px-4 py-2 rounded-xl transition duration-200 font-sans text-sm font-semibold shadow-sm ml-1"
            >
              Daftar
            </a>
          </nav>

        </div>
      </div>
    </header>
  );
}

export default Header;