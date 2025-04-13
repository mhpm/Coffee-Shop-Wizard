import { ProfileHeaderProps } from '../types/profileTypes';

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  name,
  alias,
  avatarId,
  isEditing,
  avatarOptions,
  aliasOptions,
  onAvatarChange,
  onSelectChange,
}) => {
  const selectedAvatar = avatarOptions.find((avatar) => avatar.id === avatarId);

  return (
    <div className="flex flex-col items-center mb-6">
      <div className="w-24 h-24 rounded-full bg-amber-800/20 dark:bg-primary/20 flex items-center justify-center mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-16 h-16 text-amber-500 dark:text-primary"
        >
          {selectedAvatar?.paths.map((path, index) => (
            <path key={index} d={path} {...(selectedAvatar.rules || {})} />
          ))}
        </svg>
      </div>

      {isEditing && (
        <div className="flex space-x-2 mb-4">
          {avatarOptions.map((avatar) => (
            <button
              key={avatar.id}
              onClick={() => onAvatarChange(avatar.id)}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                avatarId === avatar.id
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
                {avatar.paths.map((path, index) => (
                  <path key={index} d={path} {...(avatar.rules || {})} />
                ))}
              </svg>
            </button>
          ))}
        </div>
      )}

      <h2 className="text-xl font-bold text-gray-900 dark:text-white">
        {name}
      </h2>
      <p className="text-gray-600 dark:text-gray-400">{alias}</p>

      {isEditing && (
        <div className="mt-2 w-full max-w-xs">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Choose Alias
          </label>
          <select
            name="alias"
            value={alias}
            onChange={onSelectChange}
            className="w-full px-4 py-2 rounded-xl bg-gray-50 dark:bg-neutral-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-primary"
          >
            {aliasOptions.map((aliasOption, index) => (
              <option key={index} value={aliasOption}>
                {aliasOption}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default ProfileHeader;
