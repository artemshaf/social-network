import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { TemplateName } from "../";

describe("<TemplateName />", () => {
  test("it should mount", () => {
    render(<TemplateName />);

    const templateName = screen.getByTestId("TemplateName");

    expect(templateName).toBeInTheDocument();
  });
});