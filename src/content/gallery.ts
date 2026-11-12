import { IMAGES } from "./images";

export const GALLERY_CATEGORIES = ["All", "Classroom", "Art & Culture", "Cooking", "Outdoor", "Events"] as const;
export type GalleryCategory = Exclude<(typeof GALLERY_CATEGORIES)[number], "All">;

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  category: GalleryCategory;
  /** Display shape. Wide group photos use "16/9" so nobody is cut off. */
  ratio?: "4/3" | "3/4" | "16/9";
};

/** Real photos from the English Camp. Add, remove or reorder here. */
export const GALLERY: GalleryItem[] = [
  { src: IMAGES.campGroupPendopo, alt: "Children and instructors with the English & Cultural Camp banner in front of a traditional Javanese meeting hall, mountains behind", caption: "Camp group photo in front of the pendopo", category: "Events", ratio: "16/9" },
  { src: IMAGES.campEnglishClass, alt: "Children in a colourful English class with two camp instructors", caption: "English class with our instructors", category: "Classroom" },
  { src: IMAGES.campCookingClass, alt: "Smiling children in a cooking class in a rustic wooden kitchen", caption: "Cooking class in the camp kitchen", category: "Cooking" },
  { src: IMAGES.campPaintingHat, alt: "A young girl painting a traditional conical hat", caption: "Painting a traditional caping hat", category: "Art & Culture" },
  { src: IMAGES.campFeedingTurtles, alt: "Children feeding turtles outdoors", caption: "Feeding the turtles", category: "Outdoor" },
  { src: IMAGES.campCreativeWorkshop, alt: "Children at an open-air creative workshop", caption: "Open-air creative workshop", category: "Art & Culture" },
  { src: IMAGES.campKitchenAprons, alt: "Children in green aprons in a wooden kitchen", caption: "Little chefs in green aprons", category: "Cooking" },
  { src: IMAGES.campStrawberryKiosk, alt: "A wooden kiosk selling fresh strawberries", caption: "Fresh strawberries from Pacet", category: "Outdoor" },
  { src: IMAGES.campBasketFloral, alt: "Floral painting on a woven prang-grass basket", caption: "Floral painting on a woven basket", category: "Art & Culture" },
  { src: IMAGES.campPaintingOutdoor, alt: "Children painting together outdoors", caption: "Outdoor painting session", category: "Art & Culture" },
  { src: IMAGES.campBasketBamboo, alt: "Colourful painting on a bamboo basket", caption: "Colourful bamboo basket art", category: "Art & Culture" },
  { src: IMAGES.campGroupWide, alt: "Wide shot of the camp group with the banner in front of the wooden meeting hall", caption: "The whole camp family", category: "Events", ratio: "16/9" },
  { src: IMAGES.campGroupEntrance, alt: "Camp group at the pavilion entrance with hanging lanterns", caption: "At the pavilion entrance", category: "Events", ratio: "16/9" },
  { src: IMAGES.campGroupSunny, alt: "Camp group photo in the sunny courtyard", caption: "Sunny day at camp", category: "Events", ratio: "16/9" },
];
