import { HTMLAttributes } from 'react';
import * as styles from './Text.css';

type TextPropsBase = HTMLAttributes<HTMLParagraphElement>;

interface TextProps extends TextPropsBase {
  /** Sets the font size, `14` by default */
  fontSize?: number;

  /** Sets the font color */
  color?: string;

  /** Sets the font weight */
  weight?: 'normal' | 'bold' | 'lighter' | 'bolder' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

  /** Sets `line-height` to 1 for centering, `false` by default */
  inline?: boolean;

  /** Shorthand for `component="span"`, `false` by default, default root element is `p` */
  span?: boolean;
}

export const Text = ({ fontSize = 14, color, weight, inline = false, span = false, children }: TextProps) => {
  if (span)
    return (
      <span className={styles.textStyle({ inline, weight })}>
        {children}
        <style jsx>{`
          span {
            font-size: ${fontSize};
            color: ${color};
          }
        `}</style>
      </span>
    );

  return (
    <p className={styles.textStyle({ inline, weight })}>
      {children}
      <style jsx>{`
        span {
          font-size: ${fontSize};
          color: ${color};
        }
      `}</style>
    </p>
  );
};
