

// Import
import { 
  APPEND_VIEW,
  SWITCH_VIEW,
} from '../actions/navigation'

// Initial state
const init_state = {
  current_view: { label: 'primary', index: 0 },
  views: [ ]
};

// Navigation reducer
export default (( state=init_state, action ) => {
  switch (action.type) {

    // Append view
    case APPEND_VIEW: {
      let v = state.views;
      return Object.assign ({}, state, {
        views: (v.push ({
          label: action.payload.label,
          index: action.payload.index,
        }), v)
      })
    }

    // Switch view
    case SWITCH_VIEW: {
      let identifier = action.payload.identifier;
      let type = action.payload.type;
      return Object.assign ({}, state, {
        current_view: state.views.find (e => {
          if (e[type]==identifier) return e;
        })
      });
    }

    // Default case
    default: 
      return state;

  }
});