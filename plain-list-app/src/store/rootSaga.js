import { all } from "redux-saga/effects";
import { plainListSaga } from "./plainList/saga";

export default function* rootSaga() {
    yield all([plainListSaga()]);
}