import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";
import HeroBanner from "./components/HeroBanner";
import TrailerModal from "./components/TrailerModal";
import EmptyState from "./components/EmptyState";
import { initialMovies } from "./data/movies";

export default function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [searchTerm, setSearchTerm] = useState("");
  const [genreFilter, setGenreFilter] = useState("");
  const [activeTab, setActiveTab] = useState("Home");
  const [activeTrailerMovie, setActiveTrailerMovie] = useState(null);
  const [watchHistory, setWatchHistory] = useState([]);

  const handleToggleFavorite = (id) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id ? { ...movie, favorite: !movie.favorite } : movie
      )
    );
  };

  const handleToggleWatchlist = (id) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) => {
        if (movie.id === id) {
          if (!movie.showing) {
            return movie;
          }
          return { ...movie, watchlist: !movie.watchlist };
        }
        return movie;
      })
    );
  };

  const handlePlayMovie = (movie) => {
    if (!movie.showing) return;
    setActiveTrailerMovie(movie);
    setWatchHistory((prev) => [
      movie.id,
      ...prev.filter((id) => id !== movie.id)
    ]);
  };

  const handleResetFilters = () => {
    setSearchTerm("");
    setGenreFilter("");
    setActiveTab("Home");
  };

  const genres = ["Semua Genre", ...new Set(movies.map((m) => m.genre))];

  const filteredMovies = movies.filter((movie) => {
    if (activeTab === "Sedang Tayang" && !movie.showing) return false;
    if (activeTab === "Favorit Saya" && !movie.favorite) return false;
    if (activeTab === "Watchlist" && !movie.watchlist) return false;
    if (activeTab === "Riwayat" && !watchHistory.includes(movie.id)) return false;

    if (genreFilter && genreFilter !== "Semua Genre" && movie.genre !== genreFilter) return false;

    return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
  }).sort((a, b) => {
    if (activeTab === "Riwayat") {
      return watchHistory.indexOf(a.id) - watchHistory.indexOf(b.id);
    }
    return 0;
  });

  const watchlistCount = movies.filter((m) => m.watchlist).length;

  const featuredMovie = movies.find((m) => m.title.includes("Avatar")) || movies[0];

  const totalMovies = movies.length;
  const showingMoviesCount = movies.filter((m) => m.showing).length;
  const favoriteMoviesCount = movies.filter((m) => m.favorite).length;
  const watchHistoryCount = watchHistory.length;

  return (
    <div className="min-h-screen bg-navy text-cream flex flex-col justify-between font-sans antialiased selection:bg-bronze selection:text-cream">
      <div>
        <Header
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          watchlistCount={watchlistCount}
          historyCount={watchHistory.length}
        />

        <main className="container mx-auto px-2 py-3 max-w-7xl">

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-3 bg-navy rounded-3xl sm:p-6 backdrop-blur-md">
            <div className="flex flex-col items-center justify-center p-3 sm:p-4 bg-navy/60 rounded-2xl border border-sage/10 hover:border-amber-500/45 hover:shadow-lg hover:shadow-bronze/5 transition-all duration-300">
              <span className="text-xl sm:text-3xl font-black text-bronze">{totalMovies}</span>
              <span className="text-[10px] sm:text-xs font-semibold text-sage mt-1">Total Film</span>
            </div>
            <div className="flex flex-col items-center justify-center p-3 sm:p-4 bg-navy/60 rounded-2xl border border-sage/10 hover:border-amber-500/40 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300">
              <span className="text-xl sm:text-3xl font-black text-bronze">{showingMoviesCount}</span>
              <span className="text-[10px] sm:text-xs font-semibold text-sage mt-1">Sedang Tayang</span>
            </div>
            <div className="flex flex-col items-center justify-center p-3 sm:p-4 bg-navy/60 rounded-2xl border border-sage/10 hover:border-amber-500/40 hover:shadow-lg hover:shadow-bronze/5 transition-all duration-300">
              <span className="text-xl sm:text-3xl font-black text-bronze">{favoriteMoviesCount}</span>
              <span className="text-[10px] sm:text-xs font-semibold text-sage mt-1">Favorite</span>
            </div>
            <div className="flex flex-col items-center justify-center p-3 sm:p-4 bg-navy/60 rounded-2xl border border-sage/10 hover:border-amber-500/40 hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300">
              <span className="text-xl sm:text-3xl font-black text-bronze">{watchHistoryCount}</span>
              <span className="text-[10px] sm:text-xs font-semibold text-sage mt-1">Riwayat Tonton</span>
            </div>
          </div>

          {activeTab === "Home" && (
            <HeroBanner
              movie={featuredMovie}
              onPlayMovie={handlePlayMovie}
              onToggleWatchlist={handleToggleWatchlist}
            />
          )}

          <SearchBar
            genres={genres}
            selectedGenre={genreFilter}
            onGenreChange={setGenreFilter}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            onReset={handleResetFilters}
          />


          {filteredMovies.length > 0 ? (
            <MovieList
              movies={filteredMovies}
              onToggleFavorite={handleToggleFavorite}
              onToggleWatchlist={handleToggleWatchlist}
              onPlayMovie={handlePlayMovie}
            />
          ) : (
            <EmptyState onReset={handleResetFilters} />
          )}
        </main>
      </div>

      <Footer />

      {activeTrailerMovie && (
        <TrailerModal
          movie={activeTrailerMovie}
          onClose={() => setActiveTrailerMovie(null)}
        />
      )}
    </div>
  );
}