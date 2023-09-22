import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

const Product = () => {
  const dispatch = useDispatch();
  const [products, getProducts] = useState([]); //state storing the data
  // calling api
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => getProducts(result));
  });

  // passing data to cart
  const addToCart = (product) => {
    dispatch(add(product));
  };

  // cards for the products
  const cards = products.map((product) => (
    <div
      className="col-sm-6 col-md-4 col-lg-3 mb-3 d-flex justify-content-center flex-wrap"
      key={product.id}
    >
      <Card style={{ width: "18rem" }} className="text-center h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "130px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>${product.price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ backgroundColor: "white" }}>
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add To Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <h1 className="my-4">Product Component</h1>
      <div className="row">{cards}</div>
    </>
  );
};

export default Product;
