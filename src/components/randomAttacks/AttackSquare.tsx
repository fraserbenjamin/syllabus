import React from 'react';
import { IAttack } from '../../types';
import details from "../../assets/randomAttacks/details.json";

interface IProps {
  attack: IAttack | number;
}

const AttackSquare: React.FC<IProps> = ({ attack }) => {
  if(typeof attack === "number") attack = details[attack];

  const imgSrc = require(`../../assets/randomAttacks/random-attack-${attack.id}.svg`).default;

  return (
    <div className="shadow rounded-lg bg-white w-64 h-64 flex flex-col flex-shrink-0">
      <img className="h-12 flex-grow mt-8" src={imgSrc} alt={attack.title} />
      <div className="font-medium text-center py-6 self-center text-gray-900 text-sm m-3">{attack.title}</div>
    </div>
  )
}

export default AttackSquare;
