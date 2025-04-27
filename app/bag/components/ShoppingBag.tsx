import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectBag } from '@/store/slices/bag/bagSelectors'; // Import selector and actions
import Image from 'next/image';
import { coffees } from '@/data/coffeeData';
import { removeFromBag, updateItemQuantity } from '@/store/slices/bag/bagSlice';

const ShoppingBag = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(selectBag);

  // Calculate total within the component
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Track which images failed to load
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  // Function to get coffee image from coffeeData
  const getCoffeeImage = (name: string) => {
    const coffee = coffees.find((c) => c.name === name);
    return coffee?.image || null;
  };

  const handleImageError = (name: string) => {
    setFailedImages((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  // Handlers to dispatch actions
  const handleRemoveItem = (id: string) => {
    dispatch(removeFromBag(id));
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    dispatch(updateItemQuantity({ id, quantity }));
  };

  return (
    <div className="p-4">
      <h3 className="font-bold text-lg mb-4">Your Order</h3>

      <div className="space-y-4 mb-4">
        {items.map((item) => (
          <div
            key={`${item.id}-${item.size}-${item.milk}-${JSON.stringify(
              item.extras
            )}`} // Make key more unique
            className="flex items-center p-3 border border-gray-200 dark:border-gray-700 rounded-xl"
          >
            <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-700">
              {getCoffeeImage(item.name) && !failedImages[item.name] ? (
                <Image
                  src={getCoffeeImage(item.name)!}
                  alt={item.name}
                  fill
                  className="object-cover"
                  onError={() => handleImageError(item.name)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-700 text-white text-2xl font-medium">
                  {item.name.charAt(0)}
                </div>
              )}
            </div>

            <div className="ml-3 flex-1">
              <h4 className="font-medium text-gray-900 dark:text-white">
                {item.name}
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {item.size} • {item.milk !== 'None' ? item.milk : 'No milk'}
              </p>
              {item.extras.length > 0 && (
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Extras: {item.extras.join(', ')}
                </p>
              )}
            </div>

            <div className="flex items-center">
              <button
                onClick={() =>
                  // Dispatch update action
                  handleUpdateQuantity(item.id, Math.max(1, item.quantity - 1))
                }
                className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                -
              </button>
              <span className="mx-2 text-gray-900 dark:text-white">
                {item.quantity}
              </span>
              <button
                onClick={() =>
                  // Dispatch update action
                  handleUpdateQuantity(item.id, item.quantity + 1)
                }
                className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                +
              </button>
            </div>

            <span className="font-medium text-gray-900 dark:text-white ml-4">
              ${(item.price * item.quantity).toFixed(2)}
            </span>

            <button
              onClick={() => handleRemoveItem(item.id)} // Dispatch remove action
              className="ml-2 text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
        <div className="flex justify-between items-center">
          <span className="font-bold text-gray-900 dark:text-white">Total</span>
          <span className="font-bold text-amber-500 dark:text-primary">
            {/* Use the calculated total */}${total.toFixed(2)}
          </span>
        </div>
      </div>

      <button
        className="w-full mt-4 py-3 bg-amber-500 dark:bg-primary text-white rounded-xl shadow-lg hover:bg-amber-600 dark:hover:bg-primary/90 transition-colors font-medium"
        onClick={() => console.log('Proceed to checkout')}
      >
        Checkout
      </button>
    </div>
  );
};

export default ShoppingBag;
