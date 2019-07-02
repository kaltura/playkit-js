
type PresetComponent = {
  label: string,
  presets?: Array<string>,
  container: string,
  create: (options: {context?: any, parent: HTMLElement}) => void,
  onDestroy: (options: {context?: any, parent: HTMLElement}) => void,
  beforeComponent?: string,
  afterComponent?: string,
  replaceComponent?: string,
  context?: any
};
