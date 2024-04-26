import React from "react";
import { Modal } from "react-bootstrap";
import AddEventForm from "./AddEventForm";

const AddEventModal = ({ show, handleClose, eventTypes, locations }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add new event</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddEventForm
          eventTypes={eventTypes}
          locations={locations}
          closeModal={handleClose}
        />
      </Modal.Body>
    </Modal>
  );
};

export default AddEventModal;
