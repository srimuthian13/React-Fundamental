import { useState } from "react";
import { FiUser, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";

export default function Header({ cartCount, onOpenCart, activeSection, onNavigate }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "HOME", id: "hero" },
    { label: "SHOP", id: "produk-section" },
    { label: "BEST SELLERS", id: "best-sellers" },
    { label: "ABOUT US", id: "about" },
  ];

  const handleMobileNav = (id) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 shadow-xs">
      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex items-center justify-between">
        
        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-700 text-xl p-1 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Brand Logo */}
        <div 
          onClick={() => onNavigate("hero")} 
          className="cursor-pointer select-none text-center md:text-left"
        >
          <h1 className="font-serif text-xl sm:text-2xl lg:text-3xl tracking-[0.2em] font-normal text-gray-900 leading-none">
            GLAMOUR
          </h1>
          <p className="text-[8px] sm:text-[9px] tracking-[0.45em] font-sans font-light uppercase text-gray-500 mt-1">
            BEAUTY
          </p>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-10 text-[11px] font-medium tracking-[0.2em] uppercase text-gray-700">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => onNavigate(item.id)}
              className={`hover:text-rose-500 transition-colors py-1 relative ${
                activeSection === item.label.toLowerCase() || (item.label === "HOME" && !activeSection)
                  ? "text-gray-900 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-gray-900"
                  : "text-gray-500"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Icons */}
        <div className="flex items-center space-x-4 sm:space-x-6 text-gray-800 text-base sm:text-lg">
          <button 
            className="hover:text-rose-500 transition-colors" 
            title="Account"
          >
            <FiUser className="stroke-[1.5]" />
          </button>
          
          <button 
            onClick={onOpenCart}
            className="relative hover:text-rose-500 transition-colors" 
            title="Cart"
          >
            <FiShoppingBag className="stroke-[1.5]" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-[#D38B95] text-white text-[9px] font-medium w-4 h-4 sm:w-4.5 sm:h-4.5 rounded-full flex items-center justify-center border border-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-6 py-4 space-y-3 animate-fade-in">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleMobileNav(item.id)}
              className="block w-full text-left text-xs font-semibold tracking-widest text-gray-700 hover:text-rose-500 py-2 border-b border-gray-50"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}