import { LiaLeafSolid } from "react-icons/lia";
import { GiRabbit } from "react-icons/gi";
import { IoWaterOutline } from "react-icons/io5";
import { BsPersonCheck } from "react-icons/bs";
import all from "../assets/makeup.jpg";

export default function Dashboard({ onSelectCategory }) {
  const categories = [
    {
      name: "All",
      label: "ALL PRODUCTS",
      image: all
    },
    {
      name: "Face",
      label: "FACE MAKEUP",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&auto=format&fit=crop&q=80"
    },
    {
      name: "Lips",
      label: "LIP PRODUCTS",
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&auto=format&fit=crop&q=80"
    },
    {
      name: "Eyes",
      label: "EYE COSMETICS",
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&auto=format&fit=crop&q=80"
    }
  ];

  const features = [
    { title: "FREE SHIPPING", desc: "On orders over $50", icon: "🚚" },
    { title: "EASY RETURNS", desc: "30-day return policy", icon: "🔄" },
    { title: "SECURE PAYMENT", desc: "100% secure checkout", icon: "🛡️" },
    { title: "CUSTOMER SUPPORT", desc: "We're here to help", icon: "📞" }
  ];

  return (
    <div>
      <div
        className="relative min-h-105 sm:min-h-120 lg:min-h-130 rounded-2xl sm:rounded-3xl overflow-hidden flex items-center p-6 sm:p-10 lg:p-16 bg-cover bg-center shadow-sm"
      
      style={{ backgroundImage: `url(${all})` }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-transparent"></div>

        <div className="relative z-10 max-w-xl text-white">
          <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.3em] uppercase bg-white/20 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-full text-rose-100 inline-block mb-3 sm:mb-4">
            NEW ARRIVAL
          </span>

          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal leading-tight mb-3 sm:mb-4 drop-shadow-sm">
            Glow Naturally. <br />
            <span className="italic">Shine Confidently.</span>
          </h2>

          <p className="text-gray-200 text-xs sm:text-sm font-light leading-relaxed mb-6 sm:mb-8 max-w-md">
            Skincare and beauty essentials that bring out your natural radiance with organic & tested formula.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-6 sm:mb-8">
            <button
              onClick={() => onSelectCategory("All")}
              className="w-full sm:w-auto bg-[#D38B95] hover:bg-[#C27A84] text-white text-xs font-semibold tracking-wider uppercase px-8 py-3 rounded-full transition-all shadow-md cursor-pointer"
            >
              SHOP NOW
            </button>
          </div>

          {/* Badges Info */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-white/20">
            <div className="flex flex-col items-start gap-1">
              <LiaLeafSolid className="text-lg sm:text-xl text-rose-200" />
              <span className="text-[9px] sm:text-[10px] font-medium tracking-wide text-gray-200">Clean Ingredients</span>
            </div>
            <div className="flex flex-col items-start gap-1">
              <GiRabbit className="text-lg sm:text-xl text-rose-200" />
              <span className="text-[9px] sm:text-[10px] font-medium tracking-wide text-gray-200">Cruelty Free</span>
            </div>
            <div className="flex flex-col items-start gap-1">
              <IoWaterOutline className="text-lg sm:text-xl text-rose-200" />
              <span className="text-[9px] sm:text-[10px] font-medium tracking-wide text-gray-200">Dermatologist Tested</span>
            </div>
            <div className="flex flex-col items-start gap-1">
              <BsPersonCheck className="text-lg sm:text-xl text-rose-200" />
              <span className="text-[9px] sm:text-[10px] font-medium tracking-wide text-gray-200">For All Skin Types</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features Ribbon */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-10 my-4 sm:my-6 border-b border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
        {features.map((feat, idx) => (
          <div key={idx} className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-center sm:text-left">
            <span className="text-xl sm:text-2xl">{feat.icon}</span>
            <div>
              <h4 className="text-[10px] sm:text-[11px] font-bold tracking-wider text-gray-900 uppercase">{feat.title}</h4>
              <p className="text-[9px] sm:text-[10px] text-gray-500 font-medium">{feat.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Shop by Category Section */}
      <div id="categories" className="py-6 sm:py-8">
        <h3 className="text-center font-serif text-xl sm:text-2xl lg:text-3xl text-gray-900 tracking-wider mb-6 sm:mb-8">
          Shop by Category
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              onClick={() => onSelectCategory && onSelectCategory(cat.name)}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-full aspect-square rounded-xl sm:rounded-2xl overflow-hidden mb-2.5 sm:mb-3 bg-[#FAF6F3] border border-rose-100/40">
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h4 className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-gray-800 uppercase mb-0.5 sm:mb-1 text-center">
                {cat.label}
              </h4>
              <span className="text-[8px] sm:text-[9px] font-bold tracking-widest text-[#D38B95] group-hover:text-[#C27A84] transition-colors uppercase">
                SHOP NOW →
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}