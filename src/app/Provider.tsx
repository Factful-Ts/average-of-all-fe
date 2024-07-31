'use client';

import { ThemeProvider } from 'next-themes';
import { darkTheme, lightTheme } from '@/styles/global.css';

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" value={{ light: lightTheme, dark: darkTheme }}>
      {children}
    </ThemeProvider>
  );
};
