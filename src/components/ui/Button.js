import React from 'react';
import './Button.css';

const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  href, 
  onClick, 
  children, 
  icon,
  className = '',
  ...props 
}) => {
  const baseClasses = 'button';
  const variantClass = `button--${variant}`;
  const sizeClass = `button--${size}`;
  const classes = `${baseClasses} ${variantClass} ${sizeClass} ${className}`.trim();

  if (href) {
    return (
      <a 
        href={href} 
        className={classes}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {icon && <span className="button__icon">{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button 
      onClick={onClick} 
      className={classes}
      {...props}
    >
      {icon && <span className="button__icon">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
