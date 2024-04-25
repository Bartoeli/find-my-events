import React from "react";

const images = {
  music: "../../assets/images/music.png",
  theatre: "../../assets/images/theatre.jpeg",
  sport: "../../assets/images/sport.png",
};

export const EventItem = ({ event }) => {
  const getImage = (type) => {
    return images[type] || event.image; // return default event image if type is not found
  };

  return (
    <div class="card">
      <img src={getImage(event.type)} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{event.title}</h5>
        <p class="card-text">{event.description.substring(0, 100)}...</p>
        <button class="btn btn-outline-info">More info</button>
        <div>
          <span class="badge rounded-pill bg-warning text-dark">
            {event.dateTime}
          </span>
          <span class="badge rounded-pill bg-info text-dark">
            {event.place}
          </span>
          <span class="badge rounded-pill bg-success">{event.type}</span>
        </div>
      </div>
    </div>
  );
};
