import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { IAttack } from '../../types';

interface IProps {
  attack: IAttack;
}

const ViewAttack: React.FC<IProps> = ({ attack }) => {
  const imgSrc = require(`../../assets/randomAttacks/random-attack-${attack.id}.svg`).default;

  return (
    <div className="shadow rounded-lg bg-white w-full h-full flex flex-col">
      <img className="h-24 flex-grow my-12" src={imgSrc} alt={attack.title} />
      <div className="font-medium text-center py-6 self-center text-gray-900 text-4xl">{attack.title}</div>
    </div>
  )
}

export default ViewAttack;
