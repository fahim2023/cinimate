import "./App.css";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MovieList } from "./pages/MovieList";
function App() {
  return (
    <div className="App">
      <Header />
      <MovieList />;
      <Footer />
    </div>
  );
}
export default App;
