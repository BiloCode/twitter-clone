import { TAccountState } from "store/accounts/types";

export type TCoords = {
  x : number;
  y : number;
}

export type TUserProfileFloat = {
  isActive : boolean;
  profile : TAccountState;
  coords : TCoords;
}