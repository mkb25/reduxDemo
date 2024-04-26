import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
//  import store from "./Redux/store";
export default function Catalog() {
  const navigate = useNavigate();
  const products = useSelector((state) => state.prodReducer.products);
  console.log(products);
  const handleClick = (title) => {
    console.log(title);
  
    navigate(`/product/${title}`);
  }
  return (
    <>
     <div>
      <Row xs={1} md={3} className="g-4">
        {
          products.map((card, index) =>(
            <Col key={index}>
              <Card>
                <Card.Img variant="top" src={require(`../src/${card.img}`)} />
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.description}</Card.Text>
                <Card.Link onClick={()=>handleClick(card.title)}>View</Card.Link>
              </Card>
            </Col>
          ))
           
        }
        </Row>
        </div>
    </>
  );
}
