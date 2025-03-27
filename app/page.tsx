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
import { 
  Coffee, 
  Extra, 
  coffees, 
  sizes, 
  milkTypes, 
  extras,
  categoryMapping 
} from '@/data/coffeeData';

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
    let matchesCategory = selectedCategory === 'All';

    if (!matchesCategory) {
      if (selectedCategory === 'Cold Drinks') {
        matchesCategory = categoryMapping['Cold Drinks'].includes(coffee.name);
      } else if (selectedCategory === 'Tea') {
        matchesCategory = categoryMapping['Tea'].includes(coffee.name);
      } else if (selectedCategory === 'Specialty') {
        matchesCategory = categoryMapping['Specialty'].includes(coffee.name);
      } else {
        matchesCategory = coffee.name === selectedCategory;
      }
    }

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
    <main className="min-h-screen bg-gradient-to-b from-background to-primary/5 dark:from-background dark:to-background">
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
            <div className="fixed md:hidden bottom-0 left-0 right-0 p-4 bg-card dark:bg-card border-t border-border">
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

            <h2 className="text-xl font-bold mb-4 md:max-w-xl md:mx-auto text-foreground">
              {searchQuery ? 'Search Results' : 'Popular Coffees'}
              {filteredCoffees.length === 0 && (
                <span className="text-sm font-normal text-muted-foreground ml-2">
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
