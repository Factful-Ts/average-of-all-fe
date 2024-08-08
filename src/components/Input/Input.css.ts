import { style } from '@vanilla-extract/css';
import { vars } from '@/styles';
import { flex } from '@/styles/recipes.css';

export const inputWrapper = style([
  flex({ align: 'center', justify: 'center' }),
  {
    backgroundColor: vars.themeColor.color.primary50,
    padding: '14px 30px',
    borderRadius: '27px',
  },
]);

export const inputStyle = style({
  color: vars.themeColor.color.primaryFontColor,
  backgroundColor: 'transparent',
  border: 'none',
  outline: 'none',
});
