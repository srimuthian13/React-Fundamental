import { HiPlay, HiBookmark, HiOutlineBookmark, HiStar } from 'react-icons/hi';

function HeroBanner({ movie, onPlayMovie, onToggleWatchlist }) {
  if (!movie) return null;

  return (
    <div className="relative w-full h-95 sm:h-120 rounded-3xl overflow-hidden mb-10 border border-sage/20 bg-navy shadow-2xl">

      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 scale-100 hover:scale-105"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(10, 41, 71, 0.95) 30%, rgba(10, 41, 71, 0.6) 60%, rgba(10, 41, 71, 0.1) 100%), url(${movie.posterUrl})`
        }}
      />

      <div className="absolute inset-0 bg-linear-to-t from-navy via-navy/40 to-transparent md:hidden"></div>


      <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-12 md:max-w-2xl z-10">
        <div className="space-y-4">

          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-bronze text-cream text-[10px] sm:text-xs font-black tracking-widest uppercase rounded-full border border-bronze/30">
              Pilihan Utama
            </span>
            <div className="flex items-center gap-1 bg-navy/80 px-2.5 py-1 rounded-xl border border-sage/20 backdrop-blur-md">
              <HiStar className="w-4 h-4 text-amber-500" />
              <span className="text-cream font-bold text-xs sm:text-sm">{movie.rating.toFixed(1)}</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-cream tracking-tight leading-none drop-shadow-md">
            {movie.title}
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-sage">
            <span>{movie.genre}</span>
            <span>•</span>
            <span>{movie.year}</span>
            <span>•</span>
            <span>{movie.duration}</span>
          </div>

          <p className="text-sage/80 text-xs sm:text-sm leading-relaxed line-clamp-3 max-w-lg">
            Petualangan epik di dunia masa depan yang menakjubkan. Saksikan kelanjutan kisah perjuangan dalam mempertahankan takdir, kehormatan, dan cinta di tengah pasir gurun yang tak bertepi.
          </p>

          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <button
              onClick={() => onPlayMovie(movie)}
              className="flex items-center gap-2 px-6 py-3 bg-bronze hover:bg-amber-800 text-cream font-bold rounded-2xl transition-all shadow-lg shadow-bronze/20 active:scale-98 cursor-pointer text-sm"
            >
              <HiPlay className="w-5 h-5" />
              Putar Trailer
            </button>

            {movie.showing && (
              <button
                onClick={() => onToggleWatchlist(movie.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl border text-sm font-semibold transition-all cursor-pointer ${movie.watchlist
                  ? 'bg-bronze/20 border-bronze text-bronze'
                  : 'bg-navy/80 border-sage/40 text-sage hover:text-cream'
                  }`}
              >
                {movie.watchlist ? <HiBookmark className="w-5 h-5" /> : <HiOutlineBookmark className="w-5 h-5" />}
                <span>Watchlist</span>
              </button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default HeroBanner;