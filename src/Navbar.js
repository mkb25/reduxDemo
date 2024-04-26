import Nav from "react-bootstrap/Nav";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Cart from "./Cart";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { FaShoppingCart } from "react-icons/fa";
import Catalog from './Catalog';
import Product from "./Product";
function Navbar1() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Demo</Navbar.Brand>
          <Nav className="justify-content-end" href="/cart">
            <Nav.Link href="/cart"><FaShoppingCart size={30} color="White" /></Nav.Link>
          
          </Nav>
        </Container>
      </Navbar>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Catalog/>}></Route>
        <Route path="product/:detail" element={<Product/>}></Route>
        <Route path="cart" element={<Cart/>}></Route>
        <Route path="*" element={<h1>Not Found</h1>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default Navbar1;
