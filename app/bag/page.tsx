"use client";

import React from 'react';
import Header from '@/components/Header';
import ShoppingBag from '@/components/ShoppingBag';
import { useStore } from '@/store/useStore';

const BagPage = () => {
  const bagItems = useStore((state) => state.bag.items);
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-primary/5 dark:from-background dark:to-background">
      <div className="mx-auto p-4 max-w-md md:max-w-lg lg:max-w-xl">
        <Header
          title="Shopping Bag"
          showBackButton={true}
          onBack={() => window.history.back()}
        />
        
        <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-md overflow-hidden mt-4">
          {bagItems.length === 0 ? (
            <div className="p-6 text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-amber-100 dark:bg-amber-900/20 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10 text-amber-500 dark:text-amber-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Your Bag is Empty
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Add some delicious coffee to your bag.
              </p>
              <button
                onClick={() => (window.location.href = '/')}
                className="px-6 py-3 bg-amber-500 dark:bg-primary text-white rounded-xl shadow-lg hover:bg-amber-600 dark:hover:bg-primary/90 transition-colors font-medium"
              >
                Browse Coffee Menu
              </button>
            </div>
          ) : (
            <ShoppingBag />
          )}
        </div>
      </div>
    </main>
  );
};

export default BagPage;