import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from 'components/App';
import app from 'reducers';

const store = createStore(app);

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('app'));

const ipcRenderer = require('electron').ipcRenderer;

ipcRenderer.on('asynchronous-reply', function(event, arg) {
  console.log('reply', arg);
});

ipcRenderer.send('createFeedStream', {
  limit: 10,
});
