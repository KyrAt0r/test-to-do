import { Task } from '@interfaces';
import { useMemo, useState } from 'react';

type Filter = 'all' | 'completed' | 'incomplete';

const useFilteredTasks = (tasks: Task[]) => {
  const [filter, setFilter] = useState<Filter>('all');

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      if (filter === 'completed') return task.completed;
      if (filter === 'incomplete') return !task.completed;
      return true;
    });
  }, [tasks, filter]);

  const completedCount = useMemo(() => tasks.filter((task) => task.completed).length, [tasks]);
  const incompleteCount = useMemo(() => tasks.filter((task) => !task.completed).length, [tasks]);

  return { filteredTasks, filter, setFilter, completedCount, incompleteCount };
};

export default useFilteredTasks;
