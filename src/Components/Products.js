import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Products = ({products}) => {
  return (
    <div className="container-fluid">
      <div className='row'>
        {products.map((el, index) => (
          <Card style={{ width: "18rem" }} key={index} className='col-md-4 mt-3' >
            <Card.Img variant="top" src={el.imgSrc} style={{width:'300px',height:'300px'}} />
            <Card.Body>
              <Card.Title>{el.name}</Card.Title>
              <Card.Text>{el.price}</Card.Text>
              <Link to={`products/${el.name}`}><Button variant="primary">description</Button></Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;
