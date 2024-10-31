export const TodoCounter = ({ total }: { total: number }) => {
  return (
    <div className='mt-4 flex flex-col gap-2 border-t pt-4 dark:border-gray-500'>
      <p className='text-sm text-gray-600 dark:text-gray-200'>
        Всего задач: <span className='font-semibold'>{total}</span>
      </p>
    </div>
  );
};
