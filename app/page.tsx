'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Coffee {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  bgColor?: string;
}

const coffees: Coffee[] = [
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

const sizes = {
  small: -0.5,
  medium: 0,
  large: 1.0,
};

const extraOptions = [
  { name: 'Extra Shot', price: 0.99 },
  { name: 'Vanilla Syrup', price: 0.75 },
  { name: 'Caramel Syrup', price: 0.75 },
  { name: 'Whipped Cream', price: 0.5 },
];

export default function Home() {
  const [selectedCoffee, setSelectedCoffee] = useState<Coffee | null>(null);
  const [size, setSize] = useState<string>('medium');
  const [extras, setExtras] = useState<string[]>([]);
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false); // New state for success animation
  const [step, setStep] = useState<number>(1);

  const handleExtraToggle = (extraName: string) => {
    if (extras.includes(extraName)) {
      setExtras(extras.filter((e) => e !== extraName));
    } else {
      setExtras([...extras, extraName]);
    }
  };

  const calculateTotal = () => {
    if (!selectedCoffee) return 0;
    let total = selectedCoffee.price;

    // Add size price adjustment
    total += sizes[size as keyof typeof sizes];

    // Add extras
    extras.forEach((extra) => {
      const extraOption = extraOptions.find((e) => e.name === extra);
      if (extraOption) {
        total += extraOption.price;
      }
    });

    return total.toFixed(2);
  };

  const handleCheckout = () => {
    setShowConfirmation(true);
    setStep(3);
  };

  const resetOrder = () => {
    setSelectedCoffee(null);
    setSize('medium');
    setExtras([]);
    setShowConfirmation(false);
    setStep(1);
  };

  const handlePlaceOrder = () => {
    setShowSuccess(true); // Show success animation
    setTimeout(() => {
      setShowSuccess(false); // Hide success animation after 3 seconds
      resetOrder(); // Reset the order
    }, 3000);
  };

  const handleCoffeeSelect = (coffee: Coffee) => {
    setSelectedCoffee(coffee);
    setStep(2);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
      <div className="container mx-auto p-4 lg:p-8">
        {/* Header with gradient */}
        <div className="relative mb-8 rounded-2xl overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-400 opacity-90"></div>
          <div className="relative z-10 px-6 py-12 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">
              Coffee Wizard
            </h1>
            <p className="text-lg opacity-90">
              Craft your perfect coffee experience
            </p>
          </div>
          <div className="absolute inset-0 -z-10">
            <Image
              src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1000&auto=format"
              alt="Coffee background"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar with glass morphism */}
          <aside className="w-full lg:w-1/4 backdrop-blur-md bg-white/30 dark:bg-neutral-800/30 rounded-2xl p-6 shadow-lg border border-white/20 dark:border-neutral-700/20 self-start sticky top-8">
            <h2 className="text-xl font-bold text-amber-700 dark:text-amber-500 mb-6">
              Order Progress
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= 1
                      ? 'bg-gradient-to-r from-amber-600 to-amber-400 text-white'
                      : 'bg-white/50 dark:bg-neutral-700/50 text-neutral-400'
                  }`}
                >
                  1
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-sm font-medium">Step 1</span>
                  <span className="text-xs opacity-70">Select Coffee</span>
                </div>
              </div>
              <div className="w-0.5 h-4 bg-amber-200 dark:bg-amber-800 ml-4"></div>
              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= 2
                      ? 'bg-gradient-to-r from-amber-600 to-amber-400 text-white'
                      : 'bg-white/50 dark:bg-neutral-700/50 text-neutral-400'
                  }`}
                >
                  2
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-sm font-medium">Step 2</span>
                  <span className="text-xs opacity-70">Customize</span>
                </div>
              </div>
              <div className="w-0.5 h-4 bg-amber-200 dark:bg-amber-800 ml-4"></div>
              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= 3
                      ? 'bg-gradient-to-r from-amber-600 to-amber-400 text-white'
                      : 'bg-white/50 dark:bg-neutral-700/50 text-neutral-400'
                  }`}
                >
                  3
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-sm font-medium">Step 3</span>
                  <span className="text-xs opacity-70">Confirm</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <section className="flex-1">
            {showSuccess ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center backdrop-blur-md bg-white/30 dark:bg-neutral-800/30 rounded-2xl p-12 shadow-lg border border-white/20 dark:border-neutral-700/20">
                  {/* Success Animation with gradient */}
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-400 flex items-center justify-center shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-12 h-12"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gradient bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
                    Order Placed!
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-300 mt-3 mb-6">
                    Thank you for your order. Enjoy your coffee!
                  </p>
                  <button
                    onClick={resetOrder}
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-600 to-amber-400 text-white font-medium hover:from-amber-700 hover:to-amber-500 transition-all"
                  >
                    New Order
                  </button>
                </div>
              </div>
            ) : showConfirmation ? (
              <div className="backdrop-blur-md bg-white/30 dark:bg-neutral-800/30 rounded-2xl p-6 shadow-lg border border-white/20 dark:border-neutral-700/20">
                <h3 className="text-2xl font-bold text-gradient bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent mb-6">
                  Order Confirmation
                </h3>
                <div className="py-4">
                  {/* Coffee Image with gradient overlay */}
                  {selectedCoffee?.image && (
                    <div className="relative w-full h-48 md:h-64 rounded-xl overflow-hidden mb-6 shadow-lg">
                      <Image
                        src={selectedCoffee.image}
                        alt={selectedCoffee.name}
                        width={500}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-tr ${
                          selectedCoffee.bgColor ||
                          'from-amber-700/80 to-amber-500/80'
                        }`}
                      ></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h4 className="text-xl font-bold">
                          {selectedCoffee.name}
                        </h4>
                        <p className="text-sm opacity-90">
                          ${selectedCoffee.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Order details with subtle styling */}
                  <div className="space-y-4 p-6 rounded-xl bg-white/50 dark:bg-neutral-800/50 shadow-inner">
                    <p className="flex justify-between">
                      <span className="font-medium text-neutral-600 dark:text-neutral-300">
                        Coffee:
                      </span>
                      <span className="font-bold text-amber-700 dark:text-amber-500">
                        {selectedCoffee?.name}
                      </span>
                    </p>
                    <p className="flex justify-between">
                      <span className="font-medium text-neutral-600 dark:text-neutral-300">
                        Size:
                      </span>
                      <span className="font-bold text-amber-700 dark:text-amber-500">
                        {size.charAt(0).toUpperCase() + size.slice(1)}
                      </span>
                    </p>
                    {extras.length > 0 && (
                      <div>
                        <p className="font-medium text-neutral-600 dark:text-neutral-300 mb-2">
                          Extras:
                        </p>
                        <ul className="space-y-1">
                          {extras.map((extra) => (
                            <li key={extra} className="flex justify-between">
                              <span>{extra}</span>
                              <span className="font-bold text-amber-700 dark:text-amber-500">
                                +$
                                {extraOptions
                                  .find((e) => e.name === extra)
                                  ?.price.toFixed(2)}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="h-px bg-gradient-to-r from-transparent via-amber-200 dark:via-amber-800 to-transparent my-4"></div>
                    <p className="flex justify-between text-xl">
                      <span className="font-bold">Total:</span>
                      <span className="font-bold text-gradient bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
                        ${calculateTotal()}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-end mt-6">
                  <button
                    className="px-4 py-2 rounded-lg border border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white transition-all"
                    onClick={() => {
                      setShowConfirmation(false);
                      setStep(2);
                    }}
                  >
                    Edit Order
                  </button>
                  <button
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-600 to-amber-400 text-white font-medium hover:from-amber-700 hover:to-amber-500 transition-all"
                    onClick={handlePlaceOrder}
                  >
                    Place Order
                  </button>
                </div>
              </div>
            ) : selectedCoffee ? (
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Coffee Details with glass morphism */}
                <div className="backdrop-blur-md bg-white/30 dark:bg-neutral-800/30 rounded-2xl overflow-hidden shadow-lg border border-white/20 dark:border-neutral-700/20 w-full lg:w-1/2">
                  <div className="relative h-56 md:h-72">
                    <Image
                      src={selectedCoffee.image}
                      alt={selectedCoffee.name}
                      fill
                      className="object-cover"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-tr ${
                        selectedCoffee.bgColor ||
                        'from-amber-700/80 to-amber-500/80'
                      }`}
                    ></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h2 className="text-2xl md:text-3xl font-bold">
                        {selectedCoffee.name}
                      </h2>
                      <p className="text-lg font-semibold">
                        ${selectedCoffee.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-neutral-600 dark:text-neutral-300 mb-6">
                      {selectedCoffee.description}
                    </p>
                    <button
                      className="w-full px-4 py-2 rounded-lg border border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white transition-all"
                      onClick={() => {
                        setSelectedCoffee(null);
                        setStep(1);
                      }}
                    >
                      Change Coffee
                    </button>
                  </div>
                </div>

                {/* Customization Section with glass morphism */}
                <div className="backdrop-blur-md bg-white/30 dark:bg-neutral-800/30 rounded-2xl p-6 shadow-lg border border-white/20 dark:border-neutral-700/20 w-full lg:w-1/2">
                  <h2 className="text-xl font-bold text-gradient bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent mb-6">
                    Customize Your Coffee
                  </h2>

                  {/* Size Selection with modern styling */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-neutral-600 dark:text-neutral-300 mb-3">
                      Size
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      <button
                        className={`relative px-4 py-3 rounded-xl transition-all ${
                          size === 'small'
                            ? 'bg-gradient-to-r from-amber-600 to-amber-400 text-white shadow-md'
                            : 'bg-white/50 dark:bg-neutral-700/50 hover:bg-white/80 dark:hover:bg-neutral-700/80'
                        }`}
                        onClick={() => setSize('small')}
                      >
                        <span className="block text-xs mb-1">Small</span>
                        <span className="block text-xs font-bold">-$0.50</span>
                      </button>
                      <button
                        className={`relative px-4 py-3 rounded-xl transition-all ${
                          size === 'medium'
                            ? 'bg-gradient-to-r from-amber-600 to-amber-400 text-white shadow-md'
                            : 'bg-white/50 dark:bg-neutral-700/50 hover:bg-white/80 dark:hover:bg-neutral-700/80'
                        }`}
                        onClick={() => setSize('medium')}
                      >
                        <span className="block text-xs mb-1">Medium</span>
                        <span className="block text-xs font-bold">
                          Standard
                        </span>
                      </button>
                      <button
                        className={`relative px-4 py-3 rounded-xl transition-all ${
                          size === 'large'
                            ? 'bg-gradient-to-r from-amber-600 to-amber-400 text-white shadow-md'
                            : 'bg-white/50 dark:bg-neutral-700/50 hover:bg-white/80 dark:hover:bg-neutral-700/80'
                        }`}
                        onClick={() => setSize('large')}
                      >
                        <span className="block text-xs mb-1">Large</span>
                        <span className="block text-xs font-bold">+$1.00</span>
                      </button>
                    </div>
                  </div>

                  {/* Extras Selection with modern styling */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-neutral-600 dark:text-neutral-300 mb-3">
                      Extras
                    </label>
                    <div className="space-y-3">
                      {extraOptions.map((extra) => (
                        <div
                          key={extra.name}
                          className={`p-3 rounded-xl transition-all cursor-pointer ${
                            extras.includes(extra.name)
                              ? 'bg-gradient-to-r from-amber-600/20 to-amber-400/20 border border-amber-500'
                              : 'bg-white/50 dark:bg-neutral-700/50 border border-transparent'
                          }`}
                          onClick={() => handleExtraToggle(extra.name)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-5 h-5 rounded-full flex items-center justify-center ${
                                  extras.includes(extra.name)
                                    ? 'bg-gradient-to-r from-amber-600 to-amber-400'
                                    : 'bg-white dark:bg-neutral-600'
                                }`}
                              >
                                {extras.includes(extra.name) && (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-3 h-3 text-white"
                                  >
                                    <path d="M20 6L9 17l-5-5" />
                                  </svg>
                                )}
                              </div>
                              <span className="font-medium">{extra.name}</span>
                            </div>
                            <span className="text-sm font-bold text-amber-700 dark:text-amber-500">
                              +${extra.price.toFixed(2)}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Total with gradient border */}
                  <div className="p-4 rounded-xl bg-white/50 dark:bg-neutral-800/50 shadow-inner border border-gradient-to-r from-amber-300 to-amber-100 dark:from-amber-700 dark:to-amber-900 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-medium">Total</span>
                      <span className="text-2xl font-bold text-gradient bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
                        ${calculateTotal()}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-between">
                    <button
                      className="px-4 py-2 rounded-lg border border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white transition-all"
                      onClick={() => {
                        setSelectedCoffee(null);
                        setStep(1);
                      }}
                    >
                      Back
                    </button>
                    <button
                      className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-600 to-amber-400 text-white font-medium hover:from-amber-700 hover:to-amber-500 transition-all"
                      onClick={handleCheckout}
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold text-gradient bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent mb-8 text-center">
                  Select Your Coffee
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {coffees.map((coffee) => (
                    <div
                      key={coffee.id}
                      className="group backdrop-blur-md bg-white/30 dark:bg-neutral-800/30 rounded-2xl overflow-hidden shadow-lg border border-white/20 dark:border-neutral-700/20 transition-all hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                      onClick={() => handleCoffeeSelect(coffee)}
                    >
                      <div className="relative h-48">
                        <Image
                          src={coffee.image}
                          alt={coffee.name}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                        <div
                          className={`absolute inset-0 bg-gradient-to-tr ${
                            coffee.bgColor ||
                            'from-amber-700/80 to-amber-500/80'
                          } opacity-80 group-hover:opacity-90 transition-opacity`}
                        ></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <h3 className="text-xl font-bold">{coffee.name}</h3>
                          <p className="text-sm font-medium">
                            ${coffee.price.toFixed(2)}
                          </p>
                        </div>
                      </div>
                      <div className="p-4">
                        <p className="text-sm text-neutral-600 dark:text-neutral-300 line-clamp-2 mb-4">
                          {coffee.description}
                        </p>
                        <button className="w-full py-2 rounded-lg bg-gradient-to-r from-amber-600 to-amber-400 text-white text-sm font-medium transition-transform hover:scale-105">
                          Select
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
