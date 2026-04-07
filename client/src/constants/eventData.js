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

// 2025 - 2026 images:

import fall_gbm from "../assets/events/2025-2026/fall_gbm.png";
import cse_resume_workshop from "../assets/events/2025-2026/cse_resume_workshop.png";
import breaking_into_tech from "../assets/events/2025-2026/recap_breaking_into_tech.jpg";
import techical_interview from "../assets/events/2025-2026/recap_technical_interview.png";
import zero_to_crud_hero from "../assets/events/2025-2026/zero_to_crud_hero.png";

import acm_spring_gbm_2026 from "../assets/events/2025-2026/acm_spring_gbm_26.png";
import leetnights_week2 from "../assets/events/2025-2026/leetnights_week2.png";
import leetnights_week3 from "../assets/events/2025-2026/leetnights_week3.png";
import leetnights_week4 from "../assets/events/2025-2026/leetnights_week4.png";
import leetnights_week5 from "../assets/events/2025-2026/leetnights_week5.png";
import leetnights_week1_recap from "../assets/events/2025-2026/leetnights_week1_recap.png";
import guide_to_personal from "../assets/events/2025-2026/guide_to_personal.png";
import system_design_workshop from "../assets/events/2025-2026/system_design_acmm.png";
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
    // {
    //   id: 1,
    //   name: "No Upcoming Events Yet",
    //   time: "N/A",
    //   location: "N/A",
    //   description: "Look out for our discord and instagram updates!",
    //   poster:
    //     "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
    // },
    {
      id: 1,
      name: "LeetNights - Trees",
      time: "April 23rd, 2026 - 6:30 PM",
      location: "Knox 14",
      description: "Learn Tree concepts, practice problem pattern detection and solve topic-based LeetCode with peers",
      poster:
        leetnights_week5,
    }

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
      id: 11,
      name: "System Design Deep Dive",
      time: "April 2, 2026 - 6:30 PM",
      location: "Knox 14",
      description: "Learn what interviewers look for in high-level system design rounds. Walk through Netflix's architecture as a case study with incoming Netflix SWE intern.",
      poster:
        system_design_workshop,
    },
    {
      id: 10,
      name: "LeetNights - Sliding Window",
      time: "March 26, 2026 - 6:30 PM",
      location: "Knox 14",
      description: "Learn Sliding Window concepts, practice problem pattern detection and solve topic-based LeetCode with peers",
      poster:
        leetnights_week3,
    },
    {
      id: 9,
      name: "LeetNights - Two Pointers",
      time: "March 5, 2026 - 6:30 PM",
      location: "Knox 14",
      description: "Learn Two Pointer concepts, practice problem pattern detection and solve topic-based LeetCode with peers",
      poster:
        leetnights_week2,
    },
    {
      id: 8,
      name: "Guide to Personal Projects",
      time: "February 26, 2026 - 6:30 PM",
      location: "Knox 109",
      description: "Join our guided workshop to start building your own coding projects!",
      poster:
        guide_to_personal,
    },
    {
      id: 7,
      name: "LeetNights - Arrays & Hashing",
      time: "February 19, 2026 - 6:30 PM",
      location: "Knox 14",
      description: "Learn Arrays & Hashing concepts, practice problem pattern detection and solve topic-based LeetCode with peers",
      poster:
        leetnights_week1_recap,
    },
    {
      id: 6,
      name: "Spring GBM",
      time: "February 11, 2026 - 6:30 PM",
      location: "Davis 101",
      description: "Play games with CSE peers and learn more about the upcoming events planned for the semester!",
      poster:
        acm_spring_gbm_2026,
    },
    {
      id: 5,
      name: "From Zero to Crud Hero",
      time: "November 19, 2025 - 6:00 PM",
      location: "Davis 101",
      description:
        "A guided workshop to get you started on building a web app side project from scratch! Get hands-on experience with web development.",
      poster: zero_to_crud_hero,
    },
    {
      id: 4,
      name: "Technical Interview Workshop",
      time: "October 22, 2025 - 6:00 PM",
      location: "Davis 101",
      description:
        "Master your technical interview prep with strategies to help you ace your coding interviews.",
      poster: techical_interview,
    },
    {
      id: 3,
      name: "Breaking into Tech w/ Dan Starner",
      time: "October 1, 2025 - 6:00 PM",
      location: "Davis 101",
      description:
        "Discover the Strategies That Helped Dan Starner Secure Roles at Bloomberg, Heroku, and Stripe.",
      poster: breaking_into_tech,
    },
    {
      id: 2,
      name: "CSE Resume Workshop",
      time: "September 17, 2025 - 6:00 PM",
      location: "Davis 101",
      description:
        "Master the step-by-step approach to internship applications. Gain insights into what tech recruiters look for when screening resumes. One-on-one resume reviews and feedback.",
      poster: cse_resume_workshop,
    },
    {
      id: 1,
      name: "Fall GBM",
      time: "September 10, 2025 - 6:00 PM",
      location: "Davis 101",
      description:
        "Connect with your CSE peers and learn about ACM and our upcoming plans for the semester!",
      poster: fall_gbm,
    }
  ],
};

export const getDisplayTitle = (category) => {
  return category === "upcoming" ? "Upcoming Events" : "Past Events";
};
