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
    primary100: null,
    primary200: null,
    primary300: null,
    primary400: null,
    primary500: null,
    primary600: null,
    primary700: null,
    primary800: null,
    primary900: null,

    secondary: null,
    secondary50: null,
    secondary100: null,
    secondary200: null,
    secondary300: null,
    secondary400: null,
    secondary500: null,
    secondary600: null,
    secondary700: null,
    secondary800: null,
    secondary900: null,

    grayscale50: null,
    grayscale100: null,
    grayscale200: null,
    grayscale300: null,
    grayscale400: null,
    grayscale500: null,
    grayscale600: null,
    grayscale700: null,
    grayscale800: null,
    grayscale900: null,

    primaryFontColor: null,
    secondaryFontColor: null,
    // borderColor: null,
  },
});

export const lightTheme: string = createTheme(themeColor, {
  color: {
    primary: colors.lightColors.primary,
    primary50: colors.lightColors.primary50,
    primary100: colors.lightColors.primary100,
    primary200: colors.lightColors.primary200,
    primary300: colors.lightColors.primary300,
    primary400: colors.lightColors.primary400,
    primary500: colors.lightColors.primary500,
    primary600: colors.lightColors.primary600,
    primary700: colors.lightColors.primary700,
    primary800: colors.lightColors.primary800,
    primary900: colors.lightColors.primary900,

    secondary: colors.lightColors.secondary,
    secondary50: colors.lightColors.secondary50,
    secondary100: colors.lightColors.secondary100,
    secondary200: colors.lightColors.secondary200,
    secondary300: colors.lightColors.secondary300,
    secondary400: colors.lightColors.secondary400,
    secondary500: colors.lightColors.secondary500,
    secondary600: colors.lightColors.secondary600,
    secondary700: colors.lightColors.secondary700,
    secondary800: colors.lightColors.secondary800,
    secondary900: colors.lightColors.secondary900,

    grayscale50: colors.lightColors.grayscale50,
    grayscale100: colors.lightColors.grayscale100,
    grayscale200: colors.lightColors.grayscale200,
    grayscale300: colors.lightColors.grayscale300,
    grayscale400: colors.lightColors.grayscale400,
    grayscale500: colors.lightColors.grayscale500,
    grayscale600: colors.lightColors.grayscale600,
    grayscale700: colors.lightColors.grayscale700,
    grayscale800: colors.lightColors.grayscale800,
    grayscale900: colors.lightColors.grayscale900,

    primaryFontColor: colors.lightColors.text,
    secondaryFontColor: colors.lightColors.background,
  },
});

export const darkTheme: string = createTheme(themeColor, {
  color: {
    primary: colors.darkColors.primary,
    primary50: colors.darkColors.primary50,
    primary100: colors.darkColors.primary100,
    primary200: colors.darkColors.primary200,
    primary300: colors.darkColors.primary300,
    primary400: colors.darkColors.primary400,
    primary500: colors.darkColors.primary500,
    primary600: colors.darkColors.primary600,
    primary700: colors.darkColors.primary700,
    primary800: colors.darkColors.primary800,
    primary900: colors.darkColors.primary900,

    secondary: colors.darkColors.secondary,
    secondary50: colors.darkColors.secondary50,
    secondary100: colors.darkColors.secondary100,
    secondary200: colors.darkColors.secondary200,
    secondary300: colors.darkColors.secondary300,
    secondary400: colors.darkColors.secondary400,
    secondary500: colors.darkColors.secondary500,
    secondary600: colors.darkColors.secondary600,
    secondary700: colors.darkColors.secondary700,
    secondary800: colors.darkColors.secondary800,
    secondary900: colors.darkColors.secondary900,

    grayscale50: colors.darkColors.grayscale50,
    grayscale100: colors.darkColors.grayscale100,
    grayscale200: colors.darkColors.grayscale200,
    grayscale300: colors.darkColors.grayscale300,
    grayscale400: colors.darkColors.grayscale400,
    grayscale500: colors.darkColors.grayscale500,
    grayscale600: colors.darkColors.grayscale600,
    grayscale700: colors.darkColors.grayscale700,
    grayscale800: colors.darkColors.grayscale800,
    grayscale900: colors.darkColors.grayscale900,

    primaryFontColor: colors.darkColors.text,
    secondaryFontColor: colors.darkColors.background,
  },
});

export const vars = { ...global, themeColor };

globalStyle('body', {
  backgroundColor: `hsl(${vars.themeColor.color.primary})`,
});
