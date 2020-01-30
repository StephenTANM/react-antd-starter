const initialState = {
    loading: {
        global: false,
    }
}

export default (state = initialState, {
    type,
    payload
}) => {
    switch (type) {
        case 'TOGGLE_LOADING':
            return {
                ...state,
                loading: {
                    ...state.loading,
                    global: !state.global
                }
            }
        default:
            return state
    }
}