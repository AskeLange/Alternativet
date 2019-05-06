

// Append view
export const APPEND_VIEW = 'APPEND_VIEW';
export let append_view = (( label, index ) => {
  return { type: APPEND_VIEW, payload: {
    label, index
  }};
});

// Switch view
export const SWITCH_VIEW = 'SWITCH_VIEW';
export let switch_view = (( identifier ) => {
  return { type: SWITCH_VIEW, payload: {
    identifier, type: ((typeof(identifier)=='string')?'label':'index')
  }};
});