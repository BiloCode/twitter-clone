import { createStore } from "effector";
import { IAccountState } from "./types";

const initialState : IAccountState[] = [
  {
    _id : '3512asde2b12r1ieu2',
    createdAt : new Date(),
    following : [],
    followers : [],
    notifications : 0,
    personalInformation : {
      nickname : 'TheBilo16',
      username : 'TBilo16',
      profileImage : 'https://www.elcomercio.com/files/og_thumbnail/uploads/2020/07/27/5f1f38a4e0fab.gif',
      backgroundImage : '',
      description : 'I am Programmer and Gamer'
    },
  },
  {
    _id : '3512asde2123b12r1ieu2',
    createdAt : new Date(),
    following : [],
    followers : [],
    notifications : 5,
    personalInformation : {
      nickname : 'Billy Alexander Paredes Aycho',
      username : 'AychoBilly',
      profileImage : 'https://tvazteca.brightspotcdn.com/f2/f0/3a4f0d4c4ebe80ada7d68a8e1f64/bugs.JPG',
      backgroundImage : '',
      description : ''
    },
  }
]

export const accountsStore = createStore<IAccountState[]>(initialState);