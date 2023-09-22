import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";

const Product = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  // calling api
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  if (status === "Loading") {
    return <p>Loading .....</p>;
  }
  if (status === "error") {
    return <p>OOpss!! something went wrong while fetching the data!!</p>;
  }

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
