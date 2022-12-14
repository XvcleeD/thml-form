import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export let NavbarEl = () => {
  return (
    <>
      <Navbar bg="secondary" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Админ</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse>
            <Nav
              className="text-light navbar-nav-scroll me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
            >
              <Nav.Link href="#action1">Хэрэглэгч</Nav.Link>
              <Nav.Link href="#action2">Ангилал</Nav.Link>
              <NavDropdown title="Мэдээ">
                <NavDropdown.Item href="#action3">Мэдээ</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Сэтгэгдэл</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Шинэ мэдээ</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#">Сэдэв</Nav.Link>
            </Nav>
            <Button variant="light">Гарах</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
