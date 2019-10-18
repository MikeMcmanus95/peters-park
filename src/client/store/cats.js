import Axios from 'axios';

// ACTION TYPES
// YOU MAKE THEM!!

const LOAD_CATS = 'LOAD_CATS';

// INITIAL STATE
// what would be a good initial state?
// :thinking:
const initialState = [];

// ACTION CREATORS
export const loadCats = data => ({
  // some stuff might go in here? hmmmmm.....
  type: LOAD_CATS,
  cats: data,
});

// THUNK CREATORS
export const fetchCats = () => async dispatch => {
  try {
    const { data } = await Axios.get('/api/cats/');
    dispatch(loadCats(data));
  } catch (err) {
    console.log(err);
  }
};

// REDUCER
// just modify inside the switch statement by adding cases.
// don't modify what the function takes
export default function(state = initialState, action) {
  switch (action.type) {
    case LOAD_CATS:
      return [...state, ...action.cats];
    default:
      return state;
  }
}
