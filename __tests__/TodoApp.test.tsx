import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest"

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { TodoApp } from "../src/components/Todo/TodoApp";

describe("TodoApp component", () => {
  it("добавляет и отображает задачу", () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    render(<TodoApp />);

    const input = screen.getByPlaceholderText(/введите новую задачу/i);
    const button = screen.getByRole("button", { name: /добавить/i });

    fireEvent.change(input, { target: { value: "New task" } });
    fireEvent.click(button);

    expect(screen.getByText(/New task/i)).toBeInTheDocument();
  });
});
