import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TodoContainer from './components/TodoContainer/TodoContainer';

import muiTheme from './theme';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import 'materialize-css/dist/js/materialize.js';

import 'materialize-css/dist/css/materialize.css';
import './index.css';

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <TodoContainer />
  </MuiThemeProvider>,
  document.getElementById('root')
);
