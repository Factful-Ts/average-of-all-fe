import { recipe } from '@vanilla-extract/recipes';

export const flex = recipe({
  base: {
    display: 'flex',
  },
  variants: {
    justify: {
      center: {
        justifyContent: 'center',
      },
      spaceAround: {
        justifyContent: 'space-around',
      },
      spaceBetween: {
        justifyContent: 'space-between',
      },
    },
    align: {
      center: {
        alignItems: 'center',
      },
      right: {
        marginLeft: 'auto',
      },
    },
    direction: {
      row: {
        flexDirection: 'row',
      },
      column: {
        flexDirection: 'column',
      },
    },
  },
});
