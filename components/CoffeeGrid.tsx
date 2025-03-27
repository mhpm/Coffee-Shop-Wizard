import React from 'react';
import Image from 'next/image';
import { Coffee } from '@/data/coffeeData';

interface CoffeeGridProps {
  coffees: Coffee[];
  onSelect: (coffee: Coffee) => void;
}

const CoffeeGrid: React.FC<CoffeeGridProps> = ({ coffees, onSelect }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {coffees.map((coffee) => (
        <div
          key={coffee.id}
          className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-[1.02]"
          onClick={() => onSelect(coffee)}
        >
          <div className="relative h-40">
            <Image
              src={coffee.image}
              alt={coffee.name}
              fill
              className="object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${coffee.bgColor}`}></div>
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-primary">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs text-white ml-1">4.8</span>
                </div>
                <span className="text-xs text-white bg-black/30 px-2 py-0.5 rounded-full">Popular</span>
              </div>
            </div>
          </div>
          <div className="p-3">
            <h3 className="font-bold text-gray-800 dark:text-white">{coffee.name}</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1 mt-1">{coffee.description}</p>
            <div className="flex justify-between items-center mt-2">
              <span className="font-bold text-primary">${coffee.price.toFixed(2)}</span>
              <button className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoffeeGrid;
