import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, Spinner } from "react-bootstrap";
import { Calendar4Event } from "react-bootstrap-icons";
import { connect, useSelector } from "react-redux";
import { LoginModal } from "../LoginModal/LoginModal";
import PropTypes from "prop-types";
import { getUsers } from "../../actions/usersActions";

const NavBar = ({ user: { users, loading }, getUsers }) => {
  const [show, setShow] = useState(false);
  const isLogged = useSelector((state) => state.login.loggedIn);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getUsers();

    // eslint-disable-next-line
  }, []);

  if (loading || users === null) {
    return (
      <Spinner
        animation="grow"
        size="xl"
        style={{ backgroundColor: "#846275" }}
      />
    );
  }

  return (
    <>
      <Navbar
        data-bs-theme="light"
        sticky="top"
        style={{ backgroundColor: "#4A6C6F" }}
        collapseOnSelect
        expand="sm"
      >
        <Container>
          <Navbar.Brand href="/">
            <Calendar4Event size={28} class="mr-2" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Navbar.Brand href="/">FIND MY EVENTS</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Events</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link type="button" onClick={handleShow}>
                {isLogged ? "name" : "Log in"}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <LoginModal show={show} handleClose={handleClose} users={users} />
    </>
  );
};

NavBar.propTypes = {
  event: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.users,
});

export default connect(mapStateToProps, { getUsers })(NavBar);
