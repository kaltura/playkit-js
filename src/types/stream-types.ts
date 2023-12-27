export type PlayerStreamTypes = 'dash' | 'hls' | 'progressive' | 'image';
export type PKStreamTypes = Record<'DASH' | 'HLS' | 'PROGRESSIVE' | 'IMAGE', PlayerStreamTypes>;
