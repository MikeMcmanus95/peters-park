import axios from 'axios';
import Axios from 'axios';

// ACTION TYPES
// YOU MAKE THEM!!
const LOAD_CAT = 'LOAD_CAT';

// INITIAL STATE
const initialState = {};

// ACTION CREATORS
export const loadCat = data => ({
  // what kinda stuff goes in here?
  type: LOAD_CAT,
  cat: data,
});

// THUNK CREATORS
export const fetchCat = id => {
  return async dispatch => {
    try {
      const { data } = await Axios.get('/api/cats/1/');
      dispatch(loadCat(data));
    } catch (err) {
      console.error(err.stack);
    }
  };
};

// REDUCER
// just modify inside the switch statement by adding cases.
// don't modify what the function takes
export default function(state = initialState, action) {
  switch (action.type) {
    case LOAD_CAT:
      console.log(action.cat);
      return action.cat;
    default:
      return state;
  }
}
