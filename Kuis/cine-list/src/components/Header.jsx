
function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#120a07]/85 border-b border-[#2d1b14]/80 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#3d2319] to-[#1e100b] border border-[#523326]/60 flex items-center justify-center text-lg shadow-inner group-hover:border-[#8c5a43] transition-all duration-300">
            🎬
          </div>
          
          <span className="font-serif text-2xl font-normal tracking-[0.2em] text-[#f2ece9] transition-colors duration-300">
            CINE<span className="font-light italic text-[#c89269] group-hover:text-[#dbab85] transition-colors">LIST</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a 
            href="#" 
            className="font-serif text-xs uppercase tracking-[0.25em] text-[#b8a7a1] hover:text-[#e8deda] transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#c89269] hover:after:w-full after:transition-all after:duration-300"
          >
            Movies
          </a>
          <a 
            href="#" 
            className="font-serif text-xs uppercase tracking-[0.25em] text-[#b8a7a1] hover:text-[#e8deda] transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#c89269] hover:after:w-full after:transition-all after:duration-300"
          >
            Watchlist
          </a>
          <a 
            href="#" 
            className="font-serif text-xs uppercase tracking-[0.25em] text-[#b8a7a1] hover:text-[#e8deda] transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#c89269] hover:after:w-full after:transition-all after:duration-300"
          >
            Curated
          </a>
        </nav>

        {/* Action Button */}
        <button className="font-serif text-xs uppercase tracking-[0.2em] px-6 py-2.5 rounded-full text-[#f2ece9] bg-[#2d1b14] hover:bg-[#3d2319] border border-[#523326]/80 hover:border-[#8c5a43] shadow-lg transition-all duration-300 active:scale-95">
          Sign In
        </button>

      </div>
    </header>
  );
}

export default Header;