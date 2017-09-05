import React from 'react';
import { connect } from 'react-redux';

import css from './style.css';

const App = (props) => (
  <div className={css.App}>
    {JSON.stringify(props)}
  </div>
);

export default connect(
  (store) => store,
)(App);
