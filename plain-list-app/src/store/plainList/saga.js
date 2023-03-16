import { put, takeEvery } from 'redux-saga/effects'
import { GET_PLAIN_LIST, GET_PLAIN_LIST_FAILED, GET_PLAIN_LIST_SUCCESS } from './actions';
import * as plainListApi from '../../services/functional/plainListApi';


function* getPlainList(action) {
    try {
        console.log('GetPlainList saga called');
        const response = yield plainListApi.getPlainList();
        yield put({ type: GET_PLAIN_LIST_SUCCESS, data: response?.data?.data ?? {} });
    } catch (e) {
        yield put({ type: GET_PLAIN_LIST_FAILED, message: e.message });
    }
}


export function* plainListSaga() {
    yield takeEvery(GET_PLAIN_LIST, getPlainList);
}

