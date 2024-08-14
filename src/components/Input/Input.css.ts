import { style } from '@vanilla-extract/css';
import { vars } from '@/styles';
import { flex } from '@/styles/recipes.css';
import { recipe } from '@vanilla-extract/recipes';

export const inputWrapperBase = style([
  flex({ align: 'center', justify: 'center' }),
  {
    padding: '14px 0',
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
    padding: '0 24px',
  },
  variants: {
    primary: {
      true: {
        color: vars.themeColor.color.primaryFontColor,
        caretColor: vars.themeColor.color.primary,
      },
      false: {
        color: vars.themeColor.color.secondaryFontColor,
        caretColor: vars.themeColor.color.secondaryFontColor,
      },
    },
    disabled: {
      true: {
        cursor: 'not-allowed',
      },
    },
    leftSection: {
      true: {
        paddingLeft: 0,
      },
    },
    rightSection: {
      true: {
        paddingRight: 0,
      },
    },
  },
});

const sectionStyleBase = style([
  flex({ align: 'center', justify: 'center' }),
  {
    fill: vars.themeColor.color.primaryFontColor,
  },
]);

export const sectionStyle = recipe({
  base: sectionStyleBase,
  variants: {
    leftSection: {
      true: {
        paddingLeft: 30,
        paddingRight: 14,
      },
    },
    rightSection: {
      true: {
        paddingRight: 30,
        paddingLeft: 14,
      },
    },
  },
});

export const focusedSectionStyle = recipe({
  variants: {
    primary: {
      true: {
        fill: vars.themeColor.color.primary,
      },
      false: {
        fill: vars.themeColor.color.secondary,
      },
    },
  },
});
