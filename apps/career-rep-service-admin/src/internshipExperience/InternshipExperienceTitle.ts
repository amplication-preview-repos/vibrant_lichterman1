import { InternshipExperience as TInternshipExperience } from "../api/internshipExperience/InternshipExperience";

export const INTERNSHIPEXPERIENCE_TITLE_FIELD = "id";

export const InternshipExperienceTitle = (
  record: TInternshipExperience
): string => {
  return record.id?.toString() || String(record.id);
};
