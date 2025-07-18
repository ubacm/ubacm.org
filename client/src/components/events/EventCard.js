import React from "react";
import { Clock, MapPin } from "lucide-react";
import { eventCardStyles } from "./eventStyles";

const EventCard = ({ event, isMobile = false }) => {
  const cardStyle = {
    ...eventCardStyles.card,
    ...(isMobile ? eventCardStyles.cardMobile : eventCardStyles.cardDesktop),
  };

  const posterStyle = {
    ...eventCardStyles.poster,
    ...(isMobile
      ? eventCardStyles.posterMobile
      : eventCardStyles.posterDesktop),
  };

  const nameStyle = {
    ...eventCardStyles.name,
    ...(isMobile ? eventCardStyles.nameMobile : eventCardStyles.nameDesktop),
  };

  const detailRowStyle = {
    ...eventCardStyles.detailRow,
    ...(isMobile
      ? eventCardStyles.detailRowMobile
      : eventCardStyles.detailRowDesktop),
  };

  const descriptionStyle = {
    ...eventCardStyles.description,
    ...(isMobile
      ? eventCardStyles.descriptionMobile
      : eventCardStyles.descriptionDesktop),
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={(e) => {
        Object.assign(e.currentTarget.style, eventCardStyles.cardHover);
      }}
      onMouseLeave={(e) => {
        Object.assign(e.currentTarget.style, eventCardStyles.cardHoverReset);
      }}
    >
      <img src={event.poster} alt={event.name} style={posterStyle} />

      <div style={eventCardStyles.content}>
        <h3 style={nameStyle}>{event.name}</h3>

        <div style={detailRowStyle}>
          <Clock
            style={{
              width: isMobile ? "0.875rem" : "1rem",
              height: isMobile ? "0.875rem" : "1rem",
            }}
          />
          <span>{event.time}</span>
        </div>

        <div style={detailRowStyle}>
          <MapPin
            style={{
              width: isMobile ? "0.875rem" : "1rem",
              height: isMobile ? "0.875rem" : "1rem",
            }}
          />
          <span>{event.location}</span>
        </div>

        <p style={descriptionStyle}>{event.description}</p>
      </div>
    </div>
  );
};

export default EventCard;
