import { createContext } from "react";

export interface IAppContext {
  timeline: number[];
  setTimeline: Function;
}

export default createContext<IAppContext>({
  timeline: [],
  setTimeline: () => null,
});