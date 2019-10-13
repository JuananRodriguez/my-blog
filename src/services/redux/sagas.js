import {all} from 'redux-saga/effects';
import posts from './posts/saga'


export default function* rootSaga() {
    yield all([
        posts(),
    ])
}
