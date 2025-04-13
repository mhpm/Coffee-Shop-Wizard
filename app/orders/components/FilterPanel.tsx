import React from 'react';

interface FilterPanelProps {
  statusFilter: string | null;
  setStatusFilter: (status: string | null) => void;
  sortBy: 'date' | 'price';
  setSortBy: (sortBy: 'date' | 'price') => void;
  sortOrder: 'asc' | 'desc';
  setSortOrder: (sortOrder: 'asc' | 'desc') => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  statusFilter,
  setStatusFilter,
  sortBy,
  setSortBy,
  sortOrder,
  setSortOrder,
}) => {
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md p-4 mb-4">
      <h3 className="font-medium text-gray-900 dark:text-white mb-3">Filter Orders</h3>
      
      <div className="mb-3">
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">Status</p>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setStatusFilter(null)}
            className={`px-3 py-1 text-xs rounded-full ${
              statusFilter === null
                ? 'bg-amber-500 dark:bg-primary text-white'
                : 'bg-gray-200 dark:bg-neutral-700 text-gray-800 dark:text-gray-200'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setStatusFilter('Completed')}
            className={`px-3 py-1 text-xs rounded-full ${
              statusFilter === 'Completed'
                ? 'bg-green-500 text-white'
                : 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400'
            }`}
          >
            Completed
          </button>
          <button
            onClick={() => setStatusFilter('In Progress')}
            className={`px-3 py-1 text-xs rounded-full ${
              statusFilter === 'In Progress'
                ? 'bg-blue-500 text-white'
                : 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400'
            }`}
          >
            In Progress
          </button>
          <button
            onClick={() => setStatusFilter('Canceled')}
            className={`px-3 py-1 text-xs rounded-full ${
              statusFilter === 'Canceled'
                ? 'bg-red-500 text-white'
                : 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-400'
            }`}
          >
            Canceled
          </button>
        </div>
      </div>
      
      <div>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">Sort By</p>
        <div className="flex gap-2">
          <button
            onClick={() => {
              setSortBy('date');
              setSortOrder(sortBy === 'date' && sortOrder === 'desc' ? 'asc' : 'desc');
            }}
            className={`px-3 py-1 text-xs rounded-full flex items-center ${
              sortBy === 'date'
                ? 'bg-amber-500 dark:bg-primary text-white'
                : 'bg-gray-200 dark:bg-neutral-700 text-gray-800 dark:text-gray-200'
            }`}
          >
            Date
            {sortBy === 'date' && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-3 h-3 ml-1 ${sortOrder === 'asc' ? 'rotate-180' : ''}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            )}
          </button>
          <button
            onClick={() => {
              setSortBy('price');
              setSortOrder(sortBy === 'price' && sortOrder === 'desc' ? 'asc' : 'desc');
            }}
            className={`px-3 py-1 text-xs rounded-full flex items-center ${
              sortBy === 'price'
                ? 'bg-amber-500 dark:bg-primary text-white'
                : 'bg-gray-200 dark:bg-neutral-700 text-gray-800 dark:text-gray-200'
            }`}
          >
            Price
            {sortBy === 'price' && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-3 h-3 ml-1 ${sortOrder === 'asc' ? 'rotate-180' : ''}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;