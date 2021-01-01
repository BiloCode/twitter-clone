import { IAccountState } from "store/account/types";

export interface ICoords {
  x : number;
  y : number;
}

export interface IUserProfileFloat {
  isActive : boolean;
  profile : IAccountState;
  coords : ICoords;
}