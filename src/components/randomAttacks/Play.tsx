import React, { useContext, useState, useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import AppContext from '../../context/appContext';
import ViewAttack from './ViewAttack';
import { groups } from "../../assets/randomAttacks/groups";
import { numericArraysEqual } from '../../common/util';
import { IGroup } from '../../types';
import { FaHome } from "react-icons/fa";

const Play = () => {
  const history = useHistory();
  const { timeline } = useContext(AppContext);
  const [pointer, setPointer] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  if(timeline.length === 0) history.push("/");

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
      if (scrollRef?.current) {
        scrollRef.current.scrollTo({
          top: scrollRef.current.scrollHeight,
          behavior: "smooth",
        });
      }
    }, 50)
  }

  return (
    <div className="flex flex-col w-full h-full overflow-visible">
      <div ref={scrollRef} className="scroll-snap-y flex flex-col overflow-y-auto flex-grow hide-scrollbar">
        {filteredTimeline.map((item: number, i: number) => (
          <ViewAttack key={i} attack={item} index={i + 1} total={timeline.length} />
        ))}
      </div>

      <div className="flex w-full space-x-3 p-3">
        <button
          className="py-3 px-4 rounded-lg transition-colors duration-200 font-medium bg-gray-500 hover:bg-gray-600"
          onClick={() => history.push("/")}
        >
          <FaHome color="white" size={24}/>
        </button>
        <button
          disabled={pointer + 1 >= timeline.length}
          className={`py-3 px-6 text-white rounded-lg transition-colors duration-200 font-medium ${activeGroup().baseColour} hover:${activeGroup().hoverColour} flex-grow disabled:bg-gray-200 disabled:text-gray-700 disabled:cursor-default`}
          onClick={nextItem}
        >
          New Attack
        </button>
      </div>
    </div>
  )
}

export default Play;
