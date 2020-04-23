import { takeLatest, put, all, call } from "redux-saga/effects";

import UserActionTypes from "../user/user.types";

import { clearCart } from "./cart.action";

export function* clearCartOnSignOut() {
  try {
    yield put(clearCart());
  } catch (error) {
    console.log(error);
  }
}

export function* onSignOutSucess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSucess)]);
}
