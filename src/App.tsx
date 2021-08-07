import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import SelectAttacks from './components/randomAttacks/SelectAttacks';
import Play from './components/randomAttacks/Play';
import AppContext from './context/appContext';

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
        <div className="bg-purple-600 hover:bg-purple-700 hidden"></div>
        <div className="bg-green-600 hover:bg-green-700 hidden"></div>
        <div className="bg-gray-800 hover:bg-gray-900 hidden"></div>
        <div className="flex flex-col bg-gray-100 items-center w-full h-full fixed overflow-y-auto">
          <Switch>
            <Route exact path="/">
              <SelectAttacks />
            </Route>
            <Route path="/play">
              <Play />
            </Route>
          </Switch>
        </div>
      </AppContext.Provider>
    </Router>
  )
}

export default App;
