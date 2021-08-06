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
  const [pointer, setPointer] = useState<number>(0);

  return (
    <Router>
      <AppContext.Provider
        value={{
          timeline,
          setTimeline,
          pointer,
          setPointer,
        }}
      >
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
