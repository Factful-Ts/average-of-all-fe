import { createGlobalTheme } from '@vanilla-extract/css';
import { ThemeColorsType, ColorsType } from './theme.types';

const lightColors: ThemeColorsType = {
  background: '#ffffff',
  text: '#000000',
  primary: '#5a81fa',
  secondary: '#2c3d8f',
};

const darkColors: ThemeColorsType = {
  background: '#000000',
  text: '#ffffff',
  primary: '#5a81fa',
  secondary: '#2c3d8f',
};

export const colors: ColorsType = createGlobalTheme(':root', {
  lightColors,
  darkColors,
});
