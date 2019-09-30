import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer.js';
import { applyMiddleware } from 'redux';
import thunk from '../middleware/thunk.js';
const preloadedState = {};

const configureStore = createStore(rootReducer, preloadedState, applyMiddleware(thunk));

export default configureStore;


// export const fetchContacts = () => dispatch => (
//   ContactAPIUtil.fetchContacts().then(contacts => dispatch(receiveContacts(contacts)));
// );


// const thunk = ({ dispatch, getState }) => next => action => {
//   if (typeof action === 'function') {
//     return action(dispatch, getState);
//   }
//   return next(action);
// };

// export default thunk;