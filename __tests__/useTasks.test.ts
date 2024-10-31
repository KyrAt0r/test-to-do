import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";

import useTasks from "../src/hooks/useTasks";

describe("useTasks hook", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("добавляет задачу", () => {
    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.addTask("Тестовая задача");
    });

    expect(result.current.tasks).toEqual([
      { text: "Тестовая задача", completed: false },
    ]);
  });

  it("переключает статус задачи", () => {
    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.addTask("Тестовая задача");
    });

    expect(result.current.tasks[0]).toBeDefined();

    act(() => {
      result.current.toggleTask(0);
    });

    expect(result.current.tasks[0].completed).toBe(true);
  });

  it("удаляет задачу", () => {
    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.addTask("Тестовая задача");
      result.current.deleteTask(0);
    });

    expect(result.current.tasks).toEqual([]);
  });
});
