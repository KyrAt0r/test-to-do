import { Task } from '@interfaces';
import { useCallback, useEffect, useState } from 'react';

const useTasks = () => {
  const loadTasks = (): Task[] => {
    try {
      const storedTasks = localStorage.getItem('tasks');
      return storedTasks ? JSON.parse(storedTasks) : [];
    } catch {
      return [];
    }
  };

  const [tasks, setTasks] = useState<Task[]>(loadTasks);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = useCallback((text: string) => {
    setTasks((prevTasks) => [...prevTasks, { text, completed: false }]);
  }, []);

  const toggleTask = useCallback((index: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, idx) => (idx === index ? { ...task, completed: !task.completed } : task))
    );
  }, []);

  const deleteTask = useCallback((index: number) => {
    setTasks((prevTasks) => prevTasks.filter((_, idx) => idx !== index));
  }, []);

  return { tasks, addTask, toggleTask, deleteTask };
};

export default useTasks;
