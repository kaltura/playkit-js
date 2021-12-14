declare type TextTrackCue = window.TextTrackCue & {
  value: {
    key: string,
    data: string | Object
  }
};
