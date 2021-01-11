import { selectedAccountStore , AccountChange } from ".";

selectedAccountStore.on(AccountChange, (account_id : string) => account_id);