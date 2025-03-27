'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import CoffeeGrid from '@/components/CoffeeGrid';
import CoffeeDetails from '@/components/CoffeeDetails';
import OrderConfirmation from '@/components/OrderConfirmation';
import SuccessMessage from '@/components/SuccessMessage';
import SearchBar from '@/components/SearchBar';
import CategoryFilter from '@/components/CategoryFilter';
import CustomizationPanel from '@/components/CustomizationPanel';
import CheckoutButton from '@/components/CheckoutButton';

// Types moved to a separate file but included here for reference
interface Coffee {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  bgColor: string;
}

interface Extra {
  id: number;
  name: string;
  price: number;
}

// Data could also be moved to a separate file
const coffees = [
  {
    id: 1,
    name: 'Espresso',
    price: 2.99,
    description: 'Strong and concentrated coffee served in a small cup',
    image:
      'https://images.unsplash.com/photo-1610889556528-9a770e32642f?q=80&w=500&auto=format',
    bgColor: 'from-amber-800/80 to-amber-600/80',
  },
  {
    id: 2,
    name: 'Cappuccino',
    price: 3.99,
    description: 'Espresso with steamed milk and foam',
    image:
      'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=500&auto=format',
    bgColor: 'from-amber-700/80 to-amber-500/80',
  },
  {
    id: 3,
    name: 'Latte',
    price: 4.49,
    description:
      'Espresso with a lot of steamed milk and a light layer of foam',
    image:
      'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?q=80&w=500&auto=format',
    bgColor: 'from-amber-600/80 to-amber-400/80',
  },
  {
    id: 4,
    name: 'Mocha',
    price: 4.99,
    description: 'Espresso with chocolate, steamed milk and whipped cream',
    image:
      'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?q=80&w=500&auto=format',
    bgColor: 'from-amber-900/80 to-amber-700/80',
  },
];

const sizes = [
  { id: 1, name: 'Small', price: 0 },
  { id: 2, name: 'Medium', price: 0.5 },
  { id: 3, name: 'Large', price: 1 },
];

const milkTypes = [
  { id: 1, name: 'Whole Milk', price: 0 },
  { id: 2, name: 'Almond Milk', price: 0.5 },
  { id: 3, name: 'Oat Milk', price: 0.5 },
];

const extras = [
  { id: 1, name: 'Whipped Cream', price: 0.5 },
  { id: 2, name: 'Caramel Drizzle', price: 0.5 },
  { id: 3, name: 'Extra Shot', price: 1 },
];

export default function Home() {
  const [selectedCoffee, setSelectedCoffee] = useState<Coffee | null>(null);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [selectedMilk, setSelectedMilk] = useState(milkTypes[0]);
  const [selectedExtras, setSelectedExtras] = useState<Extra[]>([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [quantity, setQuantity] = useState(1);
  // Add new state for search and filter
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleReset = () => {
    setSelectedCoffee(null);
    setSelectedSize(sizes[0]);
    setSelectedMilk(milkTypes[0]);
    setSelectedExtras([]);
    setShowConfirmation(false);
    setShowSuccess(false);
    setQuantity(1);
  };

  // Add function to filter coffees based on search and category
  const filteredCoffees = coffees.filter((coffee) => {
    // First check if it matches the search query
    const matchesSearch =
      coffee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coffee.description.toLowerCase().includes(searchQuery.toLowerCase());

    // Then check if it matches the selected category
    const matchesCategory =
      selectedCategory === 'All' || coffee.name === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const toggleExtra = (extra: Extra) => {
    setSelectedExtras((prev) =>
      prev.some((e) => e.id === extra.id)
        ? prev.filter((e) => e.id !== extra.id)
        : [...prev, extra]
    );
  };

  const calculateTotal = () => {
    const extrasTotal = selectedExtras.reduce(
      (sum, extra) => sum + extra.price,
      0
    );
    return (
      ((selectedCoffee?.price || 0) +
        selectedSize.price +
        selectedMilk.price +
        extrasTotal) *
      quantity
    ).toFixed(2);
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-amber-50 dark:from-neutral-900 dark:to-neutral-800">
      <div className="mx-auto p-4 max-w-md md:max-w-4xl">
        <Header
          title={selectedCoffee ? selectedCoffee.name : 'Kumpul Coffee'}
          showBackButton={!!selectedCoffee}
          onBack={() => setSelectedCoffee(null)}
        />
        {showSuccess ? (
          <SuccessMessage onReset={handleReset} />
        ) : showConfirmation ? (
          <div className="md:max-w-lg md:mx-auto">
            <OrderConfirmation
              coffee={selectedCoffee}
              size={selectedSize}
              milk={selectedMilk}
              extras={selectedExtras}
              quantity={quantity}
              total={calculateTotal()}
              onEdit={() => setShowConfirmation(false)}
              onPlaceOrder={() => setShowSuccess(true)}
            />
          </div>
        ) : selectedCoffee ? (
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div className="space-y-6">
              <CoffeeDetails
                coffee={selectedCoffee}
                onBack={() => setSelectedCoffee(null)}
              />
            </div>
            
            <div className="space-y-6 pb-24 md:pb-0">
              <CustomizationPanel
                quantity={quantity}
                incrementQuantity={incrementQuantity}
                decrementQuantity={decrementQuantity}
                sizes={sizes}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
                milkTypes={milkTypes}
                selectedMilk={selectedMilk}
                setSelectedMilk={setSelectedMilk}
                extras={extras}
                selectedExtras={selectedExtras}
                toggleExtra={toggleExtra}
              />
              
              {/* Desktop checkout button */}
              <div className="hidden md:block mt-6">
                <CheckoutButton 
                  total={calculateTotal()} 
                  onClick={() => setShowConfirmation(true)} 
                />
              </div>
            </div>
            
            {/* Mobile checkout button */}
            <div className="fixed md:hidden bottom-0 left-0 right-0 p-4 bg-white dark:bg-neutral-800 border-t border-gray-200 dark:border-neutral-700">
              <div className="max-w-md mx-auto">
                <CheckoutButton 
                  total={calculateTotal()} 
                  onClick={() => setShowConfirmation(true)} 
                />
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6 md:max-w-xl md:mx-auto">
              <SearchBar 
                searchQuery={searchQuery} 
                setSearchQuery={setSearchQuery} 
              />
              
              <CategoryFilter 
                selectedCategory={selectedCategory} 
                setSelectedCategory={setSelectedCategory} 
              />
            </div>

            <h2 className="text-xl font-bold mb-4 md:max-w-xl md:mx-auto">
              {searchQuery ? 'Search Results' : 'Popular Coffees'}
              {filteredCoffees.length === 0 && (
                <span className="text-sm font-normal text-gray-500 ml-2">
                  No results found
                </span>
              )}
            </h2>
            
            <div className="md:max-w-4xl md:mx-auto">
              <CoffeeGrid
                coffees={filteredCoffees}
                onSelect={(coffee: Coffee) => setSelectedCoffee(coffee)}
              />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
