import { IMAGES } from "./images";

export const GALLERY_CATEGORIES = ["All", "Classroom", "Outdoor", "Events", "Facilities"] as const;
export type GalleryCategory = Exclude<(typeof GALLERY_CATEGORIES)[number], "All">;

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  category: GalleryCategory;
  /** Display shape. Wide group photos use "16/9" so nobody is cut off. */
  ratio?: "4/3" | "3/4" | "16/9";
};

/** Add, remove or reorder photos here. Temporary images until real photos are provided. */
export const GALLERY: GalleryItem[] = [
  {
    src: IMAGES.heroStudents,
    alt: "Students practising English conversation in an open-air classroom with mountain views",
    caption: "Conversation practice in our open-air classroom",
    category: "Classroom",
  },
  {
    src: IMAGES.campGroupPendopo,
    alt: "Children and instructors posing with the English & Cultural Camp banner on the lawn in front of a traditional Javanese meeting hall, with mountains behind",
    caption: "Camp group photo in front of the pendopo",
    category: "Events",
    ratio: "16/9",
  },
  {
    src: IMAGES.activityOutdoor,
    alt: "Students laughing during an outdoor English vocabulary team game",
    caption: "Outdoor vocabulary team game",
    category: "Outdoor",
  },
  {
    src: IMAGES.programKids,
    alt: "Children learning English words with flashcards and their teacher",
    caption: "Flashcard fun in the Kids Program",
    category: "Classroom",
  },
  {
    src: IMAGES.activityCampfire,
    alt: "Students singing around a campfire at dusk in the mountains",
    caption: "Evening campfire sharing",
    category: "Events",
  },
  {
    src: IMAGES.facilityCampus,
    alt: "Learning centre building with garden and misty mountains",
    caption: "Our learning space in Pacet",
    category: "Facilities",
  },
  {
    src: IMAGES.programTeens,
    alt: "A student presenting in English to classmates",
    caption: "Presentation day",
    category: "Events",
  },
  {
    src: IMAGES.programAdults,
    alt: "Young adults chatting in English on an outdoor deck at sunset",
    caption: "Sunset Conversation Club",
    category: "Outdoor",
  },
  {
    src: IMAGES.facilityLibrary,
    alt: "Students reading English books in a cosy reading corner",
    caption: "Quiet reading corner",
    category: "Facilities",
  },
  {
    src: IMAGES.activityGroup,
    alt: "Students collaborating at round tables with a teacher guiding them",
    caption: "Group learning with teacher support",
    category: "Classroom",
  },
];
