import React from 'react';

interface HeaderProps {
  title: string;
  showBackButton: boolean;
  onBack: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, showBackButton, onBack }) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center">
        {showBackButton && (
          <button
            onClick={onBack}
            className="p-2 mr-2 rounded-full bg-white dark:bg-neutral-800 shadow-sm hover:bg-gray-100 dark:hover:bg-neutral-700 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-gray-800 dark:text-white"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
        )}
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h1>
      </div>
      <button className="p-2 rounded-full bg-white dark:bg-neutral-800 shadow-sm hover:bg-gray-100 dark:hover:bg-neutral-700 transition-colors">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 text-gray-800 dark:text-white"
        >
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      </button>
    </div>
  );
};

export default Header;
