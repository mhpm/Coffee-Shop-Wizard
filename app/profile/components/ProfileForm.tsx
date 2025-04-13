import React from 'react';
import { ProfileFormProps } from '../types/profileTypes';

const ProfileForm: React.FC<ProfileFormProps> = ({
  userData,
  isEditing,
  onInputChange,
  onSave,
  onEdit,
  onLogout
}) => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
        <input
          type="text"
          name="name"
          className="w-full px-4 py-2 rounded-xl bg-gray-50 dark:bg-neutral-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-primary"
          value={userData.name}
          onChange={onInputChange}
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
          onChange={onInputChange}
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
          onChange={onInputChange}
          readOnly={!isEditing}
        />
      </div>
      
      <div className="pt-4">
        {isEditing ? (
          <button
            className="w-full py-3 bg-amber-500 dark:bg-primary text-white rounded-xl shadow-lg hover:bg-amber-600 dark:hover:bg-primary/90 transition-colors font-medium"
            onClick={onSave}
          >
            Save Profile
          </button>
        ) : (
          <button
            className="w-full py-3 bg-amber-500 dark:bg-primary text-white rounded-xl shadow-lg hover:bg-amber-600 dark:hover:bg-primary/90 transition-colors font-medium"
            onClick={onEdit}
          >
            Edit Profile
          </button>
        )}
      </div>
      
      <div className="pt-2">
        <button
          className="w-full py-3 bg-white dark:bg-neutral-800 text-red-600 dark:text-red-400 border border-red-600 dark:border-red-400 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors font-medium"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileForm;