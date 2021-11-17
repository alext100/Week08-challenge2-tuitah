import { Container, Nav, Navbar, NavLink } from "react-bootstrap";
import Link from "next/link";

const Header = () => (
  <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
    <Container>
      <Navbar.Brand href="/tuits">Tiutah</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Link href="/" passHref>
            <NavLink>All Tuits</NavLink>
          </Link>
          <Link href="/createtuit" passHref>
            <NavLink>Create Tuit</NavLink>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
