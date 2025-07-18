// 2023 - 2024 images :
import welcome_kickback from "../assets/events/2023-2024/welcome_kickback.jpg";
import cse_picnic from "../assets/events/2023-2024/cse_picnic.jpg";
import internship_101 from "../assets/events/2023-2024/internship_101.jpg";
import intro_to_leetcode from "../assets/events/2023-2024/intro_to_leetcode.png";
import acing_the_interview from "../assets/events/2023-2024/acing_the_interview.jpg";
import web_development_workshop from "../assets/events/2023-2024/web_development_workshop.jpg";
import welcome_game_night from "../assets/events/2023-2024/welcome_game_night.png";
import resume_review from "../assets/events/2023-2024/resume_review.jpg";

// 2024 - 2025 images :
import welcome_back_gbm from "../assets/events/2024-2025/welcome_back_gbm.jpeg";
import guide_to_hackathons from "../assets/events/2024-2025/guide_to_hackathons.jpeg";
import web_dev_workshop from "../assets/events/2024-2025/web_dev_workshop.jpeg";
import spring_gbm from "../assets/events/2024-2025/spring_gbm.jpg";
import techbuffalo from "../assets/events/2024-2025/techbuffalo.jpg";
import swe_panel from "../assets/events/2024-2025/swe_panel.jpg";

// Categories
export const categories = [
  { id: "upcoming", label: "Upcoming Events", icon: "Calendar" },
  { id: "2023-2024", label: "2023-2024", icon: "Calendar" },
  { id: "2024-2025", label: "2024-2025", icon: "Calendar" },
  { id: "2025-2026", label: "2025-2026", icon: "Calendar" },
];

export const eventsData = {
  // for each category id !!!
  upcoming: [
    {
      id: 1,
      name: "No Upcoming Events Yet",
      time: "N/A",
      location: "N/A",
      description: "Look out for our discord and instagram updates!",
      poster:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
    },
  ],
  "2023-2024": [
    {
      id: 2,
      name: "Resume Review",
      time: "February 29, 2024 - 6:00 PM",
      location: "Davis 101",
      description:
        "Learn resume advice that landed SWE interviews and get yours reviewed",
      poster: resume_review,
    },
    {
      id: 3,
      name: "Web Development Workshop",
      time: "February 22, 2024 - 6:00 PM",
      location: "Davis 101",
      description:
        "Start a new project in a walkthrough demo using HTML, CSS and Javascript",
      poster: web_development_workshop,
    },
    {
      id: 4,
      name: "Acing the Interview",
      time: "November 29, 2023 - 6:00 PM",
      location: "Davis 101",
      description:
        "Walkthrough a live technical interview and mock interview with peers",
      poster: acing_the_interview,
    },
    {
      id: 5,
      name: "Welcome Back Game Night",
      time: "February 1, 2024 - 6:00 PM",
      location: "Davis 101",
      description:
        "Enjoy hot chocolate & donuts, and play games with fellow students",
      poster: welcome_game_night,
    },
    {
      id: 6,
      name: "Intro to Leetcode",
      time: "November 15, 2023 - 6:00 PM",
      location: "Davis 101",
      description:
        "Learn to solve algorithm problems to prepare for technical interviews",
      poster: intro_to_leetcode,
    },
    {
      id: 7,
      name: "Internships 101",
      time: "October 18, 2023",
      location: "Davis 101",
      description:
        "An internship guide on how to land internships in software engineering",
      poster: internship_101,
    },
    {
      id: 8,
      name: "CSE Picnic",
      time: "September 29, 2023 - 6:00 PM",
      location: "Stevens Courtyard",
      description:
        "A fall-themed CSE picnic and basketball with faculty and professors",
      poster: cse_picnic,
    },
    {
      id: 9,
      name: "Welcome Kickback",
      time: "September 6, 2023 - 6:00 PM",
      location: "Davis 101",
      description:
        "A general body meeting to welcome back CSE students to the semester",
      poster: welcome_kickback,
    },
  ],
  "2024-2025": [
    {
      id: 10,
      name: "Software Engineer Panel",
      time: "March 28, 2025 - 6:00 PM",
      location: "Davis 101",
      description:
        "Gain industry insights as our remote panel of ACM alumni SWEs share their professional journeys",
      poster: swe_panel,
    },
    {
      id: 11,
      name: "TechBuffalo @ ACM + Resume Review Workshop",
      time: "February 14, 2025 - 6:00 PM",
      location: "Davis 101",
      description:
        "Learn more about TechBuffalo's PowerTech program, internship application tips and resume reviews",
      poster: techbuffalo,
    },
    {
      id: 12,
      name: "Spring GBM",
      time: "February 7, 2024 - 6:00 PM",
      location: "Davis 101",
      description:
        "Learn more about the upcoming events planned for the semester",
      poster: spring_gbm,
    },
    {
      id: 13,
      name: "Web Dev Workshop",
      time: "December 4, 2024 - 6:00 PM",
      location: "Davis 101",
      description:
        "A guided workshop centered around web development projects and webhosting",
      poster: web_dev_workshop,
    },
    {
      id: 14,
      name: "Guide to Hackathons",
      time: "November 6, 2024 - 6:00 PM",
      location: "Norton 190",
      description:
        "Learn how to approach a hackathon featuring UB Hacking Web Lead, Zaid Arshad",
      poster: guide_to_hackathons,
    },
    {
      id: 15,
      name: "Welcome Back GBM",
      time: "October 16, 2024 - 6:00 PM",
      location: "Norton 190",
      description:
        "A general body meeting to welcome back CSE students to the semester",
      poster: welcome_back_gbm,
    },
  ],
  "2025-2026": [
    {
      id: 1,
      name: "No Events Yet",
      time: "N/A",
      location: "N/A",
      description: "Look out for our discord and instagram updates!",
      poster:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
    },
  ],
};

export const getDisplayTitle = (category) => {
  return category === "upcoming" ? "Upcoming Events" : "Past Events";
};
