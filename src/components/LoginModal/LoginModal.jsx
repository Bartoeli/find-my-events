import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { setCurrentUser } from "../../actions/usersActions";

const LoginModal = ({ show, handleClose, users, setCurrentUser }) => {
  const dispatch = useDispatch();

  const handleLogIn = () => {
    const canLogIn = users?.find((user) => {
      return user.email === document.getElementById("loginEmail").value;
    });

    if (canLogIn) {
      dispatch({ type: "LOG_IN" });
      setCurrentUser(canLogIn);
      handleClose();
    } else {
      alert("User not found");
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Log In</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Label htmlFor="inputEmail">Log in with your e-mail</Form.Label>
        <Form.Control
          type="email"
          id="loginEmail"
          aria-describedby="emailHelpBlock"
        />
        <Form.Text id="emaildHelpBlock" muted>
          Insert valid e-mail address.
        </Form.Text>
        <div className="mt-3">
          <Button
            onClick={handleLogIn}
            style={{ backgroundColor: "#846075", color: "white", width: "50%" }}
          >
            Log in
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

LoginModal.propTypes = {
  setCurrentUser: PropTypes.object.isRequired,
};

export default connect(null, { setCurrentUser })(LoginModal);
