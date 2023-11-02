export interface PKTextTrackCue extends TextTrackCue {
  value: { key: string, data: string | any };
  type?: string;
}
