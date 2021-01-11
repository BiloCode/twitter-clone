import { combine } from "effector";
import { accountsStore } from "..";
import { selectedAccountStore } from "../../account_selected";

export default combine(accountsStore,selectedAccountStore, (accounts, s_account) => {
  for(let v of accounts) {
    if(v.notifications > 0 && v._id !== s_account){
      return true;
    }
  }

  return false;
});