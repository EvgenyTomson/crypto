import { TAchievement, TFeedback } from '../types';

import lorenzo from '../assets/images/avatars/lorenzo.jpg';
import adalina from '../assets/images/avatars/adalina.jpg';
import alexander from '../assets/images/avatars/alexander.jpg';
import ruslana from '../assets/images/avatars/ruslana.jpg';

export const mockFeedbacks: TFeedback[] = [
  {
    author: {
      name: 'lorenzo',
      nickName: '@lorenzoo',
      avatar: lorenzo,
    },
    message: 'Amazing Telegram bot! Provides real-time crypto prices and news',
  },
  {
    author: {
      name: 'adalina',
      nickName: '@ada',
      avatar: adalina,
    },
    message: 'Must-have bot for crypto traders. Accurate signals and analysis',
  },
  {
    author: {
      name: 'alexander',
      nickName: '@alex_x',
      avatar: alexander,
    },
    message: 'Superb cryptocurrency bot! Quick updates and reliable data',
  },
  {
    author: {
      name: 'ruslana',
      nickName: '@Hana',
      avatar: ruslana,
    },
    message: 'Efficient and user-friendly bot. Simplifies crypto trading tasks',
  },
];

export const achievements: TAchievement[] = [
  {
    name: 'subscribers',
    score: '20k+',
  },
  {
    name: 'successful cases',
    score: '19,5K',
  },
  {
    name: 'rating',
    score: '4.8/5',
  },
];
