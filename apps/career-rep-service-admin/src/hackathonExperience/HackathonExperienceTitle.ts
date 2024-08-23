import { HackathonExperience as THackathonExperience } from "../api/hackathonExperience/HackathonExperience";

export const HACKATHONEXPERIENCE_TITLE_FIELD = "id";

export const HackathonExperienceTitle = (
  record: THackathonExperience
): string => {
  return record.id?.toString() || String(record.id);
};
