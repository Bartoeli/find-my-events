import React from "react";
import { Modal } from "react-bootstrap";

export const MyModal = ({ event, show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{event.Title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{event.description}</p>
        <span>When: {event.dateTime}</span>
        <span>Where: {event.place}</span>
        <span>What: {event.type}</span>
      </Modal.Body>
    </Modal>
  );
};
