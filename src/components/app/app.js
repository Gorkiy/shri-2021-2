import React, { useState, useEffect } from 'react';
import '../../sass/style.scss';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history'
// Pages
import { Start } from '../../pages/page_start/page_start';
import { Settings } from '../../pages/page_settings/page_settings';
import { History } from '../../pages/page_history/page_history';

const history = createBrowserHistory();

const App = () => {
  const [isAppInited, initApp] = useState(false);

  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact render={(props) => (
          isAppInited ? <History /> : <Start />
        )} />
        <Route path="/settings" exact component={Settings} />
        <Route path="/history" exact render={(props) => (
          isAppInited ? <History /> : <Start />
        )} />
      </Switch>
    </Router>
  );
}

export default App;