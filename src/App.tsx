import './App.css';

import { TodoApp } from '@components/Todo/TodoApp.tsx';
import ThemeButton from '@components/UI/ThemeButton.tsx';

const App = () => {
  return (
    <>
      <TodoApp />
      <ThemeButton />
    </>
  );
};

export default App;
