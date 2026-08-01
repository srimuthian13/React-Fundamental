function MovieCard({ title, genre, year, rating, isShowing }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition">
      <h2 className="font-serif text-2xl font-normal  text-[#c89269] transition-colors duration-300">
        {title}
      </h2>

      <p>
        <span className="font-semibold">Genre:</span> {genre}
      </p>

      <p>
        <span className="font-semibold">Tahun:</span> {year}
      </p>

      <p>
        <span className="font-semibold">Rating:</span> ⭐ {rating}
      </p>

      <div className="mt-4">
        {isShowing ? (
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
            🎬 Sedang Tayang
          </span>
        ) : (
          <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
            📦 Tidak Tayang
          </span>
        )}
      </div>
    </div>
  );
}

export default MovieCard;