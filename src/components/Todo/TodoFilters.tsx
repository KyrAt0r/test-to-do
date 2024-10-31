import { Button } from '@shared/components';

interface TodoFiltersProps {
  completedCount: number;
  incompleteCount: number;
  filter: 'all' | 'completed' | 'incomplete';
  setFilter: (filter: 'all' | 'completed' | 'incomplete') => void;
}

export const TodoFilters = ({ completedCount, incompleteCount, filter, setFilter }: TodoFiltersProps) => {
  return (
    <div className='mt-4 flex items-center justify-between gap-2 border-t pt-4 dark:border-gray-500'>
      <Button onClick={() => setFilter('all')} isActive={filter === 'all'} variant='primary' size='medium'>
        Все
      </Button>
      <Button onClick={() => setFilter('completed')} isActive={filter === 'completed'} variant='primary' size='medium'>
        Выполненные ({completedCount})
      </Button>
      <Button
        onClick={() => setFilter('incomplete')}
        isActive={filter === 'incomplete'}
        variant='primary'
        size='medium'
      >
        Невыполненные ({incompleteCount})
      </Button>
    </div>
  );
};
