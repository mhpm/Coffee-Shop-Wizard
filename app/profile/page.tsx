"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import ProfileHeader from './components/ProfileHeader';
import ProfileForm from './components/ProfileForm';
import { avatarOptions, aliasOptions, defaultUserData } from './data/profileData';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState(defaultUserData);

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

  const handleLogout = () => {
    console.log('Logout clicked');
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-primary/5 dark:from-background dark:to-background">
      <div className="mx-auto p-4 max-w-md">
        <Header title="Profile" showBackButton={true} onBack={() => window.history.back()} />
        
        <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-md p-6 mt-4">
          <ProfileHeader 
            name={userData.name}
            alias={userData.alias}
            avatarId={userData.avatarId}
            isEditing={isEditing}
            avatarOptions={avatarOptions}
            aliasOptions={aliasOptions}
            onAvatarChange={handleAvatarChange}
            onSelectChange={handleSelectChange}
          />
          
          <ProfileForm 
            userData={userData}
            isEditing={isEditing}
            onInputChange={handleInputChange}
            onSave={handleSave}
            onEdit={() => setIsEditing(true)}
            onLogout={handleLogout}
          />
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;