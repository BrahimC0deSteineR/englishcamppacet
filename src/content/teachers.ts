import { IMAGES } from "./images";

/**
 * TEACHER PROFILES — placeholders. Replace names, introductions, qualifications
 * and experience with verified information. Photos are temporary.
 */
export type Teacher = {
  name: string;
  role: string;
  intro: string;
  qualifications: string;
  experience: string;
  image: string;
};

export const TEACHERS: Teacher[] = [
  {
    name: "[Teacher Name]",
    role: "English Teacher · Kids Program",
    intro:
      "[Short introduction] Describe the teacher's teaching style and what students enjoy most about their classes.",
    qualifications: "[Qualifications — to be confirmed]",
    experience: "[Teaching experience — to be confirmed]",
    image: IMAGES.teacher1,
  },
  {
    name: "[Teacher Name]",
    role: "English Teacher · Conversation Club",
    intro:
      "[Short introduction] Describe the teacher's background and how they help students speak with confidence.",
    qualifications: "[Qualifications — to be confirmed]",
    experience: "[Teaching experience — to be confirmed]",
    image: IMAGES.teacher2,
  },
  {
    name: "[Teacher Name]",
    role: "English Teacher · Teens Program",
    intro:
      "[Short introduction] Describe the teacher's favourite subjects and activities they lead at English Camp.",
    qualifications: "[Qualifications — to be confirmed]",
    experience: "[Teaching experience — to be confirmed]",
    image: IMAGES.teacher3,
  },
];
