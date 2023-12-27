import { AdEventType, CustomEventType, Html5EventType } from "../playkit";

export type PKEventTypes = typeof Html5EventType & typeof CustomEventType & typeof AdEventType;
