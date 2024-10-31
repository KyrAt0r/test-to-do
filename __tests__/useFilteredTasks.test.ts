import { act,renderHook } from '@testing-library/react';
import { describe, expect, it } from "vitest"

import { useFilteredTasks } from '../src/hooks';
import { Task } from '../src/interfaces';

describe('useFilteredTasks', () => {
  const tasks: Task[] = [
    { text: 'Task 1', completed: true },
    { text: 'Task 2', completed: false },
    { text: 'Task 3', completed: true },
    { text: 'Task 4', completed: false },
  ];

  it('возвращает все задачи по умолчанию', () => {
    const { result } = renderHook(() => useFilteredTasks(tasks));
    expect(result.current.filteredTasks).toEqual(tasks);
    expect(result.current.filter).toBe('all');
  });

  it('фильтрует только завершенные задачи', () => {
    const { result } = renderHook(() => useFilteredTasks(tasks));
    act(() => {
      result.current.setFilter('completed');
    });
    expect(result.current.filteredTasks).toEqual([
      { text: 'Task 1', completed: true },
      { text: 'Task 3', completed: true },
    ]);
  });

  it('фильтрует только незавершенные задачи', () => {
    const { result } = renderHook(() => useFilteredTasks(tasks));
    act(() => {
      result.current.setFilter('incomplete');
    });
    expect(result.current.filteredTasks).toEqual([
      { text: 'Task 2', completed: false },
      { text: 'Task 4', completed: false },
    ]);
  });

  it('возвращает правильное количество завершенных задач', () => {
    const { result } = renderHook(() => useFilteredTasks(tasks));
    expect(result.current.completedCount).toBe(2);
  });

  it('возвращает правильное количество незавершенных задач', () => {
    const { result } = renderHook(() => useFilteredTasks(tasks));
    expect(result.current.incompleteCount).toBe(2);
  });
});
