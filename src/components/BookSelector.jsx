import { Component } from "react";
import { Row } from "react-bootstrap";
import fantasy from "../data/books/fantasy.json";
import history from "../data/books/history.json";
import horror from "../data/books/horror.json";
import romance from "../data/books/romance.json";
import scifi from "../data/books/scifi.json";
import { SingleBook } from "./SingleBook";

class BookSelector extends Component {
  state = {
    categories: ["fantasy", "history", "horror", "romance", "scifi"],
    books: [],
  };
  handleClick = (event) => {
    console.log(event.target);
    if (event.target.id === "fantasy") {
      this.setState({
        books: fantasy,
      });
    }
    if (event.target.id === "history") {
      this.setState({
        books: history,
      });
    }
    if (event.target.id === "horror") {
      this.setState({
        books: horror,
      });
    }
    if (event.target.id === "romance") {
      this.setState({
        books: romance,
      });
    }
    if (event.target.id === "scifi") {
      this.setState({
        books: scifi,
      });
    }
  };
  render() {
    return (
      <>
        {this.state.categories.map((cat, i) => {
          return (
            <div onClick={this.handleClick} id={cat} key={`tab-${i}`}>
              {cat}
            </div>
          );
        })}
        <Row>
          {this.state.books.map((book) => {
            return <SingleBook book={book} />;
          })}
        </Row>
      </>
    );
  }
}

export default BookSelector;



