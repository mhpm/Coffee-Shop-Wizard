import React from 'react';
import StatusBadge from './StatusBadge';
import OrderItemDetails from './OrderItemDetails';
import { Order } from '../types/orderTypes';

interface OrderItemProps {
  order: Order;
  isExpanded: boolean;
  toggleDetails: () => void;
}

const OrderItem: React.FC<OrderItemProps> = ({ order, isExpanded, toggleDetails }) => {
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-md overflow-hidden">
      <div
        className="p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-neutral-700/50 transition-colors"
        onClick={toggleDetails}
      >
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white">
              {order.id}
            </h3>
            <div className="flex items-center mt-1">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {order.date}
              </p>
              <StatusBadge status={order.status} small />
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-amber-500 dark:text-primary font-medium mr-2">
              ${order.total.toFixed(2)}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className={`w-5 h-5 text-gray-400 transition-transform ${
                isExpanded ? 'transform rotate-180' : ''
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>
      </div>

      {isExpanded && <OrderItemDetails order={order} />}
    </div>
  );
};

export default OrderItem;