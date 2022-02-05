import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';

import { makeDashboardPage } from './main/pages/dashboard';
import { store } from './presentation/redux/store';

ReactDOM.render(
  <ReduxProvider store={store}>{makeDashboardPage()}</ReduxProvider>,
  document.getElementById('root')
);
