import { describe, expect, it } from "vitest";
import { getCurrentSkills, getFeaturedExperience } from "./resume";
import { resume } from "../resume-data";

describe("resume data helpers", () => {
  it("returns currently used skills first", () => {
    const skills = getCurrentSkills(resume.skills);

    expect(skills.map((skill) => skill.name).slice(0, 5)).toEqual([
      "TypeScript",
      "Next.js",
      "React",
      "Go",
      "Docker"
    ]);
  });

  it("promotes the active or most recent project as featured experience", () => {
    const featured = getFeaturedExperience(resume.experiences);

    expect(featured.title).toBe("HR管理Webアプリ開発支援");
    expect(featured.period).toBe("2026/1〜");
  });

  it("explains why DDD-lite was selected", () => {
    const inventoryProject = resume.experiences.find((experience) => experience.no === "13");

    expect(inventoryProject?.achievements.join(" ")).toContain("純粋なDDD");
    expect(inventoryProject?.achievements.join(" ")).toContain("ブランド型");
    expect(inventoryProject?.achievements.join(" ")).toContain("UseCase / Serviceに集約");
    expect(inventoryProject?.achievements.join(" ")).toContain("チーム学習コスト");
  });
});
