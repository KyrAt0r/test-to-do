import { Button } from '@shared/components';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'react-feather';

const ThemeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className='fixed bottom-5 right-5 z-50'>
      <Button onClick={toggleTheme} variant='primary' size='medium'>
        {isDarkMode ? <Sun /> : <Moon />}
      </Button>
    </div>
  );
};

export default ThemeButton;
