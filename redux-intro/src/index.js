import React from 'react';
import {render} from 'react-dom';
import Counter from './Counter';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers/index'

const store = createStore(rootReducer);

const App = () =>(
  <Provider store={store} >
    <Counter />
  </Provider>
);

render(<App />, document.getElementById('root'));
