import {
  BookOpen,
  Mic,
  Mountain,
  Users,
  HeartHandshake,
  Compass,
  Trees,
  Presentation,
  School,
} from "lucide-react";
import { IMAGES } from "./images";

/** Editable school copy. Text in [brackets] is a placeholder awaiting confirmation. */

export const INTRO = {
  title: "A friendly place to learn English in the highlands of Pacet",
  body: "English Camp is an English learning school in Pacet, Mojokerto. We help children, teenagers and adults use English with confidence — through speaking practice, active learning and a supportive community.",
};

export const HISTORY = [
  "[School history placeholder] Share how English Camp started, who founded it and what inspired the school.",
  "[Milestones placeholder] Add key moments — for example when the school opened, new programs or community projects.",
];

export const VISION =
  "[Vision placeholder] To become a trusted English learning community in Pacet where every learner gains the confidence to communicate and explore new opportunities.";

export const MISSION = [
  "Provide English learning that is practical, active and enjoyable",
  "Build students' confidence in speaking and presenting",
  "Create a safe, friendly and motivating learning environment",
  "Support personal growth, teamwork and character",
];

export const PHILOSOPHY = [
  {
    title: "Learn by doing",
    body: "Students practise English through real activities — conversations, games, projects and presentations — not just memorisation.",
  },
  {
    title: "Confidence first",
    body: "Mistakes are part of learning. We create a space where students feel brave enough to speak.",
  },
  {
    title: "Every learner matters",
    body: "Small groups and caring teachers help each student progress at their own pace.",
  },
];

export const WHY_CHOOSE = [
  {
    icon: Mic,
    title: "Speaking from day one",
    body: "Every lesson includes real speaking practice so students build fluency, not just grammar.",
  },
  {
    icon: Users,
    title: "Small, friendly groups",
    body: "More attention for each learner and more chances to participate.",
  },
  {
    icon: Mountain,
    title: "Inspiring environment",
    body: "Learn in the cool, green highlands of Pacet — a calm place to focus and grow.",
  },
  {
    icon: HeartHandshake,
    title: "Caring teachers",
    body: "Patient, encouraging teachers who guide students step by step.",
  },
];

export const DIFFERENTIATORS = [
  {
    icon: Compass,
    title: "Camp-style active learning",
    body: "Indoor lessons combined with outdoor games, team challenges and group activities.",
  },
  {
    icon: Presentation,
    title: "Communication & confidence",
    body: "Presentations, role-plays and discussions help students speak up with confidence.",
  },
  {
    icon: Trees,
    title: "Learning close to nature",
    body: "Pacet's fresh air and mountain views make learning calm, focused and memorable.",
  },
  {
    icon: BookOpen,
    title: "Programs for every age",
    body: "From young learners to adults, each program fits the learner's age and level.",
  },
];

export const FACILITIES = [
  {
    title: "Bright classrooms",
    body: "Comfortable, well-lit rooms for small-group learning.",
    image: IMAGES.activityGroup,
    imageAlt: "Students working together at round tables in a bright classroom with a mountain view",
  },
  {
    title: "Reading corner",
    body: "A calm space with English books to build reading habits.",
    image: IMAGES.facilityLibrary,
    imageAlt: "Teenagers reading English books on cushions beside large windows",
  },
  {
    title: "Outdoor learning spaces",
    body: "Open-air areas for games, conversation and camp activities.",
    image: IMAGES.facilityCampus,
    imageAlt: "A welcoming learning centre building with a garden terrace and misty mountains behind",
  },
];

export const STATS_NOTE = "[Add verified numbers such as students taught or years of experience]";

export const ADMISSION_STEPS = [
  {
    icon: School,
    title: "Send an inquiry",
    body: "Fill in the registration form below or message us on WhatsApp.",
  },
  {
    icon: Users,
    title: "Talk with our team",
    body: "We contact you to discuss the student's needs, age and goals.",
  },
  {
    icon: BookOpen,
    title: "Level check & program match",
    body: "We help choose the right program and class for the student.",
  },
  {
    icon: HeartHandshake,
    title: "Start learning",
    body: "Complete registration and join your first class at English Camp.",
  },
];

export const REQUIRED_DOCUMENTS = [
  "[Placeholder] Completed registration form",
  "[Placeholder] Copy of student ID or birth certificate",
  "[Placeholder] Recent passport-size photo",
  "[Placeholder] Parent or guardian contact details",
];

export const FAQS = [
  {
    q: "Who can join English Camp?",
    a: "We welcome learners of different ages and levels. Contact us and we will help find a suitable program.",
  },
  {
    q: "Do students need to be good at English before joining?",
    a: "No. Our programs are designed for different levels, including complete beginners.",
  },
  {
    q: "How do I know which program is right?",
    a: "Our team will talk with you about the student's age, level and goals, then recommend a program.",
  },
  {
    q: "What are the class schedules and fees?",
    a: "Schedules and fees depend on the program. Please contact us on WhatsApp for the latest information.",
  },
  {
    q: "Can schools or groups book an English camp program?",
    a: "Group programs may be arranged on request. Please contact us to discuss your group's needs.",
  },
  {
    q: "Where is English Camp located?",
    a: "We are located in Pacet, Mojokerto, East Java, Indonesia. See the Contact page for directions.",
  },
];

/** Testimonials — replace with real, approved quotes from students or parents. */
export const TESTIMONIALS = [
  {
    quote:
      "[Testimonial placeholder] Add a real quote from a parent about their child's progress and confidence.",
    name: "[Parent name]",
    role: "Parent of a student",
  },
  {
    quote:
      "[Testimonial placeholder] Add a real quote from a student about their favourite activity or what they learned.",
    name: "[Student name]",
    role: "Student",
  },
  {
    quote:
      "[Testimonial placeholder] Add a real quote from a school or group that joined an English camp program.",
    name: "[Name, school or group]",
    role: "Group program participant",
  },
];
