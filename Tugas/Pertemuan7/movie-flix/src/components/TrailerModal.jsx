import { useEffect, useState } from "react";
import { HiOutlineX, HiPlay, HiVolumeUp, HiVolumeOff } from "react-icons/hi";
import { FaRegCirclePause, FaRegCirclePlay } from "react-icons/fa6";

function TrailerModal({ movie, onClose }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 1;
      });
    }, 200);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/85 backdrop-blur-md">
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-navy border border-sage/30 rounded-3xl shadow-2xl z-10 animate-in fade-in zoom-in duration-300">

        <div className="flex items-center justify-between px-6 py-4 border-b border-sage/10 bg-navy/50">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-bronze animate-pulse"></span>
            <span className="text-sm font-semibold tracking-wider text-sage uppercase">Now Playing Trailer</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-sage hover:text-cream hover:bg-navy/80 rounded-xl transition-all cursor-pointer"
            title="Close Trailer"
          >
            <HiOutlineX className="w-5 h-5" />
          </button>
        </div>

        <div className="relative aspect-video bg-black flex flex-col items-center justify-center overflow-hidden group/screen">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 scale-105"
            style={{
              backgroundImage: `linear-gradient(to top, rgba(10, 41, 71, 0.95), rgba(10, 41, 71, 0.4)), url(${movie.posterUrl})`
            }}
          />

          {isPlaying ? (
            <div className="relative z-10 flex flex-col items-center text-center px-6">
              <div className="w-16 h-16 rounded-full border-4 border-bronze/30 border-t-bronze animate-spin mb-4"></div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-cream tracking-tight drop-shadow-lg mb-2">
                {movie.title}
              </h2>
              <p className="text-sage text-sm font-medium drop-shadow-md flex items-center gap-2">
                <span>{movie.genre}</span>
                <span>•</span>
                <span>{movie.duration}</span>
                <span>•</span>
                <span>Year {movie.year}</span>
              </p>
            </div>
          ) : (
            <button
              onClick={() => setIsPlaying(true)}
              className="relative z-10 w-20 h-20 rounded-full bg-bronze hover:bg-amber-800 flex items-center justify-center text-cream shadow-xl shadow-bronze/50 hover:scale-110 transition-all duration-300 cursor-pointer"
            >
              <HiPlay className="w-10 h-10 ml-1" />
            </button>
          )}

          <div className="absolute bottom-0 inset-x-0 p-4 bg-linear-to-t from-navy to-transparent flex flex-col gap-3">
            <div className="w-full h-1 bg-navy/60 rounded-full overflow-hidden cursor-pointer border border-sage/10">
              <div
                className="h-full bg-linear-to-r from-bronze to-amber-700 transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <div className="flex items-center justify-between text-cream text-xs sm:text-sm">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="pl-3 py-1.5 hover:text-cream transition-all cursor-pointer"

                >
                  {isPlaying ? <FaRegCirclePause className="inline w-5 h-5 mr-1" />
                    : <FaRegCirclePlay className="inline w-5 h-5 mr-1" />}
                </button>

                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="py-1.5 hover:text-cream transition-all cursor-pointer"
                >
                  {isMuted ? <HiVolumeOff className="w-5 h-5 text-sage" /> : <HiVolumeUp className="w-5 h-5 text-sage" />}
                </button>

                <span className="font-mono text-sage">
                  0:{(Math.floor(progress * 0.3) % 60).toString().padStart(2, "0")} / 0:30
                </span>
              </div>

              <div className="flex items-center gap-2 text-sage">
                <span>HD 1080p</span>
                <span className="px-1.5 py-0.5 rounded bg-bronze/20 text-bronze font-bold text-[10px]">TRAILER</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 bg-navy/50 flex flex-col md:flex-row gap-6 items-start">
          <img
            src={movie.posterUrl}
            alt={movie.title}
            className="w-24 sm:w-28 rounded-2xl border border-sage/35 shadow-lg object-cover aspect-2/3 shrink-0"
          />
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-bold px-2.5 py-1 bg-bronze/20 text-bronze rounded-full border border-bronze/30">
                {movie.genre}
              </span>
              <span className="text-xs font-bold px-2.5 py-1 bg-navy text-cream rounded-full border border-sage/35">
                Rating {movie.rating}
              </span>
            </div>
            <h3 className="text-xl font-bold text-cream mb-2">{movie.title}</h3>
            <p className="text-sage text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default TrailerModal;
