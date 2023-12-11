export type PKRequestObject = {
  url: string,
  body: ArrayBuffer | ArrayBufferView | string | null;
  headers: {[header: string]: string}
};
