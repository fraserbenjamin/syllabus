import React, { useCallback, useContext } from 'react';

import { numericArraysEqual, shuffleArray } from "../../common/util";
import AttackCard from './AttackCard';
import details from "../../assets/randomAttacks/details.json";
import { groups } from "../../assets/randomAttacks/groups";
import AppContext from '../../context/appContext';
import { useHistory } from 'react-router-dom';
import { IAttack, IGroup } from '../../types';

const SelectAttacks = () => {
  const { timeline, setTimeline } = useContext(AppContext);
  const history = useHistory();

  const toggle = (id: number) => {
    setTimeline((prev: number[]) => {
      if (prev.includes(id)) {
        return prev.filter((item: number) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  }

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

  return (
    <div className="max-w-7xl w-full">
      <div className="flex p-3 flex-wrap">
        {groups.map((group: IGroup) => (
          <button
            key={group.title}
            className={`py-3 px-6 ${group.textColour} rounded-lg transition-colors duration-200 shadow font-medium flex-shrink-0 ${group.baseColour} hover:${group.hoverColour} mr-2 mb-2 flex-grow`}
            onClick={() => setTimeline(group.attacks)}
          >
            {group.title}
          </button>
        ))}
      </div>

      <div className="flex flex-col py-3 bg-white rounded-lg mx-3 shadow px-3 font-medium text-lg items-center justify-between">
        <div>
          {timeline.length} out of {details.length} selected {timeline.length > 0 && activeGroup().title !== "Clear" ? `(${activeGroup().title})` : null}
        </div>

        {timeline.length > 0 ? <button
          className={`py-2 px-6 text-white rounded-lg transition-colors duration-200 shadow font-medium w-full mt-3 ${activeGroup().baseColour}`}
          onClick={() => {
            setTimeline(shuffleArray(timeline));
            history.push("/play")
          }}
        >
          Start
        </button> : null}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {details.map((item: IAttack) => <AttackCard key={item.id} attack={item} active={timeline.includes(item.id)} setActive={() => toggle(item.id)} activeGroup={activeGroup()} />)}
      </div>
    </div>
  )
}

export default SelectAttacks;
