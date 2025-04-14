import React from 'react';
import { useStore } from '@/store/useStore';
import Image from 'next/image';

const ShoppingBag = () => {
  const { items, total } = useStore((state) => state.bag);
  const removeFromBag = useStore((state) => state.removeFromBag);
  const updateItemQuantity = useStore((state) => state.updateItemQuantity);
  
  return (
    <div className="p-4">
      <h3 className="font-bold text-lg mb-4">Your Order</h3>
      
      <div className="space-y-4 mb-4">
        {items.map((item) => (
          <div key={`${item.id}-${item.size}-${item.milk}`} className="flex items-center p-3 border border-gray-200 dark:border-gray-700 rounded-xl">
            <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-700">
              {/* Fallback for missing images */}
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
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
                onClick={() => updateItemQuantity(item.id, Math.max(1, item.quantity - 1))}
                className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                -
              </button>
              <span className="mx-2 text-gray-900 dark:text-white">{item.quantity}</span>
              <button 
                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                +
              </button>
            </div>
            
            <span className="font-medium text-gray-900 dark:text-white ml-4">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
            
            <button 
              onClick={() => removeFromBag(item.id)}
              className="ml-2 text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        ))}
      </div>
      
      <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
        <div className="flex justify-between items-center">
          <span className="font-bold text-gray-900 dark:text-white">Total</span>
          <span className="font-bold text-amber-500 dark:text-primary">${total.toFixed(2)}</span>
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