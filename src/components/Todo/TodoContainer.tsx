export const TodoContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='mx-auto max-w-lg rounded-lg bg-white p-6 shadow-md dark:bg-gray-700'>
      {children}
    </div>
  );
};
