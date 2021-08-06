export interface IAttack {
  id: number;
  title: string;
}

export interface IGroup {
  title: string;
  baseColour: string;
  hoverColour: string;
  textColour: string;
  attacks: number[];
}