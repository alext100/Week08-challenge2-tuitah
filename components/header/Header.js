import { Container, Nav, Navbar, NavLink } from "react-bootstrap";
import Link from "next/link";

const Header = () => (
  <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
    <Container>
      <Link href="/" passHref>
        <Navbar.Brand>Tiutah</Navbar.Brand>
      </Link>
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
