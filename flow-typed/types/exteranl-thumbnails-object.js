// @flow
declare type PKExternalThumbnailsConfig = {
  imgBaseUrl?: string,
  vttUrl: string
};

// 1 the vtt file should contains th url to the img itself, if so, the imgUrl field is redundant here
// 2 the config.sources.thumbnails should be an array like caption ?
// 3 should be the same VTTCue as textTrack (with style) or different
