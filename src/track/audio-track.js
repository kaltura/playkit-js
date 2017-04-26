//@flow
import Track from './track'
import TrackTypes from './track-types'

export default class AudioTrack extends Track {
  _type: string = TrackTypes.AUDIO;
}
