import { createSelector } from '@ngrx/store';
import { LoginState } from './login.reducer';

export const selectFeature = (state: LoginState) => state.isLoggedIn;

export const CurrentLoginState = createSelector(
 (state: LoginState) => state.isLoggedIn,
 (state: Boolean) => state
);