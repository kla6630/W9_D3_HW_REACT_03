import { Component } from "react";
import { Row } from "react-bootstrap";
import fantasy from "../data/books/scifi.json";
// import history from "../data/books/history.json"
// import horror from "../data/books/horror.json"
// import romance from "../data/books/romance.json"
// import scifi from "../data/books/fantasy.json"
import { SingleBook } from "./SingleBook";

class BookSelector extends Component {
  state = {
    query: "",
  };
  filterBookList(ev) {
    console.log(ev.target.value);
    this.setState({
      query: ev.target.value,
    });
  }
  render() {
    return (
      <>
        <input type="text" onChange={(event) => this.filterBookList(event)} />

        <Row>
          {fantasy
            .filter((book) => {
              return book.title.toLowerCase().includes(this.state.query.toLowerCase());
            })
            .map((book) => {
              return <SingleBook bookProp={book} />;
            })}
        </Row>
      </>
    );
  }
}

export default BookSelector;
