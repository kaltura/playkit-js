// @flow

class FragmentData {
  url: string;
  duration: number;
  bwEstimation: number;
  requestType: RequestTypes;
  size: number;
  time: number;
}

export type RequestType = { [request: string]: string };

const RequestTypes: RequestType = {
  REQUEST: "request",
  RESPONSE: "response",
  ABORTED: "aborted"
};

export  {RequestTypes,FragmentData};
