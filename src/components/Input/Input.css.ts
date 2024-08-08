import { style } from '@vanilla-extract/css';
import { vars } from '@/styles';
import { flex } from '@/styles/recipes.css';
import { recipe } from '@vanilla-extract/recipes';

export const inputWrapperBase = style([
  flex({ align: 'center', justify: 'center' }),
  {
    padding: '14px 30px',
    borderRadius: '27px',
  },
]);

export const inputWrapper = recipe({
  base: inputWrapperBase,
  variants: {
    primary: {
      true: {
        backgroundColor: vars.themeColor.color.primary50,

        selectors: {
          '&:focus-within': {
            boxShadow: `0 0 0 2px ${vars.themeColor.color.primary} inset`,
          },
        },
      },
      false: {
        backgroundColor: vars.themeColor.color.secondary50,

        selectors: {
          '&:focus-within': {
            boxShadow: `0 0 0 2px ${vars.themeColor.color.secondary} inset`,
          },
        },
      },
    },
    disabled: {
      true: {
        backgroundColor: vars.themeColor.color.grayscale200,
        cursor: 'not-allowed',

        selectors: {
          '&:focus-within': {
            boxShadow: 'none',
          },
        },
      },
    },
  },
});

export const inputStyle = recipe({
  base: {
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
  },
  variants: {
    primary: {
      true: {
        color: vars.themeColor.color.primaryFontColor,
      },
      false: {
        color: vars.themeColor.color.secondaryFontColor,
      },
    },
    disabled: {
      true: {
        cursor: 'not-allowed',
      },
    },
  },
});
