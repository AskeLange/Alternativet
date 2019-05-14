

// Cursor state
export const 
  INITIAL = 0,
  HOVER = 1;

// Set state
export const SET_STATE = 'SET_STATE';
export let set_state = (( state=INITIAL ) => {
  return ({ type: SET_STATE, payload: { state } });
});