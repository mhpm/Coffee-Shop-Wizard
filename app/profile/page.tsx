"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: "Michelle Perez",
    email: "michelle@example.com",
    phone: "+1 (555) 123-4567",
    avatarId: 1,
    alias: "Coffee Enthusiast"
  });

  const aliasOptions = [
    "Coffee Enthusiast",
    "Espresso Expert",
    "Latte Lover",
    "Caffeine Connoisseur",
    "Brew Master",
    "Coffee Explorer"
  ];

  const avatarOptions = [
    {
      id: 1,
      icon: (
        <path
          d="M2 4a2 2 0 012-2h16a2 2 0 012 2v1H2V4zm18 3H4v10a3 3 0 003 3h10a3 3 0 003-3V7zM8 10a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1z"
          fillRule="evenodd"
        />
      )
    },
    {
      id: 2,
      icon: (
        <>
          <path d="M4 4a2 2 0 012-2h12a2 2 0 012 2v2H4V4z" />
          <path d="M18 8H6v10a2 2 0 002 2h8a2 2 0 002-2V8z" />
          <path d="M20 10c1.1 0 2 .9 2 2s-.9 2-2 2v-4z" />
        </>
      )
    },
    {
      id: 3,
      icon: (
        <>
          <path d="M7 3C6.44772 3 6 3.44772 6 4V4.5H18V4C18 3.44772 17.5523 3 17 3H7Z" />
          <path d="M19.5 5.5H4.5V8C4.5 9.65685 5.84315 11 7.5 11H16.5C18.1569 11 19.5 9.65685 19.5 8V5.5Z" />
          <path d="M4 13.5V14C4 17.3137 6.68629 20 10 20H14C17.3137 20 20 17.3137 20 14V13.5H4Z" />
        </>
      )
    },
    {
      id: 4,
      icon: (
        <>
          <path d="M5 3.5C5 3.22386 5.22386 3 5.5 3H18.5C18.7761 3 19 3.22386 19 3.5V5H5V3.5Z" />
          <path d="M4 7C4 6.44772 4.44772 6 5 6H19C19.5523 6 20 6.44772 20 7V8C20 9.65685 18.6569 11 17 11H7C5.34315 11 4 9.65685 4 8V7Z" />
          <path d="M6 12H18L17 20C16.9065 20.5826 16.4017 21 15.811 21H8.18896C7.59829 21 7.09346 20.5826 7 20L6 12Z" />
        </>
      )
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAvatarChange = (avatarId: number) => {
    setUserData(prev => ({
      ...prev,
      avatarId
    }));
  };

  const handleSave = () => {
    console.log('Saving profile data:', userData);
    setIsEditing(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-primary/5 dark:from-background dark:to-background">
      <div className="mx-auto p-4 max-w-md">
        <Header title="Profile" showBackButton={true} onBack={() => window.history.back()} />
        
        <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-md p-6 mt-4">
          <div className="flex flex-col items-center mb-6">
            <div className="w-24 h-24 rounded-full bg-amber-800/20 dark:bg-primary/20 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-16 h-16 text-amber-500 dark:text-primary"
              >
                {avatarOptions.find(avatar => avatar.id === userData.avatarId)?.icon}
              </svg>
            </div>
            
            {isEditing && (
              <div className="flex space-x-2 mb-4">
                {avatarOptions.map(avatar => (
                  <button
                    key={avatar.id}
                    onClick={() => handleAvatarChange(avatar.id)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      userData.avatarId === avatar.id 
                        ? 'bg-amber-500 dark:bg-primary text-white' 
                        : 'bg-gray-200 dark:bg-neutral-700 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      {avatar.icon}
                    </svg>
                  </button>
                ))}
              </div>
            )}
            
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">{userData.name}</h2>
            <p className="text-gray-600 dark:text-gray-400">{userData.alias}</p>
            
            {isEditing && (
              <div className="mt-2 w-full max-w-xs">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Choose Alias</label>
                <select
                  name="alias"
                  value={userData.alias}
                  onChange={handleSelectChange}
                  className="w-full px-4 py-2 rounded-xl bg-gray-50 dark:bg-neutral-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-primary"
                >
                  {aliasOptions.map((alias, index) => (
                    <option key={index} value={alias}>
                      {alias}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
              <input
                type="text"
                name="name"
                className="w-full px-4 py-2 rounded-xl bg-gray-50 dark:bg-neutral-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-primary"
                value={userData.name}
                onChange={handleInputChange}
                readOnly={!isEditing}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 rounded-xl bg-gray-50 dark:bg-neutral-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-primary"
                value={userData.email}
                onChange={handleInputChange}
                readOnly={!isEditing}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                className="w-full px-4 py-2 rounded-xl bg-gray-50 dark:bg-neutral-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-primary"
                value={userData.phone}
                onChange={handleInputChange}
                readOnly={!isEditing}
              />
            </div>
            
            <div className="pt-4">
              {isEditing ? (
                <button
                  className="w-full py-3 bg-amber-500 dark:bg-primary text-white rounded-xl shadow-lg hover:bg-amber-600 dark:hover:bg-primary/90 transition-colors font-medium"
                  onClick={handleSave}
                >
                  Save Profile
                </button>
              ) : (
                <button
                  className="w-full py-3 bg-amber-500 dark:bg-primary text-white rounded-xl shadow-lg hover:bg-amber-600 dark:hover:bg-primary/90 transition-colors font-medium"
                  onClick={() => setIsEditing(true)}
                >
                  Edit Profile
                </button>
              )}
            </div>
            
            <div className="pt-2">
              <button
                className="w-full py-3 bg-white dark:bg-neutral-800 text-red-600 dark:text-red-400 border border-red-600 dark:border-red-400 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors font-medium"
                onClick={() => console.log('Logout clicked')}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;