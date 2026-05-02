
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  className?: string;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', href = '#' }) => {
  const baseStyles = "inline-flex items-center justify-center px-7 py-3 rounded-xl font-medium text-[14px] whitespace-nowrap transition-all duration-200 active:scale-95";
  
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-[#68b5a1]",
    outline: "border border-primary text-primary bg-transparent hover:bg-primary/5"
  };

  return (
    <a href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </a>
  );
};

export default Button;
