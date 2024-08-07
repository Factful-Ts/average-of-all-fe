import { style } from '@vanilla-extract/css';
import { vars } from '@/styles';

export const inputWrapper = style({
  backgroundColor: vars.themeColor.color.primary50,
  padding: '14px 30px',
  borderRadius: '27px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const inputStyle = style({
  color: vars.themeColor.color.primaryFontColor,
  backgroundColor: 'transparent',
  border: 'none',
  outline: 'none',
});
