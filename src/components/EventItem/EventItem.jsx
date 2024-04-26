import React, { useState } from "react";
import PropTypes from "prop-types";
import { Trash3 } from "react-bootstrap-icons";
import { connect, useSelector } from "react-redux";

import { eventTypeColorMap } from "../../utils/maps";
import { formatISODateShort } from "../../utils/dateFormatter";
import { deleteEvent } from "../../actions/eventActions";
import EventDetailsModal from "../EventDetailsModal/EventDetailsModal";

const EventItem = ({ event, deleteEvent }) => {
  const [showModal, setShowModal] = useState(false);
  const upperStripeColor = eventTypeColorMap[event.eventTypeId] ?? "#4A6C6F";
  const currentUser = useSelector((state) => state.users.currentUser);

  const formattedDate = formatISODateShort(event.date);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <div className="card pe-0 ps-0 mb-5" style={{ width: 300 }}>
        <div
          className="rounded-top"
          style={{
            height: 24,
            backgroundColor: upperStripeColor,
          }}
        ></div>
        <div className="card-body">
          <h5 className="card-title">{event.title}</h5>

          <p className="card-text">{event.description.substring(0, 100)}...</p>
          <div className="d-flex justify-content-between mb-3">
            <button
              onClick={handleShowModal}
              className="btn"
              style={{
                backgroundColor: "#846075",
                color: "white",
                width: "50%",
              }}
            >
              More info
            </button>
            {currentUser?.id === event.ownerId && (
              <button
                onClick={() => deleteEvent(event.id)}
                className="btn"
                style={{
                  backgroundColor: "#E5E1EE",
                  width: "15%",
                }}
              >
                <Trash3 />
              </button>
            )}
          </div>
          <div>
            <span
              className="badge rounded-pill text-dark me-2"
              style={{ backgroundColor: "#E5E1EE" }}
            >
              {formattedDate}
            </span>
            <span
              className="badge rounded-pill text-dark"
              style={{ backgroundColor: "#E5E1EE" }}
            >
              {event.place}
            </span>
          </div>
        </div>
      </div>
      <EventDetailsModal
        event={event}
        show={showModal}
        handleClose={handleCloseModal}
      />
    </>
  );
};

EventItem.propTypes = {
  deleteEvent: PropTypes.object.isRequired,
};

export default connect(null, { deleteEvent })(EventItem);
