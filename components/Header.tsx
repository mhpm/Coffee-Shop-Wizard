import React, { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import UserMenu from './UserMenu';
import { useStore } from '@/store/useStore';

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  onBack?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  title,
  showBackButton = false,
  onBack,
}) => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  // Get the bag items count from the store
  const bagItemsCount = useStore((state) => state.bag.items.reduce((total, item) => total + item.quantity, 0));
  
  return (
    <header className="flex items-center justify-between py-4 mb-6">
      <div className="flex items-center">
        {showBackButton && (
          <button
            onClick={onBack}
            className="mr-3 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </button>
        )}
        <div>
          <h1 className="text-2xl font-bold text-foreground">{title}</h1>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <ThemeToggle />
        <Link href="/bag" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-700 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-foreground/80"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
          
          {/* Badge showing number of items */}
          {bagItemsCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {bagItemsCount}
            </span>
          )}
        </Link>
        <div className="relative">
          <button
            className="p-2 rounded-full bg-primary text-primary-foreground"
            onClick={() => setUserMenuOpen(!userMenuOpen)}
            aria-label="User menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
          <UserMenu
            isOpen={userMenuOpen}
            onClose={() => setUserMenuOpen(false)}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
