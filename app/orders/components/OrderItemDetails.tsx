import React from 'react';
import Image from 'next/image';
import StatusBadge from './StatusBadge';
import { Order, OrderItem as OrderItemType } from '../types/orderTypes';

interface OrderItemDetailsProps {
  order: Order;
}

const OrderItemDetails: React.FC<OrderItemDetailsProps> = ({ order }) => {
  return (
    <div className="px-4 pb-4 border-t border-gray-200 dark:border-gray-700">
      <div className="pt-4 space-y-4">
        {order.items.map((item: OrderItemType) => (
          <div key={item.id} className="flex items-center">
            <div className="relative w-16 h-16 rounded-xl overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
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
            <span className="font-medium text-gray-900 dark:text-white">
              ${item.price.toFixed(2)}
            </span>
          </div>
        ))}

        <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center">
            <span className="font-bold text-gray-900 dark:text-white">
              Total
            </span>
            <span className="font-bold text-amber-500 dark:text-primary">
              ${order.total.toFixed(2)}
            </span>
          </div>
        </div>

        <div className="flex justify-between pt-2">
          <StatusBadge status={order.status} />
          <button
            onClick={() => console.log('Reorder clicked for', order.id)}
            className={`px-4 py-1 text-sm text-white rounded-full transition-colors font-medium ${
              order.status === 'Canceled'
                ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed'
                : 'bg-amber-500 dark:bg-primary hover:bg-amber-600 dark:hover:bg-primary/90'
            }`}
            disabled={order.status === 'Canceled'}
          >
            {order.status === 'In Progress' ? 'Track Order' : 'Reorder'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderItemDetails;