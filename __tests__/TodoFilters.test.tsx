import { fireEvent,render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { TodoFilters } from '../src/components/Todo/TodoFilters';



describe('TodoFilters component', () => {
  const mockSetFilter = vi.fn();

  it('Отображает все кнопки фильтров с правильным текстом и количеством', () => {
    render(
      <TodoFilters
        completedCount={5}
        incompleteCount={10}
        filter="all"
        setFilter={mockSetFilter}
      />
    );

    expect(screen.getByText('Все')).toBeInTheDocument();
    expect(screen.getByText('Выполненные (5)')).toBeInTheDocument();
    expect(screen.getByText('Невыполненные (10)')).toBeInTheDocument();
  });

  it('Вызывает setFilter с "all" при нажатии на кнопку "Все"', () => {
    render(
      <TodoFilters
        completedCount={5}
        incompleteCount={10}
        filter="all"
        setFilter={mockSetFilter}
      />
    );

    fireEvent.click(screen.getByText('Все'));
    expect(mockSetFilter).toHaveBeenCalledWith('all');
  });


  it('Вызывает setFilter с "completed" при нажатии на кнопку "Выполненные"', () => {
    render(
      <TodoFilters
        completedCount={5}
        incompleteCount={10}
        filter="all"
        setFilter={mockSetFilter}
      />
    );

    fireEvent.click(screen.getByText('Выполненные (5)'));
    expect(mockSetFilter).toHaveBeenCalledWith('completed');
  });

  it('Вызывает setFilter с "incomplete" при нажатии на кнопку "Невыполненные"', () => {
    render(
      <TodoFilters
        completedCount={5}
        incompleteCount={10}
        filter="all"
        setFilter={mockSetFilter}
      />
    );

    fireEvent.click(screen.getByText('Невыполненные (10)'));
    expect(mockSetFilter).toHaveBeenCalledWith('incomplete');
  });

  it('Устанавливает правильное активное состояние для кнопок', () => {
    render(
      <TodoFilters
        completedCount={5}
        incompleteCount={10}
        filter="completed"
        setFilter={mockSetFilter}
      />
    );

    const allButton = screen.getByText('Все');
    const completedButton = screen.getByText('Выполненные (5)');
    const incompleteButton = screen.getByText('Невыполненные (10)');

    expect(allButton).not.toHaveClass('bg-blue-500');
    expect(completedButton).toHaveClass('bg-blue-500');
    expect(incompleteButton).not.toHaveClass('bg-blue-500');
  });
});
