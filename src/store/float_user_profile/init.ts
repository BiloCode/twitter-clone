import { floatUserProfileStore, SetActive, SetPosition, SetProfileData } from ".";

import { TCoords } from "./types";
import { TAccountState } from "@store/accounts/types";

floatUserProfileStore.on(SetActive, (state, isActive: boolean) => ({
  ...state,
  isActive,
}));

floatUserProfileStore.on(SetPosition, (state, coords: TCoords) => ({
  ...state,
  coords,
}));

floatUserProfileStore.on(SetProfileData, (state, profile: TAccountState) => ({
  ...state,
  profile,
}));
