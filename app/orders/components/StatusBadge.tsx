import React from 'react';

interface StatusBadgeProps {
  status: string;
  small?: boolean;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, small = false }) => {
  const getStatusStyles = () => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400';
      case 'In Progress':
        return 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400';
      case 'Canceled':
        return 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-400';
      default:
        return 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-400';
    }
  };

  return (
    <div
      className={`${small ? 'ml-2 px-2 py-0.5' : 'px-3 py-1'} text-xs font-medium rounded-full ${getStatusStyles()}`}
    >
      {status}
    </div>
  );
};

export default StatusBadge;