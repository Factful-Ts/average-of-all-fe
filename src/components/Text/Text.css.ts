import { recipe } from '@vanilla-extract/recipes';
import { createVar } from '@vanilla-extract/css';
import { vars } from '@/styles';

export const dynamicFontSize = createVar();
export const dynamicFontWeight = createVar();
export const dynamicFontColor = createVar();

export const textStyle = recipe({
  base: {
    fontSize: dynamicFontSize,
    fontWeight: dynamicFontWeight,
    color: dynamicFontColor,
  },
  variants: {
    primary: {
      true: {
        color: vars.themeColor.color.primary,
      },
    },
    secondary: {
      true: {
        color: vars.themeColor.color.secondary,
      },
    },
    inline: {
      true: {
        lineHeight: 1,
      },
    },
  },
});
