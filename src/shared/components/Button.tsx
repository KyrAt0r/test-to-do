import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  isActive?: boolean;
  disabled?: boolean;
}

const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  isActive = true,
  disabled = false
}: ButtonProps) => {
  const baseStyles = 'rounded-lg transition-colors duration-200 focus:outline-none';

  const variantStyles = {
    primary: isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800',
    secondary: isActive ? 'bg-gray-300 text-gray-900' : 'bg-gray-200 text-gray-800',
    danger: isActive ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-800'
  };

  const sizeStyles = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2',
    large: 'px-6 py-3 text-lg'
  };

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${
        isActive ? 'border border-blue-500' : 'border border-transparent hover:border-blue-500'
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
