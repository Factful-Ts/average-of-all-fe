'use client';

import * as styles from './Button.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { vars } from '@/styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Determines whether the input should be styled as primary, `true` by default */
  primary?: boolean;

  /** Sets the background color of the button element */
  backgroundColor?: string;

  /** Sets the font color of the button element */
  fontColor?: string;

  /** Controls input `height` and horizontal `padding`, `'medium'` by default */
  size?: 'small' | 'medium' | 'large';

  /** Label associated with the button element */
  label: string;

  /** Optional click handler */
  onClick?: () => void;
}

export const Button = ({
  primary = true,
  size = 'medium',
  fontColor = vars.themeColor.color.secondaryFontColor,
  backgroundColor,
  label,
  className,
  ...rest
}: ButtonProps): JSX.Element => {
  return (
    <button
      type="button"
      className={`${className} ${styles.buttonStyle({ primary: backgroundColor ? 'null' : primary, size: size })}`}
      {...rest}
      style={assignInlineVars({
        [styles.dynamicButtonBackground]: `${backgroundColor}`,
        [styles.dynamicButtonFontColor]: `${fontColor}`,
      })}
    >
      {label}
    </button>
  );
};
