import React from "react";
import { Modal } from "react-bootstrap";
import {
  CalendarEvent,
  GeoAlt,
  InfoSquare,
  Person,
} from "react-bootstrap-icons";
import { eventTypeColorMap, locationsMap, usersMap } from "../../utils/maps";
import { formatISODate } from "../../utils/dateFormatter";

const EventDetailsModal = ({ show, handleClose, event }) => {
  const headerBackgroundColor =
    eventTypeColorMap[event.eventTypeId] ?? "#4A6C6F";

  const formattedDate = formatISODate(event.date);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header
        closeButton
        style={{ backgroundColor: headerBackgroundColor }}
      >
        <Modal.Title>{event.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <GeoAlt />
          <p>{locationsMap[event.locationId]}</p>
        </div>
        <div>
          <CalendarEvent />
          <p>{formattedDate}</p>
        </div>
        <div>
          <InfoSquare />
          <p>{event.description}</p>
        </div>
        <div>
          <Person />
          <p>Organized by {usersMap[event.ownerId]}</p>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default EventDetailsModal;
