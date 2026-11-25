import { screen, within } from "@testing-library/react";
import { beforeAll, describe, expect, it } from "vitest";

describe("resume achievements", () => {
  beforeAll(async () => {
    document.body.innerHTML = '<div id="root"></div>';
    await import("./main");
  });

  it("renders the four expertise and development themes", async () => {
    const section = await screen.findByRole("region", { name: "専門性と開発への取り組み" });
    expect(within(section).getAllByRole("listitem")).toHaveLength(4);
    expect(within(section).getByText(/フロントエンドの専門性：Next.js/)).toBeInTheDocument();
    expect(within(section).getByText(/設計と技術選定：Clean ArchitectureやDDD/)).toBeInTheDocument();
    expect(within(section).getByText(/AIを活用した開発：CodexやClaude Code/)).toBeInTheDocument();
    expect(within(section).getByText(/継続的な学習：技術動向に加え、CS・データベース・システム設計/)).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "LLMによる要点整理" })).not.toBeInTheDocument();
  });

  it("renders the featured project's evidence as expanded disclosures", async () => {
    await screen.findByText(/モノレポ（4アプリ・9パッケージ）を立ち上げ/);
    const disclosures = document.querySelectorAll("details.achievement-details");

    expect(disclosures).toHaveLength(5);
    expect([...disclosures].every((details) => details.hasAttribute("open"))).toBe(true);
  });

  it("renders education and employment history before the project timeline", async () => {
    const backgroundHeading = await screen.findByRole("heading", { name: "学歴・所属企業" });
    const firstProject = screen.getByText("No. 14");

    expect(screen.getByText("サイバー大学 IT総合学部")).toBeInTheDocument();
    expect(screen.getByText("株式会社豊田自動織機")).toBeInTheDocument();
    expect(screen.getByText("株式会社日本オーエー研究所")).toBeInTheDocument();
    expect(screen.getByText("株式会社ROSSO")).toBeInTheDocument();
    expect(screen.getByText(/東京メトロ管制管理システム/)).toBeInTheDocument();
    expect(screen.getByText("フリーランス")).toBeInTheDocument();
    expect(screen.getByText("法人設立（1人法人・代表）")).toBeInTheDocument();
    expect(backgroundHeading.compareDocumentPosition(firstProject) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  });
});
