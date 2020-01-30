import {
    call,
    put
} from 'redux-saga/effects'
import axios from 'axios'
import {
    headers
} from '../../data/misc.data'
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from '../actions/login.actions'
import {
    message,
} from 'antd'

const LoginAPI = async (data) => {
    const result = await axios.post('https://exampleapi.com/api/v1/login', data, {
        headers
    })
    return result.data
}

function* LoginSaga(action) {
    message.loading('Signing in...')
    try {
        const data = yield call(LoginAPI, action.payload)
        yield put(LOGIN_SUCCESS(data))
        message.destroy()
    } catch (e) {
        message.destroy()
        yield put(LOGIN_FAIL(e.data))
        message.error(e.data)
    }
}
export default LoginSaga