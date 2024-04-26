import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { connect, useSelector } from "react-redux";
import PropTypes from "prop-types";

import { addEvent } from "../../actions/eventActions";

const AddEventForm = ({ eventTypes, locations, addEvent, closeModal }) => {
  const [formData, setFormData] = useState({});
  const currentUser = useSelector((state) => state.users.currentUser) ?? {};

  const setValue = (e, key) => {
    setFormData({ ...formData, [key]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { title, description, date, time, locationId } = formData;
    const eventData = {
      title,
      description,
      date: date + "T" + time + ":00",
      locationId,
      ownerId: currentUser?.id,
    };

    try {
      addEvent(eventData);
      alert("Event added");
      closeModal();
    } catch (error) {
      alert("Error");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group key="gtitle" className="mb-3">
        <Form.Label>Event title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title"
          required
          onChange={(e) => setValue(e, "title")}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group key="gdescription" className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          required
          style={{ minHeight: "20vh " }}
          type="text"
          as="textarea"
          placeholder="Enter description"
          onChange={(e) => setValue(e, "description")}
        />
      </Form.Group>

      <Form.Group key="gdate" className="mb-3">
        <Form.Label>Date and time</Form.Label>
        <div className="d-flex flex-row">
          <Form.Control
            type="date"
            required
            onChange={(e) => setValue(e, "date")}
          />
          <Form.Control
            type="time"
            required
            onChange={(e) => setValue(e, "time")}
          />
        </div>
      </Form.Group>

      <Form.Group key="glocation" className="mb-3">
        <Form.Label>Location</Form.Label>
        <Form.Select
          aria-label="Location"
          required
          onChange={(e) => setValue(e, "locationId")}
        >
          <option>Open this select menu</option>
          {locations?.map((location) => (
            <option key={location.id} value={location.id}>
              {location.name}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group key="geventtype" className="mb-3">
        <Form.Label>Event type</Form.Label>
        <Form.Select
          aria-label="Event type"
          required
          onChange={(e) => setValue(e, "eventTypeId")}
        >
          <option>Open this select menu</option>
          {eventTypes?.map((eventType) => (
            <option key={eventType.id} value={eventType.id}>
              {eventType.name}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Button
        type="submit"
        style={{ backgroundColor: "#846075", color: "white", width: "100%" }}
      >
        Submit
      </Button>
    </Form>
  );
};

AddEventForm.propTypes = {
  addEvent: PropTypes.object.isRequired,
};

export default connect(null, { addEvent })(AddEventForm);
