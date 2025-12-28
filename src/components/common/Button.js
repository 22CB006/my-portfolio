import React from 'react';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  onClick,
  href,
  target,
  rel,
  className = '',
  ...props 
}) => {
  const buttonClass = `retro-button retro-button-${variant} retro-button-${size} ${className}`;

  if (href) {
    return (
      <a 
        href={href}
        target={target}
        rel={rel}
        className={buttonClass}
        {...props}
      >
        <span className="retro-button-inner">{children}</span>
      </a>
    );
  }

  return (
    <button 
      className={buttonClass}
      onClick={onClick}
      {...props}
    >
      <span className="retro-button-inner">{children}</span>
    </button>
  );
};

export default Button;
