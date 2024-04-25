import React from "react";
import { EventItem } from "../../components/EventItem/EventItem";
import axios from "axios";

export const Events = () => {
  const data = axios
    .get("http://localhost:3000/events")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {});

  console.log("data", data);

  return (
    <div>
      <h1>Upcoming Events</h1>
      <div className="container">
        <div className="row row-cols-12 row-cols-md-4 row-cols-lg-3">
          {data.response.map((item) => {
            return (
              <div className="mb-2">
                <EventItem event={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
