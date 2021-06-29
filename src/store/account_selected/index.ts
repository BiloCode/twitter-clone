import { createStore, createEvent } from 'effector';

export const AccountChange = createEvent<string>('account-change');

export const selectedAccountStore = createStore<string>('3512asde2b12r1ieu2');
