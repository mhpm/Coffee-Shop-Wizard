import React from 'react';

interface CheckoutButtonProps {
  total: string;
  onClick: () => void;
}

const CheckoutButton: React.FC<CheckoutButtonProps> = ({ total, onClick }) => {
  return (
    <div className="flex items-center justify-between bg-white dark:bg-neutral-800 p-4 rounded-xl shadow">
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Total Price
        </p>
        <p className="text-xl font-bold">${total}</p>
      </div>
      <button
        className="px-6 py-3 bg-primary text-primary-foreground rounded-xl shadow-lg hover:bg-primary/90 transition-colors font-medium"
        onClick={onClick}
      >
        Checkout
      </button>
    </div>
  );
};

export default CheckoutButton;