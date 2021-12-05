import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects'

export type User = {
    name: string;
    username: string;
    email: string;
}

function* getUsers() {
    try {
        const users: { data: User[] } = yield call(() => axios.get("https://jsonplaceholder.typicode.com/users"));
        yield put({type: "GET_USERS_SUCCESS", users: users.data})
    } catch (e: any) {
        yield put({type: "GET_USERS_FAILED", error: e.message})
    }
}

function* usersSaga() {
    yield takeEvery("GET_USERS_REQUESTED", getUsers);
}

export default usersSaga;