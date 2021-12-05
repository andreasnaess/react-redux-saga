import { all } from "@redux-saga/core/effects";
import usersSaga from "./usersSaga";

export default function* rootSaga() {
    yield all([usersSaga()])
}