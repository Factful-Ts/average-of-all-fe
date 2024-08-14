import { createGlobalTheme } from '@vanilla-extract/css';
import { ColorsType, ThemeColorsType } from '@/types';

const lightColors: ThemeColorsType = {
  background: '#ffffff',
  text: '#000000',

  primary: '#285bf8',
  primary50: '#eef2fe',
  primary100: '#d6dffe',
  primary200: '#a4bafc',
  primary300: '#8da7fb',
  primary400: '#5a81fa',
  primary500: '#285bf8',
  primary600: '#073ee7',
  primary700: '#052a9d',
  primary800: '#031d6b',
  primary900: '#020f3a',

  secondary: '#2c3d8f',
  secondary50: '#7d8cd7',
  secondary100: '#566acb',
  secondary200: '#4259c5',
  secondary300: '#384eb6',
  secondary400: '#2c3d8f',
  secondary500: '#202c68',
  secondary600: '#1a2454',
  secondary700: '#141c41',
  secondary800: '#080b1a',
  secondary900: '#020306',

  grayscale50: '#f8f9fa',
  grayscale100: '#f1f3f5',
  grayscale200: '#e9ecef',
  grayscale300: '#dee2e6',
  grayscale400: '#ced4da',
  grayscale500: '#adb5bd',
  grayscale600: '#868e96',
  grayscale700: '#495057',
  grayscale800: '#343a40',
  grayscale900: '#212529',
};

const darkColors: ThemeColorsType = {
  background: '#ffffff',
  text: '#000000',

  primary: '#285bf8',
  primary50: '#eef2fe',
  primary100: '#d6dffe',
  primary200: '#a4bafc',
  primary300: '#8da7fb',
  primary400: '#5a81fa',
  primary500: '#285bf8',
  primary600: '#073ee7',
  primary700: '#052a9d',
  primary800: '#031d6b',
  primary900: '#020f3a',

  secondary: '#2c3d8f',
  secondary50: '#7d8cd7',
  secondary100: '#566acb',
  secondary200: '#4259c5',
  secondary300: '#384eb6',
  secondary400: '#2c3d8f',
  secondary500: '#202c68',
  secondary600: '#1a2454',
  secondary700: '#141c41',
  secondary800: '#080b1a',
  secondary900: '#020306',

  grayscale50: '#f8f9fa',
  grayscale100: '#f1f3f5',
  grayscale200: '#e9ecef',
  grayscale300: '#dee2e6',
  grayscale400: '#ced4da',
  grayscale500: '#adb5bd',
  grayscale600: '#868e96',
  grayscale700: '#495057',
  grayscale800: '#343a40',
  grayscale900: '#212529',
};

export const colors: ColorsType = createGlobalTheme(':root', {
  lightColors,
  darkColors,
});
