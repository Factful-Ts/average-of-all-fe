import { createGlobalTheme, createTheme, createThemeContract, globalStyle } from '@vanilla-extract/css';
import { colors } from './colors.css';

export const global = createGlobalTheme(':root', {
  fontFamily: {
    pretendard: `var(--font-pretendard)`,
  },
  fontSize: {
    xLarge: '48px',
    large: '36px',
    medium: '28px',
    regular: '18px',
    small: '16px',
    xSmall: '14px',
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    large: '700',
  },
});

const themeColor = createThemeContract({
  color: {
    primary: null,
    primary50: null,
    secondary: null,
    primaryFontColor: null,
    // secondaryFontColor: null,
    // borderColor: null,
  },
});

export const lightTheme: string = createTheme(themeColor, {
  color: {
    primary: colors.lightColors.primary,
    primary50: colors.lightColors.primary50,
    secondary: colors.lightColors.secondary,
    primaryFontColor: colors.lightColors.text,
  },
});

export const darkTheme: string = createTheme(themeColor, {
  color: {
    primary: colors.darkColors.primary,
    primary50: colors.darkColors.primary50,
    secondary: colors.darkColors.secondary,
    primaryFontColor: colors.darkColors.text,
  },
});

export const vars = { ...global, themeColor };

globalStyle('body', {
  backgroundColor: `hsl(${vars.themeColor.color.primary})`,
});
