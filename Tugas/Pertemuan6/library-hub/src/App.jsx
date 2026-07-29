import Header from "./components/Header";
import BookList from "./components/BookList";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBF8F3]">
      <Header />
     
      <Hero />
      <BookList />
      <Footer />
    </div>
  );
}

export default App;