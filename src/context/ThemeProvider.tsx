import { createContext, ReactElement, useEffect, useState } from 'react';
import { themeToggle } from '../utils/themeToggle';

export const ThemeContext = createContext<any>('');

export default function ThemeProvider({
  children,
}: {
  children: ReactElement;
}) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    themeToggle(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
