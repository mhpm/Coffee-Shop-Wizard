import React, { useEffect, useState } from 'react';

interface SuccessMessageProps {
  onReset: () => void;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ onReset }) => {
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center h-[70vh]">
      <div className={`text-center p-8 rounded-2xl bg-white dark:bg-neutral-800 shadow-lg max-w-sm mx-auto transition-all duration-500 ${animate ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <div className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-400 flex items-center justify-center transition-all duration-700 ${animate ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`w-12 h-12 transition-all duration-700 delay-300 ${animate ? 'opacity-100 stroke-dashoffset-0' : 'opacity-0 stroke-dashoffset-100'}`}
            style={{ strokeDasharray: 100, strokeDashoffset: animate ? 0 : 100 }}
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className={`text-2xl font-bold mb-2 transition-all duration-500 delay-200 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>Order Placed!</h3>
        <p className={`text-gray-600 dark:text-gray-300 mb-8 transition-all duration-500 delay-300 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Your coffee is being prepared. Thank you for your order!
        </p>
        
        <div className="relative">
          <div className={`absolute inset-0 bg-amber-100 dark:bg-amber-900/20 rounded-md opacity-0 ${animate ? 'animate-pulse-slow' : ''}`}></div>
          <div className={`space-y-3 relative transition-all duration-500 delay-400 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <button
              onClick={onReset}
              className="w-full px-4 py-3 rounded-xl bg-amber-500 text-white font-medium hover:bg-amber-600 transition-colors hover:shadow-md"
            >
              Order Again
            </button>
            <button className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors">
              Track Order
            </button>
          </div>
        </div>
        
        <div className={`mt-6 flex justify-center space-x-2 transition-all duration-500 delay-500 ${animate ? 'opacity-100' : 'opacity-0'}`}>
          <span className="w-2 h-2 rounded-full bg-amber-500"></span>
          <span className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600"></span>
          <span className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600"></span>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;
