import React from 'react';
import Image from 'next/image';

interface TapitLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '1.3inch' | '1.5inch' | '2inch';
}

const TapitLogo: React.FC<TapitLogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
    '1.3inch': 'w-24 h-24', // 96px ≈ 1.3 inches at 72 DPI
    '1.5inch': 'w-28 h-28', // 112px ≈ 1.5 inches at 72 DPI
    '2inch': 'w-36 h-36' // 144px = 2 inches at 72 DPI
  };

  return (
    <div className={`${sizeClasses[size]} ${className} relative`}>
      <Image
        src="/Tapit_logo.png"
        alt="TAPit Logo - Innovate. Interact. Integrate."
        fill
        className="object-contain"
        priority
      />
    </div>
  );
};

export default TapitLogo;