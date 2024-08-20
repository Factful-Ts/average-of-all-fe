import { recipe } from '@vanilla-extract/recipes';
import { createVar } from '@vanilla-extract/css';

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
    inline: {
      true: {
        lineHeight: 1,
      },
    },
  },
});
