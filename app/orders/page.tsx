'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Image from 'next/image';

// Mock order history data
const orderHistory = [
  {
    id: 'ORD-1237',
    date: 'May 16, 2024',
    items: [
      {
        id: 5,
        name: 'Mocha',
        size: 'Large',
        milk: 'Whole Milk',
        extras: ['Chocolate Syrup', 'Whipped Cream'],
        price: 6.49,
        image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c',
      },
    ],
    total: 6.49,
    status: 'In Progress',
  },
  {
    id: 'ORD-1234',
    date: 'May 15, 2024',
    items: [
      {
        id: 1,
        name: 'Cappuccino',
        size: 'Medium',
        milk: 'Oat Milk',
        extras: ['Caramel Syrup'],
        price: 5.99,
        image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d',
      },
    ],
    total: 5.99,
    status: 'Completed',
  },
  {
    id: 'ORD-1235',
    date: 'May 12, 2024',
    items: [
      {
        id: 2,
        name: 'Espresso',
        size: 'Small',
        milk: 'None',
        extras: [],
        price: 3.49,
        image: 'https://images.unsplash.com/photo-1579992357154-faf4bde95b3d',
      },
      {
        id: 3,
        name: 'Croissant',
        size: 'Regular',
        milk: 'None',
        extras: [],
        price: 2.99,
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a',
      },
    ],
    total: 6.48,
    status: 'Canceled',
  },
  {
    id: 'ORD-1236',
    date: 'May 8, 2024',
    items: [
      {
        id: 4,
        name: 'Latte',
        size: 'Large',
        milk: 'Almond Milk',
        extras: ['Vanilla Syrup', 'Extra Shot'],
        price: 6.99,
        image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f',
      },
    ],
    total: 6.99,
    status: 'Completed',
  },
];

const OrdersPage = () => {
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'date' | 'price'>('date');
  const [sortOrder, setSortOrder] = useState<'desc' | 'asc'>('desc');

  const toggleOrderDetails = (orderId: string) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const filteredOrders = orderHistory
    .filter(order => statusFilter === null || order.status === statusFilter)
    .sort((a, b) => {
      if (sortBy === 'price') {
        return sortOrder === 'asc' ? a.total - b.total : b.total - a.total;
      } else {
        // Sort by date
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
      }
    });

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-primary/5 dark:from-background dark:to-background">
      <div className="mx-auto p-4 max-w-md md:max-w-lg lg:max-w-xl">
        <Header
          title="Order History"
          showBackButton={true}
          onBack={() => window.history.back()}
        />

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium text-gray-700 dark:text-gray-300">
            Your Orders
          </h2>
          <button
            onClick={toggleFilters}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-700"
            aria-label="Filter orders"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-gray-700 dark:text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
              />
            </svg>
          </button>
        </div>

        {showFilters && (
          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md p-4 mb-4">
            <h3 className="font-medium text-gray-900 dark:text-white mb-3">Filter Orders</h3>
            
            <div className="mb-3">
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">Status</p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setStatusFilter(null)}
                  className={`px-3 py-1 text-xs rounded-full ${
                    statusFilter === null
                      ? 'bg-amber-500 dark:bg-primary text-white'
                      : 'bg-gray-200 dark:bg-neutral-700 text-gray-800 dark:text-gray-200'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setStatusFilter('Completed')}
                  className={`px-3 py-1 text-xs rounded-full ${
                    statusFilter === 'Completed'
                      ? 'bg-green-500 text-white'
                      : 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400'
                  }`}
                >
                  Completed
                </button>
                <button
                  onClick={() => setStatusFilter('In Progress')}
                  className={`px-3 py-1 text-xs rounded-full ${
                    statusFilter === 'In Progress'
                      ? 'bg-blue-500 text-white'
                      : 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400'
                  }`}
                >
                  In Progress
                </button>
                <button
                  onClick={() => setStatusFilter('Canceled')}
                  className={`px-3 py-1 text-xs rounded-full ${
                    statusFilter === 'Canceled'
                      ? 'bg-red-500 text-white'
                      : 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-400'
                  }`}
                >
                  Canceled
                </button>
              </div>
            </div>
            
            <div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">Sort By</p>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setSortBy('date');
                    setSortOrder(sortBy === 'date' && sortOrder === 'desc' ? 'asc' : 'desc');
                  }}
                  className={`px-3 py-1 text-xs rounded-full flex items-center ${
                    sortBy === 'date'
                      ? 'bg-amber-500 dark:bg-primary text-white'
                      : 'bg-gray-200 dark:bg-neutral-700 text-gray-800 dark:text-gray-200'
                  }`}
                >
                  Date
                  {sortBy === 'date' && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={`w-3 h-3 ml-1 ${sortOrder === 'asc' ? 'rotate-180' : ''}`}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  )}
                </button>
                <button
                  onClick={() => {
                    setSortBy('price');
                    setSortOrder(sortBy === 'price' && sortOrder === 'desc' ? 'asc' : 'desc');
                  }}
                  className={`px-3 py-1 text-xs rounded-full flex items-center ${
                    sortBy === 'price'
                      ? 'bg-amber-500 dark:bg-primary text-white'
                      : 'bg-gray-200 dark:bg-neutral-700 text-gray-800 dark:text-gray-200'
                  }`}
                >
                  Price
                  {sortBy === 'price' && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={`w-3 h-3 ml-1 ${sortOrder === 'asc' ? 'rotate-180' : ''}`}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {orderHistory.length === 0 ? (
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
        ) : (
          <div className="space-y-4 mt-4">
            {filteredOrders.map((order) => (
              <div
                key={order.id}
                className="bg-white dark:bg-neutral-800 rounded-2xl shadow-md overflow-hidden"
              >
                <div
                  className="p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-neutral-700/50 transition-colors"
                  onClick={() => toggleOrderDetails(order.id)}
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
                        <div className={`ml-2 px-2 py-0.5 text-xs font-medium rounded-full ${
                          order.status === 'Completed' 
                            ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400' 
                            : order.status === 'In Progress'
                            ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400'
                            : 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-400'
                        }`}>
                          {order.status}
                        </div>
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
                          expandedOrder === order.id
                            ? 'transform rotate-180'
                            : ''
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

                {expandedOrder === order.id && (
                  <div className="px-4 pb-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="pt-4 space-y-4">
                      {order.items.map((item) => (
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
                              {item.size} •{' '}
                              {item.milk !== 'None' ? item.milk : 'No milk'}
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
                        <div
                          className={`px-3 py-1 text-xs font-medium rounded-full ${
                            order.status === 'Completed'
                              ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400'
                              : order.status === 'In Progress'
                              ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400'
                              : 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-400'
                          }`}
                        >
                          {order.status}
                        </div>
                        <button
                          onClick={() =>
                            console.log('Reorder clicked for', order.id)
                          }
                          className={`px-4 py-1 text-sm text-white rounded-full transition-colors font-medium ${
                            order.status === 'Canceled'
                              ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed'
                              : 'bg-amber-500 dark:bg-primary hover:bg-amber-600 dark:hover:bg-primary/90'
                          }`}
                          disabled={order.status === 'Canceled'}
                        >
                          {order.status === 'In Progress'
                            ? 'Track Order'
                            : 'Reorder'}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default OrdersPage;
