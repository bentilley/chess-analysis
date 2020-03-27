import React, { createContext, useReducer } from 'react';
import { reducer, initialState } from './reducers';
import { useActions } from './actions';
import { applyMiddleware } from './middleware';
import Chessboard from './board';

const ChessboardContext = createContext(initialState);

const ChessboardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const board = new Chessboard(state);
  // Attach middleware to capture every dispatch
  // const enhancedDispatch = applyMiddleware(dispatch);

  // const actions = useActions(state, enhancedDispatch);
  const actions = useActions(state, dispatch);

  return (
    <ChessboardContext.Provider value={{ state, board, dispatch, actions }}>
      {children}
    </ChessboardContext.Provider>
  );
};

export { ChessboardContext, ChessboardProvider };
