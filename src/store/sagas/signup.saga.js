import {
    call,
    put
} from 'redux-saga/effects'
import axios from 'axios'
import {
    headers
} from '../../data/misc.data'
import {
    SIGNUP_SUCCESS,
    SIGNUP_FAIL
} from '../actions/signup.actions'
import {
    message,
} from 'antd'


const SignupAPI = async (data) => {
    const result = await axios.post('https://exampleapi.com/api/v1/signup', data, {
        headers
    })
    return result.data
}

function* SignupSaga(action) {
    message.loading('Signing in...')
    try {
        const data = yield call(SignupAPI, action.payload)
        message.destroy()
        yield put(SIGNUP_SUCCESS(data))
    } catch (error) {
        message.destroy()
        yield put(SIGNUP_FAIL(error.data))
        message.error(error.data)
    }

}
export default SignupSaga