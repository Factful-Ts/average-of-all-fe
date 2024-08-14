'use client';

import * as styles from './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Determines whether the input should be styled as primary, `true` by default */
  primary?: boolean;

  /** Sets the background color of the input element */
  backgroundColor?: string;

  /** Controls input `height` and horizontal `padding`, `'medium'` by default */
  size?: 'small' | 'medium' | 'large';

  /** Label associated with the button element */
  label: string;

  /** Optional click handler */
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button type="button" className={styles.buttonStyle({ primary: primary })} {...props}>
      {label}
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </button>
  );
};
