import { createReducer, on } from "@ngrx/store";
import { loginAction, logoutAction } from "./login.actions";

export interface LoginState {
    isLoggedIn : boolean
}

let initialState: LoginState = { isLoggedIn: false };

export const loginReducer = createReducer(
    initialState,
    on(loginAction, (state) => ( {...state, isLoggedIn: true}) ),
    on(logoutAction, (state) => ({...state, isLoggedIn: false}) ));