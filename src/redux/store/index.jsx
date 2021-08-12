import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import formReducer from '../reducers/formReducer'

const store = createStore(formReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;