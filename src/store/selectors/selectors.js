import {
    createSelector
} from 'reselect'


export const isLoggedInSelector = createSelector(
    [state => state.User.authToken],
    (token) => {
        return (token.length > 0)
    }
)
export const tokenSelector = createSelector(
    [state => state.User.authToken],
    (token) => {
        return token
    }
)
