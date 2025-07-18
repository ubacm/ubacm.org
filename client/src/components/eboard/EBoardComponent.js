import { useState } from "react";
import { Calendar, Users, UserPlus } from "lucide-react";
import { eBoardData } from "./../../constants/eboardData";
import { eBoardStyles, mediaStyles } from "./eboardStyles";
import ProfileCard from "./ProfileCard";

const EBoard = () => {
  const [selectedYear, setSelectedYear] = useState("2024-2025");
  const years = ["2023-2024", "2024-2025", "2025-2026"];

  return (
    <>
      <style>{mediaStyles}</style>
      <div className="desktop-eboard" style={eBoardStyles.container}>
        <div style={eBoardStyles.desktopMain}>
          <div style={eBoardStyles.desktopSidebar}>
            <h2 style={eBoardStyles.sidebarTitle}>
              <Calendar style={{ width: "1.25rem", height: "1.25rem" }} />
              Academic Years
            </h2>

            {years.map((year) => (
              <button
                key={year}
                style={{
                  ...eBoardStyles.yearButton,
                  ...(selectedYear === year
                    ? eBoardStyles.activeYearButton
                    : {}),
                }}
                onClick={() => setSelectedYear(year)}
                onMouseEnter={(e) => {
                  if (selectedYear !== year) {
                    e.currentTarget.style.backgroundColor = "#f1f5f9";
                    e.currentTarget.style.borderColor = "#cbd5e1";
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedYear !== year) {
                    e.currentTarget.style.backgroundColor = "#f8fafc";
                    e.currentTarget.style.borderColor = "#e2e8f0";
                  }
                }}
              >
                <Calendar style={{ width: "1rem", height: "1rem" }} />
                {year}
              </button>
            ))}

            {/* Desktop Stats */}
            <div style={eBoardStyles.statsBox}>
              <p style={eBoardStyles.statsText}>Board Members</p>
              <p style={eBoardStyles.statsNumber}>
                {eBoardData[selectedYear]?.length || 0}
              </p>
            </div>

            <div style={eBoardStyles.statsBox}>
              <p style={eBoardStyles.statsText}>Current Year</p>
              <p style={eBoardStyles.statsNumber}>{selectedYear}</p>
            </div>

            {/* Apply Button */}
            <button
              style={eBoardStyles.applyButton}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#1d4ed8";
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow =
                  "0 4px 8px -1px rgba(0, 0, 0, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#2563eb";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 2px 4px -1px rgba(0, 0, 0, 0.1)";
              }}
              onClick={() => {
                // Add the application link here :3
                window.open("https://forms.office.com/r/jwPrMgSGDR", "_blank");
              }}
            >
              <UserPlus style={{ width: "1rem", height: "1rem" }} />
              Apply for 2025-2026
            </button>
          </div>

          <div style={eBoardStyles.desktopContent}>
            <h1 style={eBoardStyles.desktopTitle}>ACM E-Board</h1>

            <div style={eBoardStyles.selectedYearTitle}>
              <Users style={{ width: "1.25rem", height: "1.25rem" }} />
              {selectedYear}
            </div>

            <div style={eBoardStyles.desktopGrid}>
              {eBoardData[selectedYear]?.map((member) => (
                <ProfileCard key={member.id} member={member} isMobile={false} />
              ))}
            </div>

            {eBoardData[selectedYear]?.length === 0 && (
              <div style={eBoardStyles.emptyStateDesktop}>
                No board members listed for {selectedYear} yet.
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mobile-eboard" style={eBoardStyles.container}>
        <div style={eBoardStyles.mobileMain}>
          <div style={eBoardStyles.mobileSidebar}>
            <h1 style={eBoardStyles.mobileTitle}>Meet the E-Board</h1>

            <h2 style={eBoardStyles.sidebarTitle}>
              <Calendar style={{ width: "1.25rem", height: "1.25rem" }} />
              Academic Years
            </h2>

            <div style={eBoardStyles.mobileYearContainer}>
              {years.map((year) => (
                <button
                  key={year}
                  style={{
                    ...eBoardStyles.mobileYearButton,
                    ...(selectedYear === year
                      ? eBoardStyles.activeYearButton
                      : {}),
                  }}
                  onClick={() => setSelectedYear(year)}
                  onMouseEnter={(e) => {
                    if (selectedYear !== year) {
                      e.currentTarget.style.backgroundColor = "#f1f5f9";
                      e.currentTarget.style.borderColor = "#cbd5e1";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedYear !== year) {
                      e.currentTarget.style.backgroundColor = "#f8fafc";
                      e.currentTarget.style.borderColor = "#e2e8f0";
                    }
                  }}
                >
                  <Calendar style={{ width: "0.875rem", height: "0.875rem" }} />
                  {year}
                </button>
              ))}
            </div>

            <div style={eBoardStyles.selectedYearTitle}>
              <Users style={{ width: "1.25rem", height: "1.25rem" }} />
              {selectedYear} - {eBoardData[selectedYear]?.length || 0} Members
            </div>
          </div>

          <div style={eBoardStyles.mobileGrid}>
            {eBoardData[selectedYear]?.map((member) => (
              <ProfileCard key={member.id} member={member} isMobile={true} />
            ))}
          </div>

          {eBoardData[selectedYear]?.length === 0 && (
            <div style={eBoardStyles.emptyStateMobile}>
              No board members listed for {selectedYear} yet.
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default EBoard;
