import { style } from '@vanilla-extract/css';
import { vars } from '@/styles';

export const buttonStyle = style({
  fontSize: 14,
  fontWeight: 700,
  padding: '11px 20px',
  border: 'none',
  borderRadius: '3em',
  cursor: 'pointer',
  display: 'inline-block',
  lineHeight: 1,
});

export const primaryButton = style({
  backgroundColor: vars.themeColor.color.primary,
});

export const secondaryButton = style({
  backgroundColor: vars.themeColor.color.secondary,
});
