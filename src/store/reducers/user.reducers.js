const initialState = {
    authToken: "",
    cred: {}
}

export default (state = initialState, {
    type,
    payload
}) => {
    switch (type) {
        case 'SIGNUP_SUCCESS':
        case "LOGIN_SUCCESS":
            return payload
        case 'LOGOUT':
            return {
                ...initialState
            }
        default:
            return state
    }
}