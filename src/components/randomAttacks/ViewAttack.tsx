import React from 'react';
import { IAttack } from '../../types';
import details from "../../assets/randomAttacks/details.json";

interface IProps {
  attack: IAttack | number;
}

const ViewAttack: React.FC<IProps> = ({ attack }) => {
  if(typeof attack === "number") attack = details[attack];

  const imgSrc = require(`../../assets/randomAttacks/random-attack-${attack.id}.svg`).default;

  return (
    <div className="shadow rounded-lg bg-white w-full h-full flex flex-col flex-shrink-0 align-snap-center my-3">
      <img className="h-24 flex-grow my-12" src={imgSrc} alt={attack.title} />
      <div className="font-medium text-center py-6 self-center text-gray-900 text-4xl">{attack.title}</div>
    </div>
  )
}

export default ViewAttack;
