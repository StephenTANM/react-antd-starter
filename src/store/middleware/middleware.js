const middleware = store => next => action => {

  action.token = store.getState().User.authToken // ADDS AUTH TOKEN SO WHEN CALLING A SAGA THERES NO NEED TO SELECT IT AFTER THE FACT

  return next(action)
}

export default middleware