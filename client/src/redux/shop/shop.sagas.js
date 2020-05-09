import { takeLatest, call, put } from "redux-saga/effects";

import {
  fetchCollectionsSucess,
  fetchCollectionsFailure,
} from "./shop.actions";

import { firestore } from "../../utils/firebase/firebase.utils";
import { convertCollectionsSnapshotToMap } from "../../utils/firebase/firestore.utils";
import ShopActionTypes from "./shop.types";

export function* fetchColectionAsync() {
  const collectionRef = firestore.collection("collection");

  try {
    const snapshot = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionsSucess(collectionMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }

  // collectionRef
  //   .get()
  //   .then((snapshot) => {
  //     const collectionMap = convertCollectionsSnapshotToMap(snapshot);
  //     console.log(collectionMap);

  //     dispatch(fetchCollectionsSucess(collectionMap));
  //   })
  //   .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchColectionAsync
  );
}
