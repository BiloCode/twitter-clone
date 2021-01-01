import { combine } from "effector";
import { accounts_store } from "../accounts_store";
import { selected_account_store } from "../selected_account_store";

export default combine(
  accounts_store,
  selected_account_store,
  (accounts, s_account) => {
    return accounts.find(v => v._id === s_account);
  }
);