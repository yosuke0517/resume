import type { Experience, Skill } from "../resume-data";

export const getCurrentSkills = (skills: Skill[]) =>
  skills
    .filter((skill) => skill.current)
    .sort((a, b) => a.priority - b.priority);

export const getFeaturedExperience = (experiences: Experience[]) => {
  const featured = experiences.find((experience) => experience.featured);

  if (!featured) {
    return experiences[0];
  }

  return featured;
};
