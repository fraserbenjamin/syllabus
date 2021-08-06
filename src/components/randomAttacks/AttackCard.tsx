import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { IGroup } from '../../App';

export interface IAttack {
  id: number;
  title: string;
}

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
      className={`shadow-xl rounded-lg m-3 flex flex-col justify-between bg-white hover:bg-gray-50 relative overflow-hidden cursor-pointer border-2 ${active ? "border-" + activeGroup.baseColour : "border-white hover:border-gray-50"}`}
      onClick={() => setActive(!active)}
    >

      {/* <div className="w-11 overflow-hidden inline-block">
        <div className=" h-16 bg-blue-500 -rotate-45 transform origin-top-left"></div>
      </div> */}

      {active ? (
        <>
          <div className="absolute z-10 top-2 right-2">
            <FaCheckCircle color="white" size={15} />
          </div>
          <div className={`absolute w-20 h-20 transform origin-center -right-10 -top-10 rotate-45 bg-${activeGroup.baseColour}`} />
        </>
      ) : null}

      <img className="h-48 my-5 self-center" src={imgSrc} alt={attack.title} />
      <div className="font-medium text-center p-3 self-center text-gray-900">{attack.title}</div>
    </button>
  )
}

export default AttackCard;
