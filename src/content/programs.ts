import { IMAGES } from "./images";

/**
 * SAMPLE PROGRAMS — editable placeholders until the school provides official details.
 * No prices or course durations are listed on purpose.
 */
export type Program = {
  slug: string;
  title: string;
  tagline: string;
  audience: string;
  level: string;
  description: string;
  objectives: string[];
  highlights: string[];
  image: string;
  imageAlt: string;
};

export const PROGRAMS: Program[] = [
  {
    slug: "english-for-kids",
    title: "English for Kids",
    tagline: "Playful first steps into English",
    audience: "Young learners (age range to be confirmed)",
    level: "Beginner",
    description:
      "A warm, playful introduction to English through songs, stories, games and picture cards. Children build everyday vocabulary and the confidence to speak without fear of mistakes.",
    objectives: [
      "Recognise and use everyday English words",
      "Understand simple instructions and questions",
      "Introduce themselves and talk about family, school and hobbies",
      "Enjoy English through stories and songs",
    ],
    highlights: [
      "Small, friendly groups",
      "Games, songs and storytelling",
      "Picture cards and hands-on activities",
      "Progress updates for parents",
    ],
    image: IMAGES.programKids,
    imageAlt: "Young children holding English flashcards with their teacher at a wooden table",
  },
  {
    slug: "english-for-teens",
    title: "English for Teens",
    tagline: "Speak up, think clearly, present with confidence",
    audience: "Junior and senior high school students",
    level: "Elementary to intermediate",
    description:
      "Builds grammar, vocabulary and fluency together, with plenty of speaking practice. Students learn to express opinions, work in teams and present ideas in English.",
    objectives: [
      "Strengthen grammar and vocabulary for school and daily life",
      "Speak more fluently in discussions",
      "Give short presentations in English",
      "Improve reading and listening comprehension",
    ],
    highlights: [
      "Discussion and debate practice",
      "Presentation and public speaking",
      "Project-based group work",
      "Support for school English lessons",
    ],
    image: IMAGES.programTeens,
    imageAlt: "A teenage student giving a confident presentation in English to classmates",
  },
  {
    slug: "conversation-club",
    title: "Conversation Club",
    tagline: "Real conversations, real confidence",
    audience: "Teens, university students and adults",
    level: "All levels",
    description:
      "Relaxed, guided conversation sessions focused on speaking and listening. Ideal for learners who understand English but want to speak naturally and confidently.",
    objectives: [
      "Speak more naturally in everyday situations",
      "Improve pronunciation and listening",
      "Expand practical vocabulary and expressions",
      "Overcome shyness when speaking English",
    ],
    highlights: [
      "Topic-based guided conversations",
      "Pronunciation coaching",
      "Role-plays for real-life situations",
      "Indoor and outdoor sessions",
    ],
    image: IMAGES.programAdults,
    imageAlt: "Young adults laughing during an outdoor English conversation session in the hills",
  },
  {
    slug: "english-camp-immersion",
    title: "English Camp Immersion",
    tagline: "Learn English by living it",
    audience: "School groups, communities and holiday participants",
    level: "All levels",
    description:
      "An immersive camp experience in the cool highlands of Pacet. Participants use English throughout outdoor games, teamwork challenges, presentations and evening activities.",
    objectives: [
      "Use English naturally throughout the day",
      "Build teamwork and leadership skills",
      "Gain confidence speaking in front of a group",
      "Create memorable learning experiences",
    ],
    highlights: [
      "Outdoor learning games",
      "Team challenges and presentations",
      "Evening activities and campfire sharing",
      "Programs for school groups on request",
    ],
    image: IMAGES.activityOutdoor,
    imageAlt: "Students playing an outdoor English vocabulary game on a grassy field near the mountains",
  },
];

export const PROGRAM_OPTIONS = [...PROGRAMS.map((p) => p.title), "Not sure yet — please advise"];
