/**
 * Global school settings — update contact details here and they apply site-wide.
 * Leave a value empty ("") until the official detail is confirmed.
 */
export const SITE = {
  name: "English Camp",
  tagline: "Learn English. Build Confidence. Explore Your Future.",
  url: "https://englishcamppacet.com",
  locale: "en_US",

  /** WhatsApp number in international format, digits only, e.g. "62812xxxxxxx". */
  whatsappNumber: "",
  /** Public email address, e.g. "hello@englishcamppacet.com". */
  email: "",
  /** Full street address once confirmed. The area below is shown until then. */
  streetAddress: "",
  locality: "Pacet",
  region: "Mojokerto, East Java",
  country: "Indonesia",
  postalCode: "",
  /** Opening hours text, e.g. "Mon–Sat, 08:00–17:00". */
  openingHours: "",

  /** Google Maps embed URL. Replace with the school's exact pin when available. */
  mapEmbedUrl: "https://www.google.com/maps?q=Pacet,+Mojokerto,+East+Java,+Indonesia&output=embed",

  social: {
    instagram: "",
    facebook: "",
    tiktok: "",
    youtube: "",
  },
} as const;

export const FULL_ADDRESS = [SITE.streetAddress, SITE.locality, SITE.region, SITE.country]
  .filter(Boolean)
  .join(", ");

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/programs", label: "Programs" },
  { to: "/teachers", label: "Teachers" },
  { to: "/gallery", label: "Gallery" },
  { to: "/news", label: "News & Events" },
  { to: "/admissions", label: "Admissions" },
  { to: "/contact", label: "Contact Us" },
] as const;
