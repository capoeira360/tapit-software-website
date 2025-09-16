import React from 'react';

interface TapitLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const TapitLogo: React.FC<TapitLogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background Circle with Gradient */}
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C48D2E" />
            <stop offset="50%" stopColor="#D6B456" />
            <stop offset="100%" stopColor="#878B5A" />
          </linearGradient>
          <linearGradient id="tapGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5E6545" />
            <stop offset="100%" stopColor="#1a1a1a" />
          </linearGradient>
          <linearGradient id="fingerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E7E4CF" />
            <stop offset="100%" stopColor="#D6B456" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/> 
            </feMerge>
          </filter>
        </defs>
        
        {/* Outer Ring */}
        <circle
          cx="60"
          cy="60"
          r="58"
          fill="url(#bgGradient)"
          stroke="#5E6545"
          strokeWidth="2"
        />
        
        {/* Inner Circle */}
        <circle
          cx="60"
          cy="60"
          r="45"
          fill="#E7E4CF"
          stroke="#C48D2E"
          strokeWidth="1.5"
        />
        
        {/* Touch/Tap Symbol - Finger */}
        <g transform="translate(35, 25)">
          {/* Finger */}
          <ellipse
            cx="25"
            cy="35"
            rx="8"
            ry="20"
            fill="url(#fingerGradient)"
            stroke="#5E6545"
            strokeWidth="1.5"
          />
          
          {/* Fingertip */}
          <ellipse
            cx="25"
            cy="18"
            rx="6"
            ry="8"
            fill="#D6B456"
            stroke="#5E6545"
            strokeWidth="1"
          />
          
          {/* Touch Ripples */}
          <circle
            cx="25"
            cy="15"
            r="12"
            fill="none"
            stroke="#C48D2E"
            strokeWidth="2"
            opacity="0.6"
          />
          <circle
            cx="25"
            cy="15"
            r="18"
            fill="none"
            stroke="#878B5A"
            strokeWidth="1.5"
            opacity="0.4"
          />
          <circle
            cx="25"
            cy="15"
            r="24"
            fill="none"
            stroke="#D6B456"
            strokeWidth="1"
            opacity="0.2"
          />
        </g>
        
        {/* TAP Text */}
        <text
          x="60"
          y="85"
          textAnchor="middle"
          fontSize="16"
          fontWeight="bold"
          fontFamily="Inter, sans-serif"
          fill="url(#tapGradient)"
          filter="url(#glow)"
        >
          TAP
        </text>
        
        {/* Decorative Elements */}
        <g opacity="0.7">
          {/* Small circles around the logo */}
          <circle cx="20" cy="30" r="2" fill="#C48D2E" />
          <circle cx="100" cy="40" r="1.5" fill="#D6B456" />
          <circle cx="15" cy="80" r="1" fill="#878B5A" />
          <circle cx="105" cy="85" r="2" fill="#C48D2E" />
          
          {/* Tech-inspired lines */}
          <line x1="10" y1="60" x2="25" y2="60" stroke="#878B5A" strokeWidth="1" opacity="0.5" />
          <line x1="95" y1="60" x2="110" y2="60" stroke="#878B5A" strokeWidth="1" opacity="0.5" />
          <line x1="60" y1="10" x2="60" y2="25" stroke="#C48D2E" strokeWidth="1" opacity="0.5" />
        </g>
      </svg>
    </div>
  );
};

export default TapitLogo;