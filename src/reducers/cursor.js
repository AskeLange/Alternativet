

// Imports
import {
  INITIAL,
  SET_STATE
} from '../actions/cursor';

// Initial state
const init_state = {
  state: INITIAL
};

// Cursor reducer
export default (( state=init_state, action ) => {
  switch (action.type) {

    // Set state
    case SET_STATE: {
      return Object.assign ({}, state, {
        state: action.payload.state,
      });
    }

    // Default case
    default: return state;

  }
});