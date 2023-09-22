import React from "react";
import { Button, Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  // removing products from the cart
  const removeFromCart = (id) => {
    dispatch(remove(id));
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
          <Button variant="danger" onClick={() => removeFromCart(product.id)}>
            Remove From Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  return (
    <div>
      <h1>Cart</h1>
      <div className="row">{cards}</div>
    </div>
  );
};

export default Cart;
