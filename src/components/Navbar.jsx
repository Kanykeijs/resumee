import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function MyNavbar() {
  return (
    <>
      <Navbar bg="secondary" variant="light">
        <Container>
          <Nav className="me-auto">
            <Link to="/">
              <Navbar.Brand href="#home">
                <img
                  src="https://myresume.ru/wp-content/uploads/2020/07/Logo-min.png"
                  alt=""
                  width="200px"
                />
              </Navbar.Brand>
            </Link>
            <Link
              to="/intro"
              style={{
                color: "white",
                marginRight: "100px",
                marginLeft: "100px",
              }}
            >
              Intro
            </Link>

            <Link
              to="/expertise"
              style={{ color: "white", marginRight: "100px" }}
            >
              Expertise
            </Link>

            <Link to="/skills" style={{ color: "white" }}>
              Skills
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
