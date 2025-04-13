import React from 'react';
import OrderItem from './OrderItem';
import { Order } from '../types/orderTypes';

interface OrderListProps {
  orders: Order[];
  expandedOrder: string | null;
  toggleOrderDetails: (orderId: string) => void;
}

const OrderList: React.FC<OrderListProps> = ({ 
  orders, 
  expandedOrder, 
  toggleOrderDetails 
}) => {
  if (orders.length === 0) {
    return (
      <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-md p-6 mt-4 text-center">
        <div className="w-20 h-20 mx-auto rounded-full bg-amber-100 dark:bg-amber-900/20 flex items-center justify-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 text-amber-500 dark:text-amber-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          No Orders Yet
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          You haven&apos;t placed any orders yet.
        </p>
        <button
          onClick={() => (window.location.href = '/')}
          className="px-6 py-3 bg-amber-500 dark:bg-primary text-white rounded-xl shadow-lg hover:bg-amber-600 dark:hover:bg-primary/90 transition-colors font-medium"
        >
          Browse Coffee Menu
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4 mt-4">
      {orders.map((order) => (
        <OrderItem 
          key={order.id} 
          order={order} 
          isExpanded={expandedOrder === order.id}
          toggleDetails={() => toggleOrderDetails(order.id)}
        />
      ))}
    </div>
  );
};

export default OrderList;