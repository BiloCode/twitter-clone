import { combine } from "effector";
import { accountsStore } from "..";
import { selectedAccountStore } from "../../account_selected";

export default combine(accountsStore,selectedAccountStore,(accounts, s_account) => {
  return accounts.find(v => v._id === s_account);
});