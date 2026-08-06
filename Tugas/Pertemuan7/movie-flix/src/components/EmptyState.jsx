import { HiOutlineSearch, HiOutlineRefresh } from "react-icons/hi";

function EmptyState({ onReset }) {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 sm:p-12 my-6 bg-navy border border-sage/30 rounded-3xl backdrop-blur-md">
      <div className="w-16 h-16 rounded-full bg-navy/80 flex items-center justify-center border border-sage/20 mb-4 animate-bounce">
        <HiOutlineSearch className="w-8 h-8 text-sage" />
      </div>
      <h3 className="text-xl font-bold text-cream mb-2">Film Tidak Ditemukan</h3>
      <p className="text-sage text-sm max-w-md mb-6 leading-relaxed">
        Maaf, kami tidak dapat menemukan film yang cocok dengan kata kunci pencarian atau filter genre Anda. Silakan coba pencarian lain atau setel ulang filter.
      </p>
      <button
        onClick={onReset}
        className="flex items-center gap-2 px-5 py-2.5 bg-bronze hover:bg-amber-800 text-cream text-sm font-semibold rounded-xl border border-sage/20 transition-all shadow-lg active:scale-95 cursor-pointer"
      >
        <HiOutlineRefresh className="w-4 h-4" />
        Atur Ulang Pencarian
      </button>
    </div>
  );
}

export default EmptyState;
