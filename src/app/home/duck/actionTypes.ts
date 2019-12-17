import { action } from "typesafe-actions";

export const CHANGE_GREETING = "CHANGE_GREETING";

interface ChangeGreeting {
  type: typeof CHANGE_GREETING;
  payload: string;
}

export type HomeActionTypes = ChangeGreeting;
