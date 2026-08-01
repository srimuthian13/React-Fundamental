import Header from "./components/Header";
import MovieList from "./components/MovieList";

function App() {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-md bg-[#120a07]/85 border-b border-[#2d1b14]/80 shadow-2xl">
      <Header />
      <MovieList />
    </div>
  );
}

export default App;