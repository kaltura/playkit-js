
type PresetComponent = {
  presets?: Array<string>,
  container: string,
  render: (props: any) => any,
  beforeComponent?: string,
  afterComponent?: string,
  replaceComponent?: string,
  context?: any
};
