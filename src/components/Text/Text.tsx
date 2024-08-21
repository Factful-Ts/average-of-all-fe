import { HTMLAttributes } from 'react';
import * as styles from './Text.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { vars } from '@/styles';

type TextPropsBase = HTMLAttributes<HTMLParagraphElement>;

interface TextProps extends TextPropsBase {
  /** Sets the font size, `16` by default */
  fontSize?: number;

  /** Sets the font color, if light mode `'black'` by default, else `'white'` by default */
  color?: string | 'primary' | 'secondary';

  /** Sets the font weight, `400` by default */
  weight?: 'normal' | 'bold' | 'lighter' | 'bolder' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

  /** Sets `line-height` to 1 for centering, `false` by default */
  inline?: boolean;

  /** Shorthand for `component="span"`, `false` by default, default root element is `p` */
  span?: boolean;
}

export const Text = ({
  fontSize = 16,
  color = vars.themeColor.color.primaryFontColor,
  weight = 400,
  inline = false,
  span = false,
  className,
  children,
  ...rest
}: TextProps) => {
  if (span)
    return (
      <span
        className={`${className} ${styles.textStyle({ inline, primary: color === 'primary', secondary: color === 'secondary' })}`}
        {...rest}
        style={assignInlineVars({
          [styles.dynamicFontSize]: `${fontSize}px`,
          [styles.dynamicFontWeight]: `${weight}`,
          [styles.dynamicFontColor]: `${color}`,
        })}
      >
        {children}
      </span>
    );

  return (
    <p
      className={`${className} ${styles.textStyle({ inline, primary: color === 'primary', secondary: color === 'secondary' })}`}
      {...rest}
      style={assignInlineVars({
        [styles.dynamicFontSize]: `${fontSize}px`,
        [styles.dynamicFontWeight]: `${weight}`,
        [styles.dynamicFontColor]: `${color}`,
      })}
    >
      {children}
    </p>
  );
};
