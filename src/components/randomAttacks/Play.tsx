import React, { useContext, useState, useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import AppContext from '../../context/appContext';
import ViewAttack from './ViewAttack';
import { groups } from "../../assets/randomAttacks/groups";
import { numericArraysEqual } from '../../common/util';
import { IGroup } from '../../types';
import { RiArrowGoBackLine } from "react-icons/ri";

const Play = () => {
  const history = useHistory();
  const { timeline } = useContext(AppContext);
  const [pointer, setPointer] = useState<number>(0);
  const [modal, setModal] = useState<boolean>(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  if (timeline.length === 0) history.push("/");

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
    <>
      {modal ? (
        <div className="bg-gray-900 bg-opacity-80 w-full h-full absolute top-0 left-0 z-20 flex justify-center">
          <div className="bg-white rounded self-center py-3 px-6">
            <div>Are you sure you want to exit?</div>
            <div className="mt-3 flex justify-end space-x-2">
              <button
                className="py-2 px-4 rounded-lg transition-colors duration-200 font-medium text-gray-700 hover:bg-gray-100"
                onClick={() => setModal(false)}
              >
                Cancel
              </button>
              <button
                className="py-2 px-4 rounded-lg transition-colors duration-200 font-medium text-white bg-red-500 hover:bg-red-600"
                onClick={() => history.push("/")}
              >
                Exit
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <div className="flex flex-col w-full h-full overflow-visible">
        <div ref={scrollRef} className="scroll-snap-y flex flex-col overflow-y-auto flex-grow hide-scrollbar">
          {filteredTimeline.map((item: number, i: number) => (
            <ViewAttack key={i} attack={item} index={i + 1} total={timeline.length} />
          ))}
        </div>

        <div className="flex w-full space-x-3 p-3">
          <button
            className="py-3 px-4 rounded-lg transition-colors duration-200 font-medium bg-gray-500 hover:bg-gray-600"
            onClick={() => setModal(true)}
          >
            <RiArrowGoBackLine color="white" size={24} />
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
    </>
  )
}

export default Play;
