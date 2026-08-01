import MovieCard from "./MovieCard";
const movies = [
  {
    id: 1,
    title: "Avengers: Endgame",
    genre: "Action",
    year: 2019,
    rating: 8.4,
    isShowing: true,
  },
  {
    id: 2,
    title: "Interstellar",
    genre: "Sci-Fi",
    year: 2014,
    rating: 8.7,
    isShowing: false,
  },
  {
    id: 3,
    title: "Spider-Man: No Way Home",
    genre: "Action",
    year: 2021,
    rating: 8.2,
    isShowing: true,
  },
  {
    id: 4,
    title: "Parasite",
    genre: "Thriller",
    year: 2019,
    rating: 8.5,
    isShowing: false,
  },
  {
    id: 5,
    title: "Inside Out 2",
    genre: "Animation",
    year: 2024,
    rating: 8.1,
    isShowing: true,
  },
  {
    id: 6,
    title: "The Batman",
    genre: "Action",
    year: 2022,
    rating: 7.9,
    isShowing: true,
  },
  {
    id: 7,
    title: "The Matrix Resurrections",
    genre: "Sci-Fi",
    year: 2021,
    rating: 6.3,
    isShowing: false,
  }
];

function MovieList() {

  return (
    <section className="max-w-6xl mx-auto p-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            genre={movie.genre}
            year={movie.year}
            rating={movie.rating}
            isShowing={movie.isShowing}
          />
        ))}
      </div>
    </section>
  );
}

export default MovieList;