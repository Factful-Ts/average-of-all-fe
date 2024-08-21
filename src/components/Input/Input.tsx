'use client';

import { InputHTMLAttributes, useCallback, useRef, useState } from 'react';
import * as styles from './Input.css';

type InputPropsBase = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>;

interface InputProps extends InputPropsBase {
  /** Determines whether the input should be styled as primary, `true` by default */
  primary?: boolean;

  /** Content section rendered on the left side of the input */
  leftSection?: React.ReactNode;

  /** Props passed down to the `leftSection` element */
  leftSectionProps?: React.ComponentPropsWithoutRef<'div'>;

  /** Indicates whether the input should have padding on the left section, `'true'` by default */
  hasLeftSectionPadding?: boolean;

  /** Content section rendered on the right side of the input */
  rightSection?: React.ReactNode;

  /** Props passed down to the `rightSection` element */
  rightSectionProps?: React.ComponentPropsWithoutRef<'div'>;

  /** Indicates whether the input should have padding on the right section, `'true'` by default */
  hasRightSectionPadding?: boolean;

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
  hasLeftSectionPadding = true,
  rightSection,
  rightSectionProps,
  hasRightSectionPadding = true,
  withErrorStyles = true,
  className,
  ...rest
}: InputProps) => {
  const [isFocused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleWrapperClick = useCallback(() => {
    setFocused(true);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div
      className={`${className} ${styles.inputWrapper({
        primary: primary,
        disabled: disabled,
        padding: hasLeftSectionPadding && hasRightSectionPadding,
      })}`}
      tabIndex={0}
      onClick={handleWrapperClick}
    >
      {leftSection && (
        <div
          className={`${styles.sectionStyle({ leftSection: !!leftSection && hasLeftSectionPadding })} ${isFocused ? styles.focusedSectionStyle({ primary: primary }) : ''}`}
          {...leftSectionProps}
        >
          {leftSection}
        </div>
      )}
      <input
        ref={inputRef}
        className={styles.inputStyle({
          primary: primary,
          disabled: disabled,
          leftSection: !!leftSection,
          rightSection: !!rightSection,
        })}
        required={required}
        disabled={disabled}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...rest}
      />
      {rightSection && (
        <div
          className={`${styles.sectionStyle({ rightSection: !!rightSection && hasRightSectionPadding })} ${isFocused ? styles.focusedSectionStyle({ primary: primary }) : ''}`}
          {...rightSectionProps}
        >
          {rightSection}
        </div>
      )}
    </div>
  );
};
