import { Task } from '@interfaces';
import { useState } from 'react';

const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (text: string) => {
    setTasks([...tasks, { text, completed: false }]);
  };

  const toggleTask = (index: number) => {
    setTasks(
      tasks.map((task, idx) => (idx === index ? { ...task, completed: !task.completed } : task))
    );
  };

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, idx) => idx !== index));
  };

  return { tasks, addTask, toggleTask, deleteTask };
};

export default useTasks;
