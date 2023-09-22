// import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Product from "./components/Product";
import "./App.css";
// import { Button, Card } from "react-bootstrap";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Dashboard from "./components/Dashboard";
import Cart from "./components/Cart";

function App() {
  // setting up the routes
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    )
  );
  // const [products, getProducts] = useState([]); //state storing the data
  // // calling api
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((data) => data.json())
  //     .then((result) => getProducts(result));
  // });

  // // cards for the products
  // const cards = products.map((product) => (
  //   <div
  //     className="col-md-3 mb-3 d-flex justify-content-center flex-wrap"
  //     key={product.id}
  //   >
  //     <Card style={{ width: "18rem" }} className="text-center h-100">
  //       <div className="text-center">
  //         <Card.Img
  //           variant="top"
  //           src={product.image}
  //           style={{ width: "100px", height: "130px" }}
  //         />
  //       </div>
  //       <Card.Body>
  //         <Card.Title>{product.title}</Card.Title>
  //         <Card.Text>${product.price}</Card.Text>
  //       </Card.Body>
  //       <Card.Footer style={{ backgroundColor: "white" }}>
  //         <Button variant="primary">Add To Cart</Button>
  //       </Card.Footer>
  //     </Card>
  //   </div>
  // ));

  return (
    <div className="App text-center ">
      {/* <Product />
      <div className="row">{cards}</div> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
