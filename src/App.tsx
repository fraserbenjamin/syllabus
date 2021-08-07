import React, { useState, lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import AppContext from './context/appContext';

const SelectAttacks = lazy(() => import('./components/randomAttacks/SelectAttacks'));
const Play = lazy(() => import('./components/randomAttacks/Play'));

const renderLoader = () => null;

const App = () => {
  const [timeline, setTimeline] = useState<number[]>([]);

  return (
    <Router>
      <AppContext.Provider
        value={{
          timeline,
          setTimeline,
        }}
      >
        <div className="flex flex-col bg-gray-100 items-center w-full h-full fixed overflow-y-auto">
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
