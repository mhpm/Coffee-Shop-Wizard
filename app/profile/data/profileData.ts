import { AvatarOption, UserData } from '../types/profileTypes';

export const aliasOptions = [
  'Coffee Enthusiast',
  'Espresso Expert',
  'Latte Lover',
  'Caffeine Connoisseur',
  'Brew Master',
  'Coffee Explorer',
];

export const avatarOptions: AvatarOption[] = [
  {
    id: 1,
    paths: [
      'M2 4a2 2 0 012-2h16a2 2 0 012 2v1H2V4zm18 3H4v10a3 3 0 003 3h10a3 3 0 003-3V7zM8 10a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1z',
    ],
    rules: { fillRule: 'evenodd' },
  },
  {
    id: 2,
    paths: [
      'M4 4a2 2 0 012-2h12a2 2 0 012 2v2H4V4z',
      'M18 8H6v10a2 2 0 002 2h8a2 2 0 002-2V8z',
      'M20 10c1.1 0 2 .9 2 2s-.9 2-2 2v-4z',
    ],
  },
  {
    id: 3,
    paths: [
      'M7 3C6.44772 3 6 3.44772 6 4V4.5H18V4C18 3.44772 17.5523 3 17 3H7Z',
      'M19.5 5.5H4.5V8C4.5 9.65685 5.84315 11 7.5 11H16.5C18.1569 11 19.5 9.65685 19.5 8V5.5Z',
      'M4 13.5V14C4 17.3137 6.68629 20 10 20H14C17.3137 20 20 17.3137 20 14V13.5H4Z',
    ],
  },
  {
    id: 4,
    paths: [
      'M5 3.5C5 3.22386 5.22386 3 5.5 3H18.5C18.7761 3 19 3.22386 19 3.5V5H5V3.5Z',
      'M4 7C4 6.44772 4.44772 6 5 6H19C19.5523 6 20 6.44772 20 7V8C20 9.65685 18.6569 11 17 11H7C5.34315 11 4 9.65685 4 8V7Z',
      'M6 12H18L17 20C16.9065 20.5826 16.4017 21 15.811 21H8.18896C7.59829 21 7.09346 20.5826 7 20L6 12Z',
    ],
  },
];

export const defaultUserData: UserData = {
  name: 'Michelle Perez',
  email: 'michelle@example.com',
  phone: '+1 (555) 123-4567',
  avatarId: 1,
  alias: 'Coffee Enthusiast',
};
