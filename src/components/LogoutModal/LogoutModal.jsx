import React from "react";
import { Button, Modal } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { setCurrentUser } from "../../actions/usersActions";

const LogoutModal = ({ show, handleClose, users, setCurrentUser }) => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch({ type: "LOG_OUT" });
    setCurrentUser({});
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Log Out</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="h2">Do you want to log out?</p>
        <div className="mt-3">
          <Button
            onClick={handleLogOut}
            style={{ backgroundColor: "#846075", color: "white", width: "50%" }}
          >
            Log out
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

LogoutModal.propTypes = {
  setCurrentUser: PropTypes.object.isRequired,
};

export default connect(null, { setCurrentUser })(LogoutModal);
