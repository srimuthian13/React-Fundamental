import { HiOutlineFilm, HiSparkles } from 'react-icons/hi';

function Footer() {
  return (
    <footer className="mt-20 bg-navy border-t border-sage/20 py-12 text-sage text-sm">
      <div className="container mx-auto px-3 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">


          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-linear-to-tr from-bronze to-amber-700 flex items-center justify-center text-cream shadow-md">
                <HiOutlineFilm className="w-5 h-5" />
              </div>
              <span className="text-lg font-black tracking-wider text-cream flex items-center gap-1">
                MOVIE<span className="text-bronze">FLIX</span>
                <HiSparkles className="w-3.5 h-3.5 text-bronze" />
              </span>
            </div>
            <p className="text-sage text-xs leading-relaxed max-w-sm">
              MovieFlix adalah platform kurasi film terbaik yang dirancang untuk membantu pecinta film melacak film yang sedang tayang, mengatur daftar tontonan, dan mengelola film favorit.
            </p>
          </div>


          <div className="space-y-3">
            <h4 className="text-cream text-xs font-bold uppercase tracking-widest">Tautan Pintas</h4>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              <li><a href="#" className="hover:text-bronze transition-colors">Semua Film</a></li>
              <li><a href="#" className="hover:text-bronze transition-colors">Sedang Tayang</a></li>
              <li><a href="#" className="hover:text-bronze transition-colors">Favorit Saya</a></li>
              <li><a href="#" className="hover:text-bronze transition-colors">Watchlist</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-cream text-xs font-bold uppercase tracking-widest">Teknologi</h4>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-2.5 py-1 bg-navy border border-sage/35 text-sage text-[10px] font-bold rounded-lg">React 19</span>
              <span className="px-2.5 py-1 bg-navy border border-sage/35 text-sage text-[10px] font-bold rounded-lg">Tailwind CSS v4</span>
              <span className="px-2.5 py-1 bg-navy border border-sage/35 text-sage text-[10px] font-bold rounded-lg">Vite</span>
              <span className="px-2.5 py-1 bg-navy border border-sage/35 text-sage text-[10px] font-bold rounded-lg">Heroicons</span>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-sage/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs">
          <p>© {new Date().getFullYear()} MovieFlix App. Hak Cipta Dilindungi. Tugas Pertemuan 7</p>
          <p className="text-sage/80">Made by Sri Muthia</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;