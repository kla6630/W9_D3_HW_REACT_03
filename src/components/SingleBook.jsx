import { Card, Col, Button } from "react-bootstrap";
export const SingleBook = ({ book }) => {
  return (
    <>
      <Col>
        <Card id="my_card">
          <Card.Img  variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>{book.price}</Card.Text>
            <Button variant="primary">BUY IT!</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};
