'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Coffee {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

const coffees: Coffee[] = [
  {
    id: 1,
    name: 'Espresso',
    price: 2.99,
    description: 'Strong and concentrated coffee served in a small cup',
    image:
      'https://images.unsplash.com/photo-1610889556528-9a770e32642f?q=80&w=500&auto=format',
  },
  {
    id: 2,
    name: 'Cappuccino',
    price: 3.99,
    description: 'Espresso with steamed milk and foam',
    image:
      'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=500&auto=format',
  },
  {
    id: 3,
    name: 'Latte',
    price: 4.49,
    description:
      'Espresso with a lot of steamed milk and a light layer of foam',
    image:
      'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?q=80&w=500&auto=format',
  },
  {
    id: 4,
    name: 'Mocha',
    price: 4.99,
    description: 'Espresso with chocolate, steamed milk and whipped cream',
    image:
      'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?q=80&w=500&auto=format',
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
    <main className="container mx-auto p-4 bg-base-200 min-h-screen flex flex-col lg:flex-row gap-6">
      {/* Sidebar for Steps */}
      <aside className="w-full lg:w-1/4 bg-base-100 shadow-lg rounded-lg p-4 border border-primary/20">
        <h2 className="text-xl font-bold text-primary mb-4">Order Steps</h2>
        <ul className="steps steps-vertical">
          <li className={`step ${step >= 1 ? 'step-primary' : ''}`}>
            Select Coffee
          </li>
          <li className={`step ${step >= 2 ? 'step-primary' : ''}`}>
            Customize
          </li>
          <li className={`step ${step >= 3 ? 'step-primary' : ''}`}>Confirm</li>
        </ul>
      </aside>

      {/* Main Content */}
      <section className="flex-1">
        {showSuccess ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              {/* Success Animation */}
              <div className="w-24 h-24 mx-auto mb-4">
                <div className="checkmark-circle flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-12 h-12"
                  >
                    <circle cx="12" cy="12" r="10" stroke="#ffffff" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-primary">Order Placed!</h3>
              <p className="text-secondary mt-2">Thank you for your order.</p>
            </div>
          </div>
        ) : showConfirmation ? (
          <div className="modal modal-open">
            <div className="modal-box">
              <h3 className="font-bold text-xl text-primary">
                Order Confirmation
              </h3>
              <div className="py-4">
                {/* Coffee Image */}
                {selectedCoffee?.image && (
                  <div className="w-full h-40 md:h-64 rounded-xl overflow-hidden mb-4">
                    <Image
                      src={selectedCoffee.image}
                      alt={selectedCoffee.name}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Coffee Details */}
                <p>
                  <span className="font-bold text-secondary">Coffee:</span>{' '}
                  {selectedCoffee?.name}
                </p>
                <p>
                  <span className="font-bold text-secondary">Size:</span>{' '}
                  {size.charAt(0).toUpperCase() + size.slice(1)}
                </p>
                {extras.length > 0 && (
                  <div>
                    <p className="font-bold text-secondary">Extras:</p>
                    <ul className="list-disc pl-5">
                      {extras.map((extra) => (
                        <li key={extra}>{extra}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <p className="mt-4 text-xl font-bold">
                  Total: ${calculateTotal()}
                </p>
              </div>
              <div className="modal-action">
                <button className="btn btn-primary" onClick={handlePlaceOrder}>
                  Place Order
                </button>
                <button
                  className="btn btn-outline btn-secondary"
                  onClick={() => {
                    setShowConfirmation(false);
                    setStep(2);
                  }}
                >
                  Edit Order
                </button>
              </div>
            </div>
          </div>
        ) : selectedCoffee ? (
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Coffee Details */}
            <div className="card bg-base-100 shadow-xl w-full lg:w-1/2 border border-primary/20">
              <figure className="px-4 pt-4 md:px-10 md:pt-10">
                <div className="w-full h-48 md:h-64 rounded-xl overflow-hidden">
                  <Image
                    src={selectedCoffee.image}
                    alt={selectedCoffee.name}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </figure>
              <div className="card-body">
                <h2 className="card-title text-xl md:text-2xl text-primary">
                  {selectedCoffee.name}
                </h2>
                <p>{selectedCoffee.description}</p>
                <p className="text-lg font-semibold badge badge-secondary badge-lg">
                  Base Price: ${selectedCoffee.price.toFixed(2)}
                </p>
                <button
                  className="btn btn-outline mt-4"
                  onClick={() => {
                    setSelectedCoffee(null);
                    setStep(1);
                  }}
                >
                  Change Coffee
                </button>
              </div>
            </div>

            {/* Customization Section */}
            <div className="card bg-base-100 shadow-xl w-full lg:w-1/2 border border-primary/20">
              <div className="card-body">
                <h2 className="card-title text-primary">
                  Customize Your Coffee
                </h2>

                {/* Size Selection */}
                <div className="form-control mt-2">
                  <label className="label">
                    <span className="label-text font-semibold text-secondary">
                      Size
                    </span>
                  </label>
                  <div className="join w-full">
                    <button
                      className={`join-item btn ${
                        size === 'small' ? 'btn-active' : ''
                      } flex-1`}
                      onClick={() => setSize('small')}
                    >
                      Small (-$0.50)
                    </button>
                    <button
                      className={`join-item btn ${
                        size === 'medium' ? 'btn-active' : ''
                      } flex-1`}
                      onClick={() => setSize('medium')}
                    >
                      Medium
                    </button>
                    <button
                      className={`join-item btn ${
                        size === 'large' ? 'btn-active' : ''
                      } flex-1`}
                      onClick={() => setSize('large')}
                    >
                      Large (+$1.00)
                    </button>
                  </div>
                </div>

                {/* Extras Selection */}
                <div className="form-control mt-4">
                  <label className="label">
                    <span className="label-text font-semibold text-secondary">
                      Extras
                    </span>
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {extraOptions.map((extra) => (
                      <div key={extra.name} className="form-control">
                        <label className="label cursor-pointer gap-2">
                          <input
                            type="checkbox"
                            className="checkbox checkbox-primary"
                            checked={extras.includes(extra.name)}
                            onChange={() => handleExtraToggle(extra.name)}
                          />
                          <span className="label-text">
                            {extra.name}{' '}
                            <span className="badge badge-sm">
                              (+${extra.price.toFixed(2)})
                            </span>
                          </span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sticky Total Section */}
                <div className="divider"></div>
                <p className="text-xl font-bold badge badge-lg badge-accent p-4 sticky top-0 bg-base-100">
                  Total: ${calculateTotal()}
                </p>

                <div className="card-actions justify-between mt-4">
                  <button
                    className="btn btn-outline"
                    onClick={() => {
                      setSelectedCoffee(null);
                      setStep(1);
                    }}
                  >
                    Back
                  </button>
                  <button className="btn btn-primary" onClick={handleCheckout}>
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-center mb-6 text-secondary">
              Select Your Coffee
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {coffees.map((coffee) => (
                <div
                  key={coffee.id}
                  className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow cursor-pointer border border-primary/20"
                  onClick={() => handleCoffeeSelect(coffee)}
                >
                  <figure className="px-4 pt-4">
                    <div className="w-full h-40 rounded-xl overflow-hidden">
                      <Image
                        src={coffee.image}
                        alt={coffee.name}
                        width={300}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </figure>
                  <div className="card-body p-4">
                    <h2 className="card-title text-primary">{coffee.name}</h2>
                    <p className="text-sm">{coffee.description}</p>
                    <p className="text-lg font-semibold badge badge-secondary">
                      ${coffee.price.toFixed(2)}
                    </p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary btn-sm">Select</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
