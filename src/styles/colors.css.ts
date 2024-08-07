import { createGlobalTheme } from '@vanilla-extract/css';
import { ColorsType, ThemeColorsType } from '@/types';

const lightColors: ThemeColorsType = {
  background: '#ffffff',
  text: '#000000',
  primary: '#5a81fa',
  primary50: '#eef2fe',
  secondary: '#2c3d8f',
};

const darkColors: ThemeColorsType = {
  background: '#000000',
  text: '#ffffff',
  primary: '#5a81fa',
  primary50: '#eef2fe',
  secondary: '#2c3d8f',
};

export const colors: ColorsType = createGlobalTheme(':root', {
  lightColors,
  darkColors,
});
