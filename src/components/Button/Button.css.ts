import { style } from '@vanilla-extract/css';
import { vars } from '@/styles';
import { recipe } from '@vanilla-extract/recipes';

const buttonStyleBase = style({
  fontSize: 14,
  fontWeight: 700,
  border: 'none',
  borderRadius: '3em',
  cursor: 'pointer',
  display: 'inline-block',
  lineHeight: 1,
});

export const buttonStyle = recipe({
  base: buttonStyleBase,
  variants: {
    primary: {
      true: {
        backgroundColor: vars.themeColor.color.primary,
      },
      false: {
        backgroundColor: vars.themeColor.color.secondary,
      },
    },
    size: {
      small: {
        padding: '12px 14px',
      },
      medium: {
        padding: '16px 24px',
      },
      large: {
        padding: '20px 30px',
      },
    },
  },
});
