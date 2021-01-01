import { combine } from "effector";
import { accountsStore } from "../accountsStore";
import { selectedAccountStore } from "../selectedAccountStore";

export default combine(
  accountsStore,
  selectedAccountStore,
  (accounts, s_account) => {
    return accounts.find(v => v._id === s_account);
  }
);