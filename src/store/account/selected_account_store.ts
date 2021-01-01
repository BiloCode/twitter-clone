import { createApi, createStore } from "effector";

export const selected_account_store = createStore<string>("3512asde2b12r1ieu2");

export const { AccountChange } = createApi(selected_account_store, {
  AccountChange : (_, new_id : string) => new_id
});