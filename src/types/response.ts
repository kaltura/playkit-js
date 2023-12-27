export type PKResponseObject = {
  url: string,
  originalUrl: string,
  data: ArrayBuffer | ArrayBufferView;
  headers: {[header: string]: string}
};
