import { useState } from "react";
import { initialProducts } from "./data/products";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import ProductCard from "./components/ProductCard";
import ProductDetailModal from "./components/ProductDetailModal";
import CartDrawer from "./components/CartDrawer";
import Footer from "./components/Footer";
import { FiSearch, FiFilter, FiGrid, FiList, FiRefreshCw } from "react-icons/fi";

export default function App() {
  const [products, setProducts] = useState(initialProducts);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [viewMode, setViewMode] = useState("grid"); // grid vs list view mode
  
  // State Keranjang
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Toggle Wishlist
  const handleToggleFavorite = (id) => {
    setProducts(products.map(product => 
      product.id === id ? { ...product, isFavorite: !product.isFavorite } : product
    ));
  };

  // Ubah Status Produk (User Interaction Requirement)
  const handleChangeStatus = (id, newStatus) => {
    setProducts(products.map(product => 
      product.id === id ? { ...product, status: newStatus } : product
    ));
    if (selectedProduct && selectedProduct.id === id) {
      setSelectedProduct(prev => ({ ...prev, status: newStatus }));
    }
  };

  // Tambah ke Keranjang
  const handleAddToCart = (product) => {
    const existing = cartItems.find(item => item.id === product.id);
    if (existing) {
      if (existing.quantity < product.stock) {
        setCartItems(cartItems.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        ));
      }
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Update Kuantitas di Keranjang
  const handleUpdateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveFromCart(id);
    } else {
      // Cari produk asli untuk validasi stok
      const product = products.find(p => p.id === id);
      if (product && newQty <= product.stock) {
        setCartItems(cartItems.map(item => 
          item.id === id ? { ...item, quantity: newQty } : item
        ));
      }
    }
  };

  // Hapus dari Keranjang
  const handleRemoveFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Reset Semua Filter & Pencarian
  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
  };

  // Logic Filter & Pencarian
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleNavigate = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div 
      className="min-h-screen text-gray-800 flex flex-col justify-between bg-cover bg-fixed bg-center relative"
    >
      <div>
        <Header 
          cartCount={totalCartCount} 
          onOpenCart={() => setIsCartOpen(true)}
          onNavigate={handleNavigate}
        />

        <main className="container mx-auto px-4 py-8">
          {/* Section Dashboard */}
          <section id="hero" className="mb-12">
            <Dashboard products={products} onSelectCategory={(cat) => { setSelectedCategory(cat); handleNavigate("produk-section"); }} />
          </section>

          {/* Section Best Sellers */}
          <section id="best-sellers" className="py-12 border-t border-rose-100/40">
            <h3 className="text-center font-serif text-2xl lg:text-3xl text-gray-900 tracking-wider mb-8">
              Best Sellers
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products
                .filter((p) => p.status === "Best Seller" || p.rating >= 4.8)
                .slice(0, 4)
                .map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    viewMode="grid"
                    onToggleFavorite={handleToggleFavorite}
                    onSelectProduct={setSelectedProduct}
                    onAddToCart={handleAddToCart}
                  />
                ))}
            </div>
          </section>

          {/* Section Filter & Pencarian */}
          <section id="produk-section" className="pt-12 border-t border-rose-100/40">
            <h3 className="text-center font-serif text-2xl lg:text-3xl text-gray-900 tracking-wider mb-8">
              Our Products
            </h3>
            <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between items-center bg-white p-4 rounded-2xl shadow-xs border border-rose-100/40">
              <div className="relative w-full md:w-1/3">
                <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                <input
                  type="text"
                  placeholder="Cari produk make up..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D38B95] text-sm transition"
                />
              </div>

              <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                <FiFilter className="text-[#D38B95] text-lg hidden md:block" />
                {["All", "Face", "Lips", "Eyes"].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs ${
                      selectedCategory === cat 
                        ? "bg-[#D38B95] text-white shadow-[#F5E6E8]" 
                        : "bg-gray-50 hover:bg-[#FAF6F3] text-gray-600 hover:text-[#D38B95]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* View Layout Toggle (Grid vs List) */}
              <div className="flex items-center gap-1 bg-gray-50 p-1 rounded-xl">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === "grid" ? "bg-white text-[#D38B95] shadow-xs" : "text-gray-400 hover:text-gray-600"
                  }`}
                  title="Grid View"
                >
                  <FiGrid className="text-lg" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === "list" ? "bg-white text-[#D38B95] shadow-xs" : "text-gray-400 hover:text-gray-600"
                  }`}
                  title="List View"
                >
                  <FiList className="text-lg" />
                </button>
              </div>
            </div>

            {/* List Produk */}
            {filteredProducts.length > 0 ? (
              <div className={viewMode === "grid" 
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                : "flex flex-col gap-4"
              }>
                {filteredProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    viewMode={viewMode}
                    onToggleFavorite={handleToggleFavorite}
                    onSelectProduct={setSelectedProduct}
                    onAddToCart={handleAddToCart}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-2xl border border-rose-100/40 shadow-xs flex flex-col items-center justify-center">
                <p className="text-gray-400 font-medium mb-4">Produk kecantikan tidak ditemukan.</p>
                <button
                  onClick={handleResetFilters}
                  className="px-4 py-2 bg-[#FAF6F3] hover:bg-rose-100/40 text-[#D38B95] text-xs font-bold rounded-xl flex items-center gap-1.5 transition"
                >
                  <FiRefreshCw /> Reset Pencarian
                </button>
              </div>
            )}
          </section>
        </main>

        {/* Modal Detail */}
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onChangeStatus={handleChangeStatus}
        />

        {/* Drawer Keranjang */}
        <CartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveFromCart}
          onOpenCheckout={() => {
            alert("Simulasi Checkout: Terima kasih telah berbelanja di Glamour Beauty Store! (Keranjang dikosongkan)");
            setCartItems([]);
            setIsCartOpen(false);
          }}
        />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}