import { style } from '@vanilla-extract/css';
import { vars } from '@/core/global.css';

export const buttonStyle = style({
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
});

export const primaryButton = style({
  backgroundColor: vars.themeColor.color.primaryBackground,
});

export const secondaryButton = style({
  backgroundColor: vars.themeColor.color.secondaryBackground,
});
