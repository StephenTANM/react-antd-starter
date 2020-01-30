import {
  all,
  takeLatest
} from 'redux-saga/effects'
import LoginSaga from './login.saga'
import SignupSaga from './signup.saga'

//
//
//
// Root Saga
//
//
//
export default function* rootsaga() {
  yield all([takeLatest('LOGIN', LoginSaga), takeLatest('SIGNUP', SignupSaga)])
}