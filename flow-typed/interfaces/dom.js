declare interface HTMLVideoElement extends HTMLVideoElement {
  webkitSetPresentationMode: Function;
  requestPictureInPicture: Function;
}

declare interface HTMLElement extends HTMLElement {
  mozRequestFullScreen: Function;
  webkitRequestFullScreen: Function;
  msRequestFullScreen: Function;
}

declare interface Document extends Document {
  pictureInPictureEnabled: boolean;
  exitPictureInPicture: Function;
}

declare interface Navigator extends Navigator {
  userLanguage: string;
}
