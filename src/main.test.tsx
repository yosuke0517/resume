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
});
