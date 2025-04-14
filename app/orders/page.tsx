'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import { orderHistory } from './data/orderData';
import PageHeader from './components/PageHeader';
import FilterPanel from './components/FilterPanel';
import OrderList from './components/OrderList';
import { Suspense } from 'react';

// Loading component for the order list
function OrderListLoading() {
  return (
    <div className="p-4 space-y-4">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="bg-gray-200 dark:bg-gray-700 h-24 rounded-xl animate-pulse"
        ></div>
      ))}
    </div>
  );
}

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
    .filter((order) => statusFilter === null || order.status === statusFilter)
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

        <PageHeader toggleFilters={toggleFilters} />

        {showFilters && (
          <FilterPanel
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            sortBy={sortBy}
            setSortBy={setSortBy}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
          />
        )}

        <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-md overflow-hidden mt-4">
          <Suspense fallback={<OrderListLoading />}>
            <OrderList
              orders={filteredOrders}
              expandedOrder={expandedOrder}
              toggleOrderDetails={toggleOrderDetails}
            />
          </Suspense>
        </div>
      </div>
    </main>
  );
};

export default OrdersPage;
