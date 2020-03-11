import { types } from './reducers';

export const applyMiddleware = dispatch => action => {
  dispatch(action);

  switch (action.type) {
    case types.FIRST:
      break;
    default:
      return;
  }
};
