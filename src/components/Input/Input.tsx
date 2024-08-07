import { InputHTMLAttributes } from 'react';
import { inputStyle, inputWrapper } from '@/components/Input/Input.css';

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
  size,
  leftSection,
  leftSectionProps,
  rightSection,
  rightSectionProps,
  withErrorStyles,
  ...rest
}: InputProps) => {
  return (
    <div className={inputWrapper}>
      {leftSection && <div {...leftSectionProps}>{leftSection}</div>}
      <input className={inputStyle} {...rest} required={required} disabled={disabled} />
      {rightSection && <div {...rightSectionProps}>{rightSection}</div>}
    </div>
  );
};
