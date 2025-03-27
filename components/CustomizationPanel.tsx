import React from 'react';
import { Size, MilkType, Extra } from '@/types/coffee';

interface CustomizationPanelProps {
  quantity: number;
  incrementQuantity: () => void;
  decrementQuantity: () => void;
  sizes: Size[];
  selectedSize: Size;
  setSelectedSize: (size: Size) => void;
  milkTypes: MilkType[];
  selectedMilk: MilkType;
  setSelectedMilk: (milk: MilkType) => void;
  extras: Extra[];
  selectedExtras: Extra[];
  toggleExtra: (extra: Extra) => void;
}

const CustomizationPanel: React.FC<CustomizationPanelProps> = ({
  quantity,
  incrementQuantity,
  decrementQuantity,
  sizes,
  selectedSize,
  setSelectedSize,
  milkTypes,
  selectedMilk,
  setSelectedMilk,
  extras,
  selectedExtras,
  toggleExtra,
}) => {
  return (
    <>
      {/* Quantity selector */}
      <div className="mt-6 md:mt-0">
        <h3 className="text-lg font-bold mb-3">Quantity</h3>
        <div className="flex items-center">
          <button
            onClick={decrementQuantity}
            className="w-10 h-10 rounded-full bg-white dark:bg-neutral-700 shadow-sm flex items-center justify-center hover:bg-gray-100 dark:hover:bg-neutral-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15"
              />
            </svg>
          </button>
          <span className="mx-6 text-xl font-medium">{quantity}</span>
          <button
            onClick={incrementQuantity}
            className="w-10 h-10 rounded-full bg-white dark:bg-neutral-700 shadow-sm flex items-center justify-center hover:bg-gray-100 dark:hover:bg-neutral-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Size selector */}
      <div className="mt-6">
        <h3 className="text-lg font-bold mb-3">Select Size</h3>
        <div className="grid grid-cols-3 gap-3">
          {sizes.map((size) => (
            <button
              key={size.id}
              className={`py-3 rounded-xl transition-all ${
                selectedSize.id === size.id
                  ? 'bg-primary text-primary-foreground shadow-md scale-105'
                  : 'bg-white dark:bg-neutral-700 shadow-sm hover:bg-gray-100 dark:hover:bg-neutral-600'
              }`}
              onClick={() => setSelectedSize(size)}
            >
              {size.name}
              <div className="text-xs mt-1 opacity-80">
                {size.price > 0 ? `+$${size.price.toFixed(2)}` : 'Standard'}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Milk selector */}
      <div className="mt-6">
        <h3 className="text-lg font-bold mb-3">Select Milk</h3>
        <div className="space-y-2">
          {milkTypes.map((milk) => (
            <button
              key={milk.id}
              className={`w-full py-3 px-4 rounded-xl text-left transition-all flex justify-between items-center ${
                selectedMilk.id === milk.id
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-white dark:bg-neutral-700 shadow-sm hover:bg-gray-100 dark:hover:bg-neutral-600'
              }`}
              onClick={() => setSelectedMilk(milk)}
            >
              <span>{milk.name}</span>
              <span className="text-sm opacity-80">
                {milk.price > 0 ? `+$${milk.price.toFixed(2)}` : 'Standard'}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Extras selector */}
      <div className="mt-6">
        <h3 className="text-lg font-bold mb-3">Select Extras</h3>
        <div className="space-y-2">
          {extras.map((extra) => (
            <button
              key={extra.id}
              className={`w-full py-3 px-4 rounded-xl text-left transition-all flex justify-between items-center ${
                selectedExtras.some((e) => e.id === extra.id)
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-white dark:bg-neutral-700 shadow-sm hover:bg-gray-100 dark:hover:bg-neutral-600'
              }`}
              onClick={() => toggleExtra(extra)}
            >
              <div className="flex items-center">
                <div
                  className={`w-5 h-5 rounded-full mr-3 flex items-center justify-center ${
                    selectedExtras.some((e) => e.id === extra.id)
                      ? 'bg-white'
                      : 'border-2 border-gray-300 dark:border-gray-500'
                  }`}
                >
                  {selectedExtras.some((e) => e.id === extra.id) && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3 h-3 text-primary"
                    >
                      <path
                        fillRule="evenodd"
                        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
                <span>{extra.name}</span>
              </div>
              <span className="text-sm">+${extra.price.toFixed(2)}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default CustomizationPanel;
