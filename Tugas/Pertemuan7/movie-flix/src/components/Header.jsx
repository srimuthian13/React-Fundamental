import { useState } from 'react';
import {
  HiOutlineFilm,
  HiOutlineBell,
  HiOutlineUser,
  HiOutlineMenu,
  HiOutlineX,
  HiOutlineBookmark,

} from 'react-icons/hi';

function Header({ activeTab, setActiveTab, watchlistCount }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Beranda', value: 'Home' },
    { label: 'Sedang Tayang', value: 'Sedang Tayang' },
    { label: 'Favorit Saya', value: 'Favorit Saya' },
    { label: 'Riwayat', value: 'Riwayat' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-navy/90 backdrop-blur-lg border-b border-sage/20 shadow-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-20">

          <div className="flex items-center gap-6">
            <button
              onClick={() => setActiveTab('Home')}
              className="flex items-center gap-2 group cursor-pointer border-none bg-transparent p-0 text-left shrink-0"
            >
              <div className="w-9 h-9 rounded-lg bg-linear-to-tr from-bronze to-amber-700 flex items-center justify-center text-cream shadow-lg group-hover:scale-105 transition-all duration-300">
                <HiOutlineFilm className="w-5 h-5 animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-black tracking-wider text-cream flex items-center gap-0.5">
                  MOVIE<span className="text-bronze">FLIX</span>
                </span>
              </div>
            </button>

            <nav className="hidden md:flex items-center gap-0.5 bg-navy/40 p-1 rounded-full border border-sage/15 backdrop-blur-sm">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => setActiveTab(item.value)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${activeTab === item.value
                    ? 'bg-bronze text-cream shadow-md scale-105'
                    : 'text-sage hover:text-cream hover:bg-navy/80'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setActiveTab('Watchlist')}
              className={`flex items-center gap-1.5 px-3 py-1.5 border rounded-xl text-xs font-bold transition-all cursor-pointer ${activeTab === 'Watchlist'
                ? 'bg-bronze border-bronze text-cream shadow-md'
                : 'bg-navy/80 border-sage/30 text-sage hover:bg-bronze/10'
                }`}
            >
              <HiOutlineBookmark className="w-3.5 h-3.5 text-cream" />
              <span>Watchlist</span>
              <span className="px-1 py-0.2 rounded-md bg-navy text-[9px] text-cream border border-sage/20">
                {watchlistCount}
              </span>
            </button>



            <button className="relative p-2 text-sage hover:text-cream bg-navy/60 rounded-xl border border-sage/20 transition-all cursor-pointer">
              <HiOutlineBell className="w-4.5 h-4.5" />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-bronze rounded-full"></span>
            </button>

            <div className="flex items-center gap-2 pl-2 border-l border-sage/20">
              <div className="w-8 h-8 rounded-lg bg-linear-to-tr from-bronze to-amber-700 flex items-center justify-center text-cream font-bold shadow-md cursor-pointer hover:ring-2 hover:ring-bronze transition-all duration-300">
                <HiOutlineUser className="w-4.5 h-4.5" />
              </div>
              <p className="text-xs font-semibold text-cream">Sri Muthia</p>

            </div>
          </div>

          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl bg-navy text-sage hover:text-cream border border-sage/20 focus:outline-none cursor-pointer"
            >
              {isMobileMenuOpen ? (
                <HiOutlineX className="w-5 h-5" />
              ) : (
                <HiOutlineMenu className="w-5 h-5" />
              )}
            </button>
          </div>

        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="sm:hidden bg-navy border-b border-sage/20 px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top duration-300">

          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  setActiveTab(item.value);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${activeTab === item.value
                  ? 'bg-bronze text-cream font-bold'
                  : 'text-sage hover:bg-navy/80'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="pt-4 border-t border-sage/10 flex items-center justify-between px-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-linear-to-tr from-bronze to-amber-700 flex items-center justify-center text-cream font-bold">
                <HiOutlineUser className="w-4 h-4" />
              </div>
              <p className="text-xs font-semibold text-cream">Sri Muthia</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setActiveTab('Watchlist');
                  setIsMobileMenuOpen(false);
                }}
                className="relative p-2 text-cream bg-navy rounded-xl border border-sage/20 cursor-pointer"
              >
                <HiOutlineBookmark className="w-4.5 h-4.5 text-bronze" />
                {watchlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 flex items-center justify-center rounded-full bg-bronze text-[9px] font-bold text-cream">
                    {watchlistCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;