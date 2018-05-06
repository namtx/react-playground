import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

export default () => {
  let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
  return store;
}
