import React, { useState } from "react";
import { Users } from "lucide-react";
import EventCard from "./EventCard";
import Sidebar from "./Sidebar";
import { eventsData, getDisplayTitle } from "../../constants/eventData";
import { eventsStyles, mediaStyles } from "./eventStyles";

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState("upcoming");

  const renderEventsList = (isMobile) => {
    const events = eventsData[selectedCategory] || [];

    if (events.length === 0) {
      return (
        <div
          style={{
            textAlign: "center",
            padding: isMobile ? "2rem" : "3rem",
            color: "#6b7280",
            fontSize: isMobile ? "1rem" : "1.125rem",
          }}
        >
          No events listed for {getDisplayTitle(selectedCategory).toLowerCase()}{" "}
          yet.
        </div>
      );
    }

    return events.map((event) => (
      <EventCard key={event.id} event={event} isMobile={isMobile} />
    ));
  };

  return (
    <>
      <style>{mediaStyles}</style>

      <div className="desktop-events" style={eventsStyles.container}>
        <div style={eventsStyles.desktopMain}>
          <Sidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            isMobile={false}
          />

          <div style={eventsStyles.desktopContent}>
            <h1 style={eventsStyles.desktopTitle}>ACM Events</h1>

            <div style={eventsStyles.selectedYearTitle}>
              <Users style={{ width: "1.25rem", height: "1.25rem" }} />
              {getDisplayTitle(selectedCategory)}
            </div>

            <div style={eventsStyles.desktopGrid}>
              {renderEventsList(false)}
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-events" style={eventsStyles.container}>
        <div style={eventsStyles.mobileMain}>
          <Sidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            isMobile={true}
          />

          <div style={eventsStyles.selectedYearTitle}>
            <Users style={{ width: "1.25rem", height: "1.25rem" }} />
            {getDisplayTitle(selectedCategory)}{" "}
          </div>

          <div style={eventsStyles.mobileGrid}>{renderEventsList(true)}</div>
        </div>
      </div>
    </>
  );
};

export default Events;
