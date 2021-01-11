import { createEvent, createStore } from "effector";
import { TAccountState } from "store/accounts/types";
import { TCoords, TUserProfileFloat } from "./types";

export const SetActive = createEvent<boolean>('set-active');
export const SetProfileData = createEvent<TAccountState>('set-profile-data');
export const SetPosition = createEvent<TCoords>('set-position');

export const floatUserProfileStore = createStore<TUserProfileFloat>({
  isActive : false,
  profile : {
    _id : '',
    createdAt : new Date(),
    followers : [],
    following : [],
    notifications : 0,
    personalInformation : {
      nickname : '',
      backgroundImage : '',
      description : '',
      username : '',
      profileImage : ''
    }
  },
  coords : {
    x : 0,
    y : 0
  }
});