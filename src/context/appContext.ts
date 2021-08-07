import { createContext } from "react";

export interface IAppContext {
  timeline: number[];
  setTimeline: Function;
  cookiesEnabled: boolean;
  setCookiesEnabled: Function;
}

export default createContext<IAppContext>({
  timeline: [],
  setTimeline: () => null,
  cookiesEnabled: false,
  setCookiesEnabled: () => null,
});