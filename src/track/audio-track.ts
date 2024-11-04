import Track from './track';

/**
 * Audio track representation of the player.
 * @classdesc
 */
class AudioTrack extends Track {
    /**
     * @member - is audio asset has audio description tag
     * @type {boolean|undefined}
     */
    public isAudioDescription?: boolean;
}

export default AudioTrack;
