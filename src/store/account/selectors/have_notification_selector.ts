import { combine } from "effector";
import { accounts_store } from "../accounts_store";
import { selected_account_store } from "../selected_account_store";

export default combine(
  accounts_store,
  selected_account_store, 
  (accounts, s_account) => {
    for(let v of accounts) {
      if(v.notifications > 0 && v._id !== s_account){
        return true;
      }
    }

    return false;
  }
);