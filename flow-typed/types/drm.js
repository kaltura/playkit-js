// @flow
declare type DrmData = {
  licenseUrl: string,
  scheme: string,
  certificate: ?string
};

declare type BrowserHandlers = {
  Safari: Function,
  Chrome: Function,
  Edge: Function,
  IE: Function
};
