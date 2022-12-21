import { createFeatureSelector, createSelector } from "@ngrx/store";


export const loginState = createFeatureSelector<boolean>((state) => state.isLoggedIn );