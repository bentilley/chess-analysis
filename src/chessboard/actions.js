import { types } from './reducers';

export const useActions = (state, dispatch) => ({
  triggerAction: data => dispatch({ type: types.TRIGGER_ACTION, payload: data })
});
