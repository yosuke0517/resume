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
    expect(featured.period).toBe("2026/01〜");
  });

  it("explains why DDD-lite was selected", () => {
    const inventoryProject = resume.experiences.find((experience) => experience.no === "13");

    expect(inventoryProject?.achievements.join(" ")).toContain("純粋なDDD");
    expect(inventoryProject?.achievements.join(" ")).toContain("ブランド型");
    expect(inventoryProject?.achievements.join(" ")).toContain("UseCase / Serviceに集約");
    expect(inventoryProject?.achievements.join(" ")).toContain("チーム学習コスト");
  });

  it("provides expandable evidence for the featured project's achievements", () => {
    const featuredProject = resume.experiences.find((experience) => experience.no === "14");

    expect(featuredProject?.achievements).toHaveLength(6);
    expect(featuredProject?.achievements).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          summary: expect.stringContaining("テスト基盤"),
          details: expect.arrayContaining([
            expect.stringContaining("MSWのライフサイクル"),
            expect.stringContaining("バックエンドのリリースを待たず")
          ])
        }),
        expect.objectContaining({
          summary: expect.stringContaining("コード品質"),
          details: expect.arrayContaining([
            expect.stringContaining("Claude CodeとCodex"),
            expect.stringContaining("自己改善ループ")
          ])
        }),
        expect.objectContaining({
          summary: expect.stringContaining("テスティングトロフィー"),
          details: expect.arrayContaining([
            expect.stringContaining("Storybookのストーリー"),
            expect.stringContaining("カバレッジ")
          ])
        }),
        expect.objectContaining({
          summary: expect.stringContaining("TanStack Query"),
          details: expect.arrayContaining([
            expect.stringContaining("無効化漏れ")
          ])
        }),
        expect.objectContaining({
          summary: expect.stringContaining("デザインシステム"),
          details: expect.arrayContaining([
            expect.stringContaining("デザイントークン"),
            expect.stringContaining("コンポーネント・props"),
            expect.stringContaining("段階的に適用")
          ])
        }),
        expect.objectContaining({
          summary: expect.stringContaining("DDD + Clean Architecture"),
          details: expect.arrayContaining([
            expect.stringContaining("ユースケース単位のテスト")
          ])
        })
      ])
    );
  });

  it("preserves education and employment history before the project list", () => {
    expect(resume.education).toEqual([
      {
        period: "2012/04〜2017/03",
        organization: "サイバー大学 IT総合学部",
        description: expect.stringContaining("在職しながら通信制")
      }
    ]);
    expect(resume.employmentHistory).toEqual([
      expect.objectContaining({
        period: "2009/04〜2017/04",
        organization: "株式会社豊田自動織機",
        description: expect.stringContaining("品質管理")
      }),
      expect.objectContaining({
        period: "2017/12〜2018/12",
        organization: "株式会社日本オーエー研究所",
        description: expect.stringContaining("東京メトロ管制管理システム")
      }),
      expect.objectContaining({
        period: "2019/01〜2021/03",
        organization: "株式会社ROSSO",
        description: expect.stringContaining("電通デジタル社内")
      }),
      expect.objectContaining({
        period: "2021/04〜2021/12",
        organization: "フリーランス"
      }),
      expect.objectContaining({
        period: "2022/01〜現在",
        organization: "法人設立（1人法人・代表）"
      })
    ]);
  });
});
