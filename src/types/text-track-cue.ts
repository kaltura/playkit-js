export interface PKTextTrackCue extends VTTCue {
  value: { key: string, data: string | any };
  type?: string;
}
