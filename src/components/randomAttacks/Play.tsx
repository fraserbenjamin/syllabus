import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import details from "../../assets/randomAttacks/details.json";
import AppContext from '../../context/appContext';
import ViewAttack from './ViewAttack';

const Play = () => {
  const history = useHistory();
  const { timeline, setTimeline, pointer, setPointer } = useContext(AppContext);

  const current = timeline.length > pointer ? details[timeline[pointer]] : null;

  if(!current) history.push("/");

  return (
    <div className="p-3 flex flex-col w-full h-full space-y-3">
      <div className="bg-white rounded-lg shadow w-full p-3">
        <button
          className="py-2 px-6 text-white rounded-lg transition-colors duration-200 shadow font-medium bg-blue-500"
          onClick={() => setPointer(pointer + 1)}
        >
          Next
        </button>
      </div>

      {current ? <ViewAttack attack={current} /> : null}
    </div>
  )
}

export default Play;
