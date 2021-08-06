import React, { useCallback, useState } from 'react';

import AttackCard, { IAttack } from './components/randomAttacks/AttackCard';
import details from "./assets/randomAttacks/details.json";
import groups from "./assets/randomAttacks/groups.json";

export interface IGroup {
  title: string;
  baseColour: string;
  hoverColour: string;
  attacks: number[];
}

const App = () => {
  const [selected, setSelected] = useState<number[]>([]);

  const toggle = (id: number) => {
    setSelected((prev: number[]) => {
      if (prev.includes(id)) {
        return prev.filter((item: number) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  }

  const activeGroup = useCallback((): IGroup => {
    for (let i = 0; i < groups.length; i++) {
      if(numericArraysEqual(selected, groups[i].attacks)) {
        return groups[i];
      }
    }

    return {
      title: "None",
      baseColour: "blue-500",
      hoverColour: "blue-600",
      attacks: [],
    }
  }, [selected]);

  const numericArraysEqual = (array1: number[], array2: number[]) => {
    if (array1.length !== array2.length) return false;

    array1.sort();
    array2.sort();

    for (let i = 0; i < array1.length; i++) {
      if(array1[i] !== array2[i]) return false;
    }

    return true;
  }

  return (
    <div className="flex flex-col bg-gray-100 items-center">

      <div className="max-w-7xl w-full">
        <div className="flex p-3 space-x-3 overflow-x-auto">
          <button
            className="py-3 px-6 text-gray-800 rounded-lg bg-white hover:bg-gray-100 transition-colors duration-200 shadow font-medium flex-shrink-0"
            onClick={() => setSelected([])}
          >
            None
          </button>
          {groups.map((group: IGroup) => (
            <button
              key={group.title}
              className={`py-3 px-6 text-white rounded-lg transition-colors duration-200 shadow font-medium flex-shrink-0 bg-${group.baseColour} hover:bg-${group.hoverColour}`}
              onClick={() => setSelected(group.attacks)}
            >
              {group.title}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {details.map((item: IAttack) => <AttackCard key={item.id} attack={item} active={selected.includes(item.id)} setActive={() => toggle(item.id)} activeGroup={activeGroup()} />)}
        </div>
      </div>
    </div>
  )
}

export default App;
