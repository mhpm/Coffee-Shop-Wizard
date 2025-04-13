import React from 'react';
import Image from 'next/image';
import { Coffee, Extra, MilkType, Size } from '@/types/coffee';

interface OrderConfirmationProps {
  coffee: Coffee;
  size: Size;
  milk: MilkType;
  extras: Extra[];
  quantity: number;
  total: string;
  onEdit: () => void;
  onPlaceOrder: () => void;
}

const OrderConfirmation: React.FC<OrderConfirmationProps> = ({
  coffee,
  size,
  milk,
  extras,
  quantity,
  total,
  onEdit,
  onPlaceOrder,
}) => {
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg">
      <h3 className="text-xl font-bold mb-6">Order Summary</h3>

      {coffee && (
        <div className="flex items-center mb-6">
          <div className="relative w-20 h-20 rounded-xl overflow-hidden">
            <Image
              src={coffee.image}
              alt={coffee.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="ml-4">
            <h4 className="font-bold">{coffee.name}</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {size.name} • {milk.name}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Quantity: {quantity}
            </p>
          </div>
        </div>
      )}

      <div className="space-y-4 p-4 rounded-xl bg-gray-50 dark:bg-neutral-700">
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-300">Subtotal</span>
          <span className="font-medium">
            ${coffee?.price.toFixed(2) || '0.00'}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-300">
            Size ({size.name})
          </span>
          <span className="font-medium">${size.price.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-300">
            Milk ({milk.name})
          </span>
          <span className="font-medium">${milk.price.toFixed(2)}</span>
        </div>

        {extras.length > 0 && (
          <div>
            <span className="text-gray-600 dark:text-gray-300">Extras:</span>
            <ul className="mt-2 space-y-2">
              {extras.map((extra) => (
                <li key={extra.id} className="flex justify-between text-sm">
                  <span>{extra.name}</span>
                  <span className="font-medium">${extra.price.toFixed(2)}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="pt-3 border-t border-gray-200 dark:border-gray-600">
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-300">Quantity</span>
            <span className="font-medium">x{quantity}</span>
          </div>
        </div>

        <div className="pt-3 border-t border-gray-200 dark:border-gray-600">
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>${total}</span>
          </div>
        </div>
      </div>

      <div className="flex gap-4 mt-6">
        <button
          className="flex-1 px-4 py-3 rounded-xl border border-amber-500 text-amber-500 font-medium hover:bg-amber-50 dark:hover:bg-neutral-700 transition-colors"
          onClick={onEdit}
        >
          Edit Order
        </button>
        <button
          className="flex-1 px-4 py-3 rounded-xl bg-amber-500 text-white font-medium hover:bg-amber-600 transition-colors"
          onClick={onPlaceOrder}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
