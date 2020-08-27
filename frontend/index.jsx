import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  let root = document.getElementById('root');
  let store;
  
  if (window.currentUser) {

    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
      },
      session: { id: window.currentUser.id }
    };
    
    store = configureStore(preloadedState);

    delete window.currentUser;

  } else {

    store = configureStore();

  }

  ///testing
    window.store = store;
  ///testing

  ReactDOM.render(<Root store={store}/>, root);
})