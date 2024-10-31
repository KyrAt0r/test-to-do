import { TodoItem } from '@components/Todo/TodoItem.tsx';
import { Task } from '@interfaces';
import React from 'react';

interface TodoListProps {
  tasks: Task[];
  toggleTask: (index: number) => void;
  deleteTask: (index: number) => void;
}

export const TodoList = React.memo(({ tasks, toggleTask, deleteTask }: TodoListProps) => (
  <div className='mt-4 max-h-96 overflow-y-auto rounded-lg border border-gray-300 dark:border-gray-500'>
    {tasks.length > 0 ? (
      tasks.map((task, index) => (
        <TodoItem key={index} task={task} index={index} toggleTask={toggleTask} deleteTask={deleteTask} />
      ))
    ) : (
      <p className='p-4 text-center text-gray-500 dark:text-gray-200'>Нет задач</p>
    )}
  </div>
));
