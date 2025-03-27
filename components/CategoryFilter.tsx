import React from 'react';

interface CategoryFilterProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  const categories = [
    'All',
    'Espresso',
    'Latte',
    'Cappuccino',
    'Mocha',
    'Cold Drinks',
    'Tea',
    'Specialty',
  ];

  return (
    <div className="flex space-x-2 mt-4 overflow-x-auto pb-2 scrollbar-hide md:flex-wrap md:gap-2">
      {categories.map((category) => (
        <button
          key={category}
          className={`px-4 py-2 rounded-full ${
            selectedCategory === category
              ? 'bg-primary text-primary-foreground'
              : 'dark:bg-neutral-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 shadow-sm'
          } whitespace-nowrap transition-colors`}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
