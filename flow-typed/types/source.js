//@flow
declare type Source = {
  mimetype: string,
  url: string,
  id: ?string,
  bandwidth: ?number,
  width: ?number,
  height: ?number,
  drmData: ?Array<Object>
};
