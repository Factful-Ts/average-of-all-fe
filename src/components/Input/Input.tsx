import { InputHTMLAttributes, useRef } from 'react';
import * as styles from './Input.css';

type InputPropsBase = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>;

interface InputProps extends InputPropsBase {
  /** Determines whether the input should be styled as primary, `true` by default */
  primary?: boolean;

  /** Content section rendered on the left side of the input */
  leftSection?: React.ReactNode;

  /** Props passed down to the `leftSection` element */
  leftSectionProps?: React.ComponentPropsWithoutRef<'div'>;

  /** Content section rendered on the right side of the input */
  rightSection?: React.ReactNode;

  /** Props passed down to the `rightSection` element */
  rightSectionProps?: React.ComponentPropsWithoutRef<'div'>;

  /** Sets `required` attribute on the `input` element */
  required?: boolean;

  /** Sets `disabled` attribute on the `input` element */
  disabled?: boolean;

  /** Controls input `height` and horizontal `padding`, `'medium'` by default */
  size?: 'small' | 'medium' | 'large';

  /** Determines whether the input should have red border and red text color when the `error` prop is set, `true` by default */
  withErrorStyles?: boolean;
}

export const Input = ({
  primary = true,
  required,
  disabled,
  size = 'medium',
  leftSection,
  leftSectionProps,
  rightSection,
  rightSectionProps,
  withErrorStyles = true,
  ...rest
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleWrapperClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div
      className={styles.inputWrapper({ primary: primary, disabled: disabled })}
      tabIndex={0}
      onClick={handleWrapperClick}
    >
      {leftSection && <div {...leftSectionProps}>{leftSection}</div>}
      <input
        ref={inputRef}
        className={styles.inputStyle({ primary: primary, disabled: disabled })}
        {...rest}
        required={required}
        disabled={disabled}
      />
      {rightSection && <div {...rightSectionProps}>{rightSection}</div>}
    </div>
  );
};
