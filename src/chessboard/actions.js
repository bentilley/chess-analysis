import { types } from './reducers';

export const useActions = (state, dispatch) => ({
  movePiece: (from, to) => {
    dispatch({ type: types.MOVE_PIECE, payload: { from, to } });
  },
});
