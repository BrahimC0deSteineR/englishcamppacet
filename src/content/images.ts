// Temporary photography. Replace files in src/assets with real school photos
// (keep the same file names) and every page updates automatically.
import heroStudents from "@/assets/hero-students.jpg";
import heroBackdrop from "@/assets/hero-backdrop.jpg";
import programKids from "@/assets/program-kids.jpg";
import programTeens from "@/assets/program-teens.jpg";
import programAdults from "@/assets/program-adults.jpg";
import activityOutdoor from "@/assets/activity-outdoor.jpg";
import activityCampfire from "@/assets/activity-campfire.jpg";
import activityGroup from "@/assets/activity-group.jpg";
import facilityLibrary from "@/assets/facility-library.jpg";
import facilityCampus from "@/assets/facility-campus.jpg";
import teacher1 from "@/assets/teacher-1.jpg";
import teacher2 from "@/assets/teacher-2.jpg";
import teacher3 from "@/assets/teacher-3.jpg";
// Real camp photos (CDN-hosted).
import campGroupBanner from "@/assets/camp-group-banner.jpg.asset.json";
import campGroupPendopo from "@/assets/camp-group-pendopo.jpg.asset.json";
import campGroupSunny from "@/assets/camp-group-sunny.jpg.asset.json";

export const IMAGES = {
  heroStudents,
  heroBackdrop,
  programKids,
  programTeens,
  programAdults,
  activityOutdoor,
  activityCampfire,
  activityGroup,
  facilityLibrary,
  facilityCampus,
  teacher1,
  teacher2,
  teacher3,
  campGroupBanner: campGroupBanner.url,
  campGroupPendopo: campGroupPendopo.url,
  campGroupSunny: campGroupSunny.url,
};
