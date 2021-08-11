import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { IGroup, IAttack } from '../../types';

interface IProps {
  attack: IAttack;
  active: boolean;
  setActive: Function;
  activeGroup: IGroup;
}

const AttackCard: React.FC<IProps> = ({ attack, active, setActive, activeGroup }) => {
  const imgSrc = require(`../../assets/randomAttacks/random-attack-${attack.id}.svg`).default;

  return (
    <button
      className={`rounded-lg m-3 flex flex-col justify-between bg-white hover:bg-gray-50 transition-colors duration-200 relative overflow-hidden cursor-pointer ${active ? `border-2 ${activeGroup.borderColour}` : "border border-gray-200"}`}
      onClick={() => setActive(!active)}
    >
      {active ? (
        <>
          <div className="absolute z-10 top-2 right-2">
            <FaCheckCircle color="white" size={15} />
          </div>
          <div className={`absolute w-20 h-20 transform origin-center -right-10 -top-10 rotate-45 ${activeGroup.baseColour}`} />
        </>
      ) : null}

      <img className="h-48 w-full my-5 self-center" src={imgSrc} alt={attack.title} />
      <div className="font-medium text-center p-3 self-center text-gray-900 flex-grow">{attack.id}. {attack.title}</div>
    </button>
  )
}

export default AttackCard;
