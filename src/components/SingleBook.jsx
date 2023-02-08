import { Card, Col } from "react-bootstrap";
export const SingleBook = (props) => {
  return (
    <>
      <Col xs={12} md={3} key={props.bookProp.asin}>
        <Card className="ook-cover" id="my_card">
          <Card.Img variant="top" src={props.bookProp.img} />
          <Card.Body>
            <Card.Title>{props.bookProp.title}</Card.Title>
            <Card.Text>{props.bookProp.price}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};
