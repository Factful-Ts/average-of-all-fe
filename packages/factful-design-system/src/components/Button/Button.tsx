import { buttonStyle, primaryButton, secondaryButton } from './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export const Button = ({ children, variant = 'primary', ...props }: ButtonProps): JSX.Element => {
  return (
    <button
      type="button"
      className={`${buttonStyle} ${variant === 'primary' ? primaryButton : secondaryButton}`}
      {...props}
    >
      {children}
    </button>
  );
};
