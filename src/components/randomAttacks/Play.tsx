import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import AppContext from '../../context/appContext';
import AttackSquare from './AttackSquare';
import ViewAttack from './ViewAttack';

const Play = () => {
  const history = useHistory();
  const { timeline, setTimeline, pointer, setPointer } = useContext(AppContext);
  const [historyVisible, setHistoryVisible] = useState<boolean>(false);

  const current = timeline.length > pointer ? timeline[pointer] : null;

  if (!current) return (
    <div className="p-3 flex flex-col w-full h-full space-y-3">
      <div className="bg-white rounded-lg shadow w-full p-3">
        <button
          className="py-2 px-6 text-white rounded-lg transition-colors duration-200 shadow font-medium bg-blue-500 hover:bg-blue-600"
          onClick={() => setPointer(pointer - 1)}
        >
          Previous
        </button>
      </div>

      <div className="bg-white rounded-lg shadow w-full p-3 text-center">
        <div className="font-medium text-2xl">End of Random Attacks</div>

        <button
          className="py-2 px-6 text-gray-900 rounded-lg font-medium transition-colors duration-200 hover:bg-gray-200 mt-5"
          onClick={() => history.push("/")}
        >
          Back to Start
        </button>
      </div>
    </div>
  );

  return (
    <div className="p-3 flex flex-col w-full h-full space-y-3">
      {historyVisible ? (
        <div className="flex space-x-3 w-full overflow-x-auto flex-shrink-0 p-1">
          {timeline.slice(0, pointer).map((item, i) => (
            <AttackSquare key={i} attack={item} />
          ))}
        </div>
      ) : null}

      <div className="bg-white rounded-lg shadow w-full p-3 space-x-3">
        {pointer > 0 ? <button
          className="py-2 px-6 text-white rounded-lg transition-colors duration-200 shadow font-medium bg-blue-500 hover:bg-blue-600"
          onClick={() => setPointer(pointer - 1)}
        >
          Previous
        </button> : null}
        <button
          className="py-2 px-6 text-white rounded-lg transition-colors duration-200 shadow font-medium bg-blue-500 hover:bg-blue-600"
          onClick={() => setPointer(pointer + 1)}
        >
          Next
        </button>
        <button
          className="py-2 px-6 text-white rounded-lg transition-colors duration-200 shadow font-medium bg-blue-500 hover:bg-blue-600"
          onClick={() => setHistoryVisible((prev: boolean) => !prev)}
        >
          History
        </button>
      </div>

      {current ? <ViewAttack attack={current} /> : null}
    </div>
  )
}

export default Play;
