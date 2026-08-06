import { HiOutlineSearch, HiOutlineX } from 'react-icons/hi';

function SearchBar({
  genres,
  selectedGenre,
  onGenreChange,
  searchTerm,
  onSearchChange,
  onReset
}) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 bg-navy border border-sage/20 rounded-3xl mb-8 backdrop-blur-md">

      <div className="relative w-full md:w-64 group">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Cari judul film..."
          className="w-full px-3 py-2.5 pl-9 pr-8 bg-navy/60 text-cream border border-sage/35 rounded-xl focus:outline-none focus:ring-1 focus:ring-bronze text-xs placeholder-sage/55 transition-all"
        />
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sage/75 group-hover:text-bronze transition-colors">
          <HiOutlineSearch className="w-4 h-4" />
        </span>
        {searchTerm && (
          <button
            onClick={() => onSearchChange("")}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-sage hover:text-cream cursor-pointer p-0.5"
            title="Clear Search"
          >
            <HiOutlineX className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {genres && genres.length > 0 && (
        <div className="flex flex-wrap items-center justify-start md:justify-end gap-2 flex-1 w-full md:w-auto">
          {genres.map((genre) => {
            const isSelected = selectedGenre === genre || (genre === "Semua Genre" && !selectedGenre);
            return (
              <button
                key={genre}
                onClick={() => onGenreChange(genre === "Semua Genre" ? "" : genre)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-300 cursor-pointer ${isSelected
                  ? 'bg-bronze text-cream shadow-md'
                  : 'bg-navy border border-sage/20 text-sage hover:text-cream hover:bg-navy/80'
                  }`}
              >
                {genre}
              </button>
            );
          })}
        </div>
      )}

      {selectedGenre && (
        <button
          onClick={onReset}
          className="px-3.5 py-2 bg-navy border border-sage/30 hover:border-bronze hover:text-cream text-sage rounded-xl transition-all text-xs cursor-pointer whitespace-nowrap"
        >
          Reset
        </button>
      )}

    </div>
  );
}

export default SearchBar;