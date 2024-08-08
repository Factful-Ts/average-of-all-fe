export type ThemeColorsType = {
  background: string;
  text: string;

  primary: string;
  primary50: string;
  primary100: string;
  primary200: string;
  primary300: string;
  primary400: string;
  primary500: string;
  primary600: string;
  primary700: string;
  primary800: string;
  primary900: string;

  secondary: string;
  secondary50: string;
  secondary100: string;
  secondary200: string;
  secondary300: string;
  secondary400: string;
  secondary500: string;
  secondary600: string;
  secondary700: string;
  secondary800: string;
  secondary900: string;

  grayscale50: string;
  grayscale100: string;
  grayscale200: string;
  grayscale300: string;
  grayscale400: string;
  grayscale500: string;
  grayscale600: string;
  grayscale700: string;
  grayscale800: string;
  grayscale900: string;
};

export type ColorsType = {
  lightColors: ThemeColorsType;
  darkColors: ThemeColorsType;
};
