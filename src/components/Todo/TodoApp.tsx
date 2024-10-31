import { TodoContainer } from '@components/Todo/TodoContainer.tsx';
import { TodoCounter } from '@components/Todo/TodoCounter.tsx';
import { TodoFilters } from '@components/Todo/TodoFilters.tsx';
import { TodoInput } from '@components/Todo/TodoInput.tsx';
import { TodoList } from '@components/Todo/TodoList.tsx';
import Header from '@components/UI/Header.tsx';
import { useFilteredTasks, useTasks } from '@hooks';

export const TodoApp = () => {
  const { tasks, addTask, toggleTask, deleteTask } = useTasks();
  const { filteredTasks, filter, setFilter, completedCount, incompleteCount } =
    useFilteredTasks(tasks);

  return (
    <div className='flex min-h-screen flex-col bg-background-light text-text-light dark:bg-background-dark dark:text-text-dark'>
      <Header />
      <main className='flex-1 p-4'>
        <TodoContainer>
          <TodoFilters
            setFilter={setFilter}
            filter={filter}
            completedCount={completedCount}
            incompleteCount={incompleteCount}
          />
          <TodoInput addTask={addTask} />
          <TodoList tasks={filteredTasks} toggleTask={toggleTask} deleteTask={deleteTask} />
          <TodoCounter total={tasks.length} />
        </TodoContainer>
      </main>
    </div>
  );
};
