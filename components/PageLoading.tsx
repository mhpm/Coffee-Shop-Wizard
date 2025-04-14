import React from 'react';

interface PageLoadingProps {
  message?: string;
}

const PageLoading: React.FC<PageLoadingProps> = ({ message = 'Loading...' }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary/5 dark:from-background dark:to-background flex items-center justify-center">
      <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-xl flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-foreground font-medium">{message}</p>
      </div>
    </div>
  );
};

export default PageLoading;