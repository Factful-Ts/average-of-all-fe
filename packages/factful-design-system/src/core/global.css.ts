import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from './colors.css';

export const lightTheme: string = style({
  vars: {
    '--background-color': vars.lightColors.background,
    '--text-color': vars.lightColors.text,
  },
});

export const darkTheme: string = style({
  vars: {
    '--background-color': vars.darkColors.background,
    '--text-color': vars.darkColors.text,
  },
});

globalStyle('body', {
  backgroundColor: 'var(--background-color)',
  color: 'var(--text-color)',
});
