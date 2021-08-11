import React, { useState, lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useLocalStorage } from "react-use";
import Firebase from './components/Firebase';

import AppContext from './context/appContext';

const SelectAttacks = lazy(() => import('./components/randomAttacks/SelectAttacks'));
const Play = lazy(() => import('./components/randomAttacks/Play'));

const renderLoader = () => null;

const App = () => {
  const [timeline, setTimeline] = useState<number[]>([]);
  const [cookiesEnabled, setCookiesEnabled] = useLocalStorage<boolean>("cookiesEnabled", false);

  return (
    <Router>
      <AppContext.Provider
        value={{
          timeline,
          setTimeline,
          cookiesEnabled : cookiesEnabled ? cookiesEnabled : false,
          setCookiesEnabled,
        }}
      >
        <Firebase />
        <div className="flex flex-col items-center w-full h-full fixed overflow-y-auto">
          <Suspense fallback={renderLoader()}>
            <Switch>
              <Route exact path="/">
                <SelectAttacks />
              </Route>
              <Route path="/play">
                <Play />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </AppContext.Provider>
    </Router>
  )
}

export default App;
