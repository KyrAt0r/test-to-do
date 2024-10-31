import { render, screen } from '@testing-library/react';
import { describe, it, vi } from 'vitest';

import { TodoList } from '../src/components/Todo/TodoList';

const toggleTask = vi.fn();
const deleteTask = vi.fn();

describe('TodoList component', () => {

  it('отображает сообщение "Нет задач", если список пуст', () => {
    render(<TodoList tasks={[]} toggleTask={toggleTask} deleteTask={deleteTask} />);

    expect(screen.getByText('Нет задач')).toBeInTheDocument();
  });
});
