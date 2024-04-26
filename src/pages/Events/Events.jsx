import React, { useEffect } from "react";
import { Page } from "../../components/Page/Page";
import { EventItem } from "../../components/EventItem/EventItem";
import { Button, Spinner } from "react-bootstrap";
import { connect, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { getEvents } from "../../actions/eventActions";

const Events = ({ event: { events, loading }, getEvents }) => {
  const isLogged = useSelector((state) => state.login.loggedIn);

  useEffect(() => {
    getEvents();

    // eslint-disable-next-line
  }, []);

  const filterEvents = () => {};

  if (loading || events === null) {
    return (
      <Page>
        <Spinner
          animation="grow"
          size="xl"
          style={{ backgroundColor: "#846275" }}
        />
      </Page>
    );
  }

  return (
    <Page>
      {isLogged && (
        <Button
          size="md"
          onClick={filterEvents}
          style={{ backgroundColor: "#846075", borderColor: "#846075" }}
          className="mb-4"
        >
          Show my events
        </Button>
      )}
      <div className="d-flex align-items-stretch flex-wrap justify-content-between">
        {events.map((event) => (
          <EventItem event={event} />
        ))}
      </div>
    </Page>
  );
};

Events.propTypes = {
  event: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  event: state.events,
});

export default connect(mapStateToProps, { getEvents })(Events);
