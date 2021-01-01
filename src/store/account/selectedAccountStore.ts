import { createApi, createStore } from "effector";

export const selectedAccountStore = createStore<string>("3512asde2b12r1ieu2");

export const { AccountChange } = createApi(
  selectedAccountStore, 
  {
    AccountChange : (_,new_id : string) => new_id
  }
);