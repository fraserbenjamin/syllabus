import React, { useContext, useState, useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import AppContext from '../../context/appContext';
import ViewAttack from './ViewAttack';
import groups from "../../assets/randomAttacks/groups.json";
import { numericArraysEqual } from '../../common/util';
import { IGroup } from '../../types';

const Play = () => {
  const history = useHistory();
  const { timeline } = useContext(AppContext);
  const [pointer, setPointer] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredTimeline = timeline.slice(0, pointer + 1);

  const activeGroup = useCallback((): IGroup => {
    for (let i = 0; i < groups.length; i++) {
      if (numericArraysEqual(timeline, groups[i].attacks)) {
        return groups[i];
      }
    }

    return {
      title: "Clear",
      baseColour: "bg-blue-500",
      hoverColour: "bg-blue-600",
      textColour: "text-white",
      borderColour: "border-blue-500",
      attacks: [],
    }
  }, [timeline]);

  const nextItem = () => {
    setPointer((prev: number) => prev + 1);

    setTimeout(() => {
      if(scrollRef?.current){
        scrollRef.current.scrollTo({
          top: scrollRef.current.scrollHeight,
          behavior: "smooth",
        });
      }
    }, 50)
  }

  return (
    <div className="p-3 flex flex-col w-full h-full space-y-3">
      <div ref={scrollRef} className="scroll-snap-y flex flex-col overflow-y-auto flex-grow">
        {filteredTimeline.map((item: number, i: number) => (
          <ViewAttack key={i} attack={item} />
        ))}
      </div>

      <div className="flex w-full space-x-3">
        <button
          className="py-3 px-6 text-white rounded-lg transition-colors duration-200 shadow font-medium bg-gray-500 hover:bg-gray-600"
          onClick={() => history.push("/")}
        >
          Home
        </button>
        <button
          className={`py-3 px-6 text-white rounded-lg transition-colors duration-200 shadow font-medium ${activeGroup().baseColour} hover:${activeGroup().hoverColour} flex-grow`}
          onClick={nextItem}
        >
          New Attack
        </button>
      </div>
    </div>
  )
}

export default Play;
