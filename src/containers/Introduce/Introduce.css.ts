import { style } from '@vanilla-extract/css';
import { flex } from '@/styles/recipes.css';

export const introduceWrapper = style([
  flex({ align: 'center', direction: 'column' }),
  {
    width: '100vw',
    paddingTop: 86,
  },
]);

export const sloganStyle = style({
  textAlign: 'center',
});

export const searchBarStyle = style({
  marginTop: 55,
  marginBottom: 36,
});
