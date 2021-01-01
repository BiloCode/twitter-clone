import { createApi, createStore } from "effector";
import { IAccountState } from "store/account/types";
import { ICoords, IUserProfileFloat } from "./types";

export const userProfileFloatStore = createStore<IUserProfileFloat>({
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

export const { SetPosition , SetActive } = createApi(
  userProfileFloatStore,
  {
    SetActive : (state, isActive : boolean) => ({
      ...state,
      isActive
    }),
    SetProfileData : (state, profile : IAccountState) => ({
      ...state,
      profile
    }),
    SetPosition : (state, coords : ICoords) => ({
      ...state,
      coords
    })
  }
);