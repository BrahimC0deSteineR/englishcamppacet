import { IMAGES } from "./images";

/**
 * NEWS & EVENTS — sample posts. Replace with official announcements.
 * Add a new post by copying an entry and giving it a unique slug.
 */
export type NewsCategory = "Announcement" | "Event" | "Activity";

export type NewsPost = {
  slug: string;
  title: string;
  category: NewsCategory;
  /** ISO date, e.g. "2026-12-05" */
  date: string;
  /** For events: optional date shown as "Event date" */
  eventDate?: string;
  location?: string;
  excerpt: string;
  body: string[];
  image: string;
  imageAlt: string;
};

export const NEWS: NewsPost[] = [
  {
    slug: "registration-now-open",
    title: "Registration inquiries are now open",
    category: "Announcement",
    date: "2026-11-02",
    excerpt:
      "Interested in joining English Camp? Send us an inquiry and our team will help you choose the right program.",
    body: [
      "[Sample announcement] We are happy to welcome new students to English Camp in Pacet, Mojokerto. Parents and students can now send registration inquiries through our website or WhatsApp.",
      "Our team will contact you to discuss the student's age, current English level and learning goals, then recommend a suitable program.",
      "Visit the Admissions page to see the registration steps and send your inquiry.",
    ],
    image: IMAGES.heroStudents,
    imageAlt: "Students practising English together in an open-air classroom",
  },
  {
    slug: "english-camp-weekend",
    title: "English Camp Weekend: speak, play and explore",
    category: "Event",
    date: "2026-10-28",
    eventDate: "[Date to be confirmed]",
    location: "Pacet, Mojokerto",
    excerpt:
      "A weekend of outdoor English games, team challenges and evening activities in the highlands of Pacet.",
    body: [
      "[Sample event] Join our English Camp Weekend — a fun, immersive experience where participants use English throughout outdoor games, teamwork challenges and short presentations.",
      "Evening activities include storytelling and campfire sharing, giving students a relaxed space to practise speaking.",
      "Details such as date, schedule and participation information will be announced soon. Contact us on WhatsApp to register your interest.",
    ],
    image: IMAGES.activityCampfire,
    imageAlt: "Students sitting around a campfire at dusk in the mountains",
  },
  {
    slug: "student-presentation-day",
    title: "Student Presentation Day",
    category: "Activity",
    date: "2026-10-15",
    excerpt:
      "Our teens shared short presentations in English on topics they care about — a big step in confidence.",
    body: [
      "[Sample activity report] Students in our Teens Program prepared and delivered short presentations in English on topics of their choice.",
      "Presentation practice helps students organise their ideas, speak clearly and respond to questions — skills that support them at school and beyond.",
    ],
    image: IMAGES.programTeens,
    imageAlt: "A student presenting confidently in front of classmates",
  },
  {
    slug: "outdoor-vocabulary-games",
    title: "Learning outdoors: vocabulary team games",
    category: "Activity",
    date: "2026-09-30",
    excerpt:
      "Fresh air, teamwork and lots of laughter — students learned new words through outdoor games.",
    body: [
      "[Sample activity report] Students teamed up for outdoor vocabulary games on the field, racing to find and use new English words in sentences.",
      "Active games like these help vocabulary stick while building teamwork and communication.",
    ],
    image: IMAGES.activityOutdoor,
    imageAlt: "Students playing an outdoor vocabulary game with colourful word cards",
  },
];

export const NEWS_SORTED = [...NEWS].sort((a, b) => b.date.localeCompare(a.date));

export function getPost(slug: string) {
  return NEWS.find((p) => p.slug === slug);
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
