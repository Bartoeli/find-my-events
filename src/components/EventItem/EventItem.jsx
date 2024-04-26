import React from "react";
import { eventTypeColorMap } from "../../utils/maps";
import { formatISODateShort } from "../../utils/dateFormatter";

export const EventItem = ({ event }) => {
  const upperStripeColor = eventTypeColorMap[event.eventTypeId] ?? "#4A6C6F";

  const formattedDate = formatISODateShort(event.date);

  return (
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

        <button
          className="btn mb-3"
          style={{ backgroundColor: "#846075", color: "white", width: "50%" }}
        >
          More info
        </button>
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
  );
};
