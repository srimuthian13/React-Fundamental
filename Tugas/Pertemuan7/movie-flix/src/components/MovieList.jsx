import MovieCard from "./MovieCard";

function MovieList({ movies, onToggleFavorite, onToggleWatchlist, onPlayMovie }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onToggleFavorite={onToggleFavorite}
          onToggleWatchlist={onToggleWatchlist}
          onPlayMovie={onPlayMovie}
        />
      ))}
    </div>
  );
}

export default MovieList;