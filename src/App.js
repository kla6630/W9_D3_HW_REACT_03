import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav.jsx";
import Welcome from "./components/Welcome.jsx";
import SearchBar from "./components/SearchBar";
import BookSelector from "./components/BookSelector";
import MyFooter from "./components/MyFooter.jsx";

// import fantasy from "../data/books/fantasy.json";

function App() {
  return (
    <div className="App">
      <MyNav></MyNav>
      <Welcome></Welcome>
      <SearchBar></SearchBar>
      <h2>Scegli un genere!</h2>
      <div className="wrap">{<BookSelector />}</div>
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
