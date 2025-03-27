import React from 'react';
import Image from 'next/image';

interface Coffee {
  name: string;
  description: string;
  image: string;
  price: number;
}

interface CoffeeDetailsProps {
  coffee: Coffee;
  onBack: () => void;
}

const CoffeeDetails: React.FC<CoffeeDetailsProps> = ({ coffee, onBack }) => {
  return (
    <div>
      <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden">
        <Image
          src={coffee.image}
          alt={coffee.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h2 className="text-2xl md:text-3xl font-bold">{coffee.name}</h2>
          <div className="flex items-center mt-1">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill={star <= 4 ? '#F59E0B' : 'none'}
                  stroke={star <= 4 ? '#F59E0B' : 'currentColor'}
                  className="w-4 h-4 mr-0.5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
              <span className="ml-1 text-sm">4.8</span>
            </div>
            <span className="mx-2">•</span>
            <span className="text-sm">${coffee.price.toFixed(2)}</span>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-amber-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714a2.25 2.25 0 0 1-.659 1.591L9.75 14.5M15 3.186a24.32 24.32 0 0 0-4.578.064c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.399-9.664a24.32 24.32 0 0 1 4.578.064c1.131.094 1.976 1.057 1.976 2.192v4.286c0 .837-.46 1.58-1.155 1.951M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">About</h3>
            <p className="text-xs text-gray-500">Coffee details</p>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
          {coffee.description}
        </p>
      </div>
    </div>
  );
};

export default CoffeeDetails;
