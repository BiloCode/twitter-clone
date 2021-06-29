import { createStore } from 'effector';
import { TAccountState } from './types';

const initialState: TAccountState[] = [
  {
    _id: '3512asde2b12r1ieu2',
    createdAt: new Date(),
    following: [],
    followers: [],
    notifications: 0,
    personalInformation: {
      nickname: 'TheBilo16',
      username: 'TBilo16',
      profileImage:
        'https://i1.wp.com/polvora.com.mx/wp-content/uploads/2020/07/Bugs-bunny-80-10.jpg?fit=1600%2C900&ssl=1',
      backgroundImage: '',
      description: 'I am Programmer and Gamer',
    },
  },
  {
    _id: '3512asde2123b12r1ieu2',
    createdAt: new Date(),
    following: [],
    followers: [],
    notifications: 5,
    personalInformation: {
      nickname: 'Billy Alexander Paredes Aycho',
      username: 'AychoBilly',
      profileImage:
        'https://tvazteca.brightspotcdn.com/f2/f0/3a4f0d4c4ebe80ada7d68a8e1f64/bugs.JPG',
      backgroundImage: '',
      description: '',
    },
  },
];

export const accountsStore = createStore<TAccountState[]>(initialState);
