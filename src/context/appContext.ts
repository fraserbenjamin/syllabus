import { createContext } from "react";

export interface IAppContext {
  timeline: number[];
  setTimeline: Function;
  pointer: number;
  setPointer: Function;
}

export default createContext<IAppContext>({
  timeline: [],
  setTimeline: () => null,
  pointer: 0,
  setPointer: () => null,
});