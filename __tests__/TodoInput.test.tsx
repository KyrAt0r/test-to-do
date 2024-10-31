import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest"

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { TodoInput } from "../src/components/Todo/TodoInput";

describe("TodoInput component", () => {
  it("вызывает addTask с введенным значением", () => {
    const addTask = vi.fn();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    render(<TodoInput addTask={addTask} />);

    const input = screen.getByPlaceholderText(/введите новую задачу/i);
    const button = screen.getByRole("button", { name: /добавить/i });

    fireEvent.change(input, { target: { value: "New task" } });
    fireEvent.click(button);

    expect(addTask).toHaveBeenCalledWith("New task");
  });
});
