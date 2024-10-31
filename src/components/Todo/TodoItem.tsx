import { Task } from '@interfaces';
import React from 'react';

interface TodoItemProps {
  task: Task;
  index: number;
  toggleTask: (index: number) => void;
  deleteTask: (index: number) => void;
}

export const TodoItem = React.memo(({ task, index, toggleTask, deleteTask }: TodoItemProps) => (
  <div className='flex items-center justify-between border-b border-gray-200 p-2 dark:border-gray-500'>
    <div className='flex items-center gap-2'>
      <input
        type='checkbox'
        checked={task.completed}
        onChange={() => toggleTask(index)}
        className='h-4 w-4'
      />
      <span className={`text-lg ${task.completed ? 'text-gray-400 line-through' : ''}`}>
        {task.text}
      </span>
    </div>
    <button onClick={() => deleteTask(index)} className='text-sm text-red-500 hover:text-red-700'>
      Удалить
    </button>
  </div>
));
