import { createGlobalTheme } from '@vanilla-extract/css';
import { ColorsType, VarsType } from './theme.types';

const lightColors: ColorsType = {
  background: '#ffffff',
  text: '#000000',
  primary: '#5a81fa',
  secondary: '#2c3d8f',
};

const darkColors: ColorsType = {
  background: '#000000',
  text: '#ffffff',
  primary: '#5a81fa',
  secondary: '#2c3d8f',
};

export const vars: VarsType = createGlobalTheme(':root', {
  lightColors,
  darkColors,
});
