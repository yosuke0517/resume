import { screen } from "@testing-library/react";
import { beforeAll, describe, expect, it } from "vitest";

describe("resume achievements", () => {
  beforeAll(async () => {
    document.body.innerHTML = '<div id="root"></div>';
    await import("./main");
  });

  it("renders the featured project's evidence as collapsed disclosures", async () => {
    const summaries = await screen.findAllByText(/設計・整備|体系化|カバレッジ改善|責務境界/);
    const disclosures = document.querySelectorAll("details.achievement-details");

    expect(summaries).toHaveLength(4);
    expect(disclosures).toHaveLength(4);
    expect([...disclosures].every((details) => !details.hasAttribute("open"))).toBe(true);
  });

  it("renders education and employment history before the project timeline", async () => {
    const backgroundHeading = await screen.findByRole("heading", { name: "学歴・所属企業" });
    const firstProject = screen.getByText("No. 14");

    expect(screen.getByText("サイバー大学 IT総合学部")).toBeInTheDocument();
    expect(screen.getByText("株式会社豊田自動織機")).toBeInTheDocument();
    expect(screen.getByText("株式会社日本オーエー研究所")).toBeInTheDocument();
    expect(screen.getByText("株式会社ROSSO")).toBeInTheDocument();
    expect(screen.getByText(/東京メトロ管制管理システム/)).toBeInTheDocument();
    expect(backgroundHeading.compareDocumentPosition(firstProject) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  });
});
