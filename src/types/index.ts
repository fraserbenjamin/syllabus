export interface IAttack {
  id: number;
  title: string;
}

export interface IGroup {
  title: string;
  baseColour: string;
  hoverColour: string;
  borderColour: string;
  textColour: string;
  attacks: number[];
}