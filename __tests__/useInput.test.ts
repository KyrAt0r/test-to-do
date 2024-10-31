import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest"

import useInput from "../src/hooks/useInput";

describe("useInput hook", () => {
  it("обновляет значение", () => {
    const { result } = renderHook(() => useInput(""));

    act(() => {
      result.current.onChange({
        target: { value: "Новое значение" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.value).toBe("Новое значение");
  });

  it("сбрасывает значение", () => {
    const { result } = renderHook(() => useInput("Инициализация"));

    act(() => {
      result.current.reset();
    });

    expect(result.current.value).toBe("");
  });
});
