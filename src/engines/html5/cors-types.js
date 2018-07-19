// @flow
export type CorsTypes = {[stream: string]: string};

const CorsType: CorsTypes = {
  ANONYMOUS: 'anonymous',
  USE_CREDENTIALS: 'use-credentials'
};

export {CorsType};
