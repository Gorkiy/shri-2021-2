import React, { useState } from 'react';
import '../../sass/style.scss';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import { InitedContext } from '../../features/context/context';
// Pages
import { Start } from '../../pages/page_start/page_start';
import { Settings } from '../../pages/page_settings/page_settings';
import { History } from '../../pages/page_history/page_history';

const history = createBrowserHistory();

const App = () => {
  const [isSettignsInited, initSettings] = useState(false);

  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact render={(props) => (
          isSettignsInited
            ? <History /> : <Start />
        )} />
        <Route path="/settings" exact>
          <InitedContext.Provider value={isSettignsInited}>
            <Settings onChange={initSettings} />
          </InitedContext.Provider>
        </Route>
        <Route path="/history" exact render={(props) => (
          isSettignsInited ? <History /> : <Start />
        )} />
      </Switch>
    </Router>
  );
}

export default App;