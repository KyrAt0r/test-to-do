import { useInput } from '@hooks';
import { Button } from '@shared/components';

interface TodoInputProps {
  addTask: (text: string) => void;
}

export const TodoInput = ({ addTask }: TodoInputProps) => {
  const { value: newTask, onChange, reset } = useInput('');

  const handleAdd = () => {
    if (newTask.trim()) {
      addTask(newTask);
      reset();
    }
  };

  return (
    <div className='mt-4 flex gap-2'>
      <input
        type='text'
        placeholder='Введите новую задачу'
        value={newTask}
        onChange={onChange}
        onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
        className='flex-1 rounded-lg border border-gray-300 px-4 py-2 hover:ring-1 focus:ring-1 focus-visible:outline-none dark:border-gray-700 dark:bg-background-dark dark:text-white'
      />
      <Button onClick={handleAdd} variant='primary' size='medium'>
        Добавить
      </Button>
    </div>
  );
};
