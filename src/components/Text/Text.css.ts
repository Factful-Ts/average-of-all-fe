import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/styles';

export const textStyle = recipe({
  base: {
    color: vars.themeColor.color.primaryFontColor,
  },
  variants: {
    inline: {
      true: {
        lineHeight: 1,
      },
    },
    weight: {
      normal: {
        fontWeight: 'normal',
      },
      bold: {
        fontWeight: 'bold',
      },
      lighter: {
        fontWeight: 'lighter',
      },
      bolder: {
        fontWeight: 'bolder',
      },
      100: {
        fontWeight: '100',
      },
      200: {
        fontWeight: '200',
      },
      300: {
        fontWeight: '300',
      },
      400: {
        fontWeight: '400',
      },
      500: {
        fontWeight: '500',
      },
      600: {
        fontWeight: '600',
      },
      700: {
        fontWeight: '700',
      },
      800: {
        fontWeight: '800',
      },
      900: {
        fontWeight: '900',
      },
    },
  },
});
