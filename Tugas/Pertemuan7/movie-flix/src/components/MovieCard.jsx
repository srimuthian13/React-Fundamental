import {
  HiStar,
  HiOutlineClock,
  HiOutlineCollection,
  HiHeart,
  HiOutlineHeart,
  HiPlay,
  HiOutlineBookmark,
  HiBookmark
} from 'react-icons/hi';

function MovieCard({ movie, onToggleFavorite, onToggleWatchlist, onPlayMovie }) {

  return (
    <div className="group bg-navy border border-sage/30 rounded-3xl p-4 shadow-xl hover:shadow-bronze/10 hover:border-bronze/60 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between backdrop-blur-md">

      <div>
        <div className="relative aspect-16/10 sm:aspect-16/11 rounded-2xl overflow-hidden mb-4 bg-navy border border-sage/10">
          <img
            src={movie.posterUrl}
            alt={movie.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-linear-to-t from-navy/90 via-transparent to-transparent"></div>

          <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
            <span
              className={`flex items-center gap-1.5 text-[10px] sm:text-xs font-extrabold px-2.5 py-1 rounded-full border backdrop-blur-md ${movie.showing
                ? 'bg-navy/80 text-sage border-sage/40'
                : 'bg-navy/80 text-sage/60 border-sage/20'
                }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${movie.showing ? 'bg-emerald-500 animate-pulse' : 'bg-sage/40'}`}></span>
              {movie.showing ? 'Sedang Tayang' : 'Segera Hadir'}
            </span>

            {movie.favorite && (
              <span className="flex items-center gap-1 text-[10px] sm:text-xs font-extrabold px-2.5 py-1 rounded-full border bg-navy/80 text-bronze border-bronze/45 backdrop-blur-md">
                <HiHeart className="w-3.5 h-3.5 text-bronze animate-pulse" />
                <span>Favorit</span>
              </span>
            )}
          </div>

          {movie.showing && (
            <div
              onClick={() => onPlayMovie(movie)}
              className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-bronze flex items-center justify-center text-cream shadow-lg shadow-bronze/50 transform scale-75 group-hover:scale-100 transition-all duration-350 hover:bg-amber-800">
                <HiPlay className="w-6 h-6 ml-0.5" />
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-between items-start gap-3 mb-2.5">
          <h3 className="text-base sm:text-lg font-bold text-cream leading-tight group-hover:text-bronze transition-colors line-clamp-2">
            {movie.title}
          </h3>
          <span className="shrink-0 text-[10px] sm:text-xs font-bold px-2 py-0.5 bg-navy text-bronze rounded-lg border border-sage/20">
            {movie.year}
          </span>
        </div>

        <div className="flex items-center gap-x-3 gap-y-1.5 text-xs text-sage mb-4 border-y border-sage/10 py-2">
          <div className="flex items-center gap-1">
            <HiOutlineCollection className="w-4 h-4 text-sage/70" />
            <span>{movie.genre}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <HiOutlineClock className="w-4 h-4 text-sage/70" />
            <span>{movie.duration}</span>
          </div>
        </div>
      </div>

      <div className="pt-3 border-t border-sage/10 mt-auto">
        <div className="flex items-center justify-between gap-4 mb-3.5">
          <div className="flex items-center gap-1 bg-navy px-2.5 py-1 rounded-xl border border-sage/20">
            <HiStar className="w-4 h-4 text-amber-500" />
            <span className="text-cream font-black text-sm">{movie.rating.toFixed(1)}</span>
            <span className="text-sage/60 text-[10px] mt-0.5">/10</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleWatchlist(movie.id)}
              disabled={!movie.showing}
              title={movie.showing ? (movie.watchlist ? "Hapus dari Watchlist" : "Tambah ke Watchlist") : "Belum Tayang"}
              className={`p-2 rounded-xl border transition-all cursor-pointer ${movie.showing
                ? movie.watchlist
                  ? 'bg-bronze/20 border-bronze text-bronze hover:bg-bronze/35'
                  : 'bg-navy border-sage/40 text-sage hover:text-cream hover:bg-navy/80'
                : 'bg-navy/40 border-sage/10 text-sage/30 cursor-not-allowed'
                }`}
            >
              {movie.watchlist && movie.showing ? <HiBookmark className="w-4 h-4" /> : <HiOutlineBookmark className="w-4 h-4" />}
            </button>

            <button
              onClick={() => onToggleFavorite(movie.id)}
              title={movie.favorite ? "Hapus dari Favorit" : "Tambah ke Favorit"}
              className={`p-2 rounded-xl border transition-all active:scale-95 cursor-pointer ${movie.favorite
                ? 'bg-bronze hover:bg-amber-800 border-bronze text-cream shadow-lg shadow-bronze/30'
                : 'bg-navy border-sage/40 text-sage hover:text-cream'
                }`}
            >
              {movie.favorite ? <HiHeart className="w-4 h-4" /> : <HiOutlineHeart className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <button
          onClick={() => movie.showing && onPlayMovie(movie)}
          disabled={!movie.showing}
          className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${movie.showing
            ? 'bg-bronze hover:bg-amber-800 text-cream active:scale-[0.98] shadow-md cursor-pointer'
            : 'bg-navy/40 border border-sage/10 text-sage/30 cursor-not-allowed'
            }`}
        >
          <HiPlay className="w-5 h-5" />
          {movie.showing ? 'Tonton Sekarang' : 'Belum Tayang'}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;