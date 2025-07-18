import React from "react";
import { Calendar, UserPlus } from "lucide-react";
import { categories, getDisplayTitle } from "../../constants/eventData";
import { eventsStyles } from "./eventStyles";

const Sidebar = ({
  selectedCategory,
  setSelectedCategory,
  isMobile = false,
}) => {
  const handleApplyClick = () => {
    // event suggestion form
    window.open(
      "https://forms.office.com/Pages/ResponsePage.aspx?id=ikpGlu34sUCZ4l9rUKICUAFk75kOu61KnIBx7Y2-YPdUN0Y0UDdFSEo4SEY1SDFBWlpXVTRZOVlJUy4u",
      "_blank"
    );
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  if (isMobile) {
    return (
      <div style={eventsStyles.mobileSidebar}>
        <h1 style={eventsStyles.mobileTitle}>ACM Events</h1>

        <h2 style={eventsStyles.sidebarTitle}>
          <Calendar style={{ width: "1.25rem", height: "1.25rem" }} />
          Academic Years
        </h2>

        <div style={eventsStyles.mobileYearContainer}>
          {categories.map((category) => (
            <button
              key={category.id}
              style={{
                ...eventsStyles.mobileYearButton,
                ...(selectedCategory === category.id
                  ? eventsStyles.activeYearButton
                  : {}),
              }}
              onClick={() => handleCategoryClick(category.id)}
              onMouseEnter={(e) => {
                if (selectedCategory !== category.id) {
                  e.currentTarget.style.backgroundColor = "#f1f5f9";
                  e.currentTarget.style.borderColor = "#cbd5e1";
                }
              }}
              onMouseLeave={(e) => {
                if (selectedCategory !== category.id) {
                  e.currentTarget.style.backgroundColor = "#f8fafc";
                  e.currentTarget.style.borderColor = "#e2e8f0";
                }
              }}
            >
              <Calendar style={{ width: "0.875rem", height: "0.875rem" }} />
              {category.label}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div style={eventsStyles.desktopSidebar}>
      <h2 style={eventsStyles.sidebarTitle}>
        <Calendar style={{ width: "1.25rem", height: "1.25rem" }} />
        Academic Years
      </h2>

      {categories.map((category) => (
        <button
          key={category.id}
          style={{
            ...eventsStyles.yearButton,
            ...(selectedCategory === category.id
              ? eventsStyles.activeYearButton
              : {}),
          }}
          onClick={() => handleCategoryClick(category.id)}
          onMouseEnter={(e) => {
            if (selectedCategory !== category.id) {
              e.currentTarget.style.backgroundColor = "#f1f5f9";
              e.currentTarget.style.borderColor = "#cbd5e1";
            }
          }}
          onMouseLeave={(e) => {
            if (selectedCategory !== category.id) {
              e.currentTarget.style.backgroundColor = "#f8fafc";
              e.currentTarget.style.borderColor = "#e2e8f0";
            }
          }}
        >
          <Calendar style={{ width: "1rem", height: "1rem" }} />
          {category.label}
        </button>
      ))}

      <div style={eventsStyles.statsBox}>
        <p style={eventsStyles.statsText}>Current Category</p>
        <p style={eventsStyles.statsNumber}>
          {getDisplayTitle(selectedCategory)}
        </p>
      </div>

      <button
        style={eventsStyles.applyButton}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#1d4ed8";
          e.currentTarget.style.transform = "translateY(-1px)";
          e.currentTarget.style.boxShadow =
            "0 4px 8px -1px rgba(0, 0, 0, 0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#2563eb";
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 2px 4px -1px rgba(0, 0, 0, 0.1)";
        }}
        onClick={handleApplyClick}
      >
        <UserPlus style={{ width: "1rem", height: "1rem" }} />
        Suggest an Event Idea
      </button>
    </div>
  );
};

export default Sidebar;