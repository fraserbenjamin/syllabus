import React from 'react';
import { IAttack } from '../../types';
import details from "../../assets/randomAttacks/details.json";

interface IProps {
  attack: IAttack | number;
  index?: number;
  total?: number;
}

const ViewAttack: React.FC<IProps> = ({ attack, index, total }) => {
  if (typeof attack === "number") attack = details[attack];

  const imgSrc = require(`../../assets/randomAttacks/random-attack-${attack.id}.svg`).default;
  const display = (index && total) ? `${index} / ${total}` : null;

  return (
    <div className="px-3 pt-3 w-full h-full flex-shrink-0 align-snap-center">
      <div className="border border-gray-200 rounded-lg bg-white w-full h-full flex flex-col relative">
        {display ? (
            <div className="self-start mx-3 mt-3 mb-1 bg-gray-900 bg-opacity-80 rounded px-3 py-1 text-white">{display}</div>
        ) : null}
        <img className="h-24 flex-grow my-8 mx-2" src={imgSrc} alt={attack.title} />
        <div className="font-medium text-center py-4 self-center text-gray-900 text-4xl px-2">{attack.title}</div>
      </div>
    </div>
  )
}

export default ViewAttack;
