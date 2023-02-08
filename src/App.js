import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav.jsx";
import Welcome from "./components/Welcome.jsx";
import BookSelector from "./components/BookSelector";
import MyFooter from "./components/MyFooter.jsx";

function App() {
  return (
    <div className="App">
      <MyNav />
      <div class="container" id="my-container">
        <Welcome />
        <h2>Find Your Book</h2>
        {<BookSelector />}
      </div>
      <MyFooter />
    </div>
  );
}

export default App;
