type CategoryType = {[category: string]: number};

const Category: CategoryType = {
  /** Errors from the network stack. */
  NETWORK: 1,

  /** Errors parsing text streams. */
  TEXT: 2,

  /** Errors parsing or processing audio or video streams. */
  MEDIA: 3,

  /** Errors parsing the Manifest. */
  MANIFEST: 4,

  /** Errors related to streaming. */
  STREAMING: 5,

  /** Errors related to DRM. */
  DRM: 6,

  /** Miscellaneous errors from the player. */
  PLAYER: 7,

  /** Errors related to ads. */
  ADS: 8,

  /** Errors in the database storage (offline). */
  STORAGE: 9,

  /** Errors related to cast. */
  CAST: 10,

  /** Errors from VR plugin. */
  VR: 11,

  /** Media is not ready error. */
  MEDIA_NOT_READY: 12,

  /** Geolocation restriction error. */
  GEO_LOCATION: 13,

  /** Media is unavailable error. */
  MEDIA_UNAVAILABLE: 14,

  /** IP restriction error. */
  IP_RESTRICTED: 15,

  /** Scheduled restriction error. */
  SITE_RESTRICTED: 16,

  /** Scheduled restriction error. */
  SCHEDULED_RESTRICTED: 17,

  /** Access Control error */
  ACCESS_CONTROL_BLOCKED: 18,

  /** Deleted entry error */
  DELETED_ENTRY: 19,
};

export {Category};
export type {CategoryType};
