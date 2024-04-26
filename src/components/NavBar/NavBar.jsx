import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, Spinner } from "react-bootstrap";
import {
  BoxArrowRight,
  Calendar4Event,
  Person,
  PlusSquare,
} from "react-bootstrap-icons";
import { connect, useSelector } from "react-redux";
import LoginModal from "../LoginModal/LoginModal";
import PropTypes from "prop-types";
import { getUsers } from "../../actions/usersActions";
import AddEventModal from "../AddEventModal/AddEventModal";
import { getLocations } from "../../actions/locationActions";
import { getEventTypes } from "../../actions/eventTypeActions";
import LogoutModal from "../LogoutModal/LogoutModal";

const NavBar = ({
  user: { users, loading },
  getUsers,
  location: { locations, loading: locationLoading },
  getLocations,
  eventType: { eventTypes, loading: eventTypeLoading },
  getEventTypes,
}) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const [showAddEvent, setShowAddEvent] = useState(false);
  const isLogged = useSelector((state) => state.login.loggedIn);
  const currentUser = useSelector((state) => state.users.currentUser) ?? {};

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const showAddEventModal = () => setShowAddEvent(true);
  const closeAddEventModal = () => setShowAddEvent(false);

  const handleShowLogout = () => setShowLogout(true);
  const handleCloseLogout = () => setShowLogout(false);

  useEffect(() => {
    getUsers();
    getLocations();
    getEventTypes();

    // eslint-disable-next-line
  }, []);

  if (
    loading ||
    users === null ||
    locationLoading ||
    eventTypeLoading ||
    locations === null ||
    eventTypes === null
  ) {
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
          <Navbar.Brand
            href="/"
            className="me-1 h-100 d-flex align-items-center"
          >
            <Calendar4Event size={24} class="mr-2" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Navbar.Brand href="/">FIND MY EVENTS</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Events</Nav.Link>
            </Nav>
            <Nav className="align-items-center">
              {isLogged && (
                <>
                  <Nav.Link
                    type="button"
                    onClick={showAddEventModal}
                    className="me-1 h-100 d-flex align-items-center"
                  >
                    <PlusSquare className="me-1" size={20} />
                    Add event
                  </Nav.Link>
                  <div className="me-1 h-100 d-flex align-items-center">
                    <Person size={20} />
                  </div>

                  <Navbar.Text>{currentUser?.name}</Navbar.Text>
                </>
              )}
              <Nav.Link
                type="button"
                onClick={isLogged ? handleShowLogout : handleShowLogin}
                className="me-1 h-100 d-flex align-items-center"
              >
                {isLogged ? "Log out" : "Log in"}
                <BoxArrowRight size={20} className="ms-1" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <LoginModal
        show={showLogin}
        handleClose={handleCloseLogin}
        users={users}
      />
      <LogoutModal show={showLogout} handleClose={handleCloseLogout} />
      <AddEventModal
        show={showAddEvent}
        handleClose={closeAddEventModal}
        locations={locations}
        eventTypes={eventTypes}
      />
    </>
  );
};

NavBar.propTypes = {
  event: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  eventType: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.users,
  location: state.locations,
  eventType: state.eventTypes,
});

export default connect(mapStateToProps, {
  getUsers,
  getLocations,
  getEventTypes,
})(NavBar);
