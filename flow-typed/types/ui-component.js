
type PKUIComponent = {
  label: string,
  presets?: Array<string>,
  container: string,
  render: (options: { context?: any}) => any
  beforeComponent?: string,
  afterComponent?: string,
  replaceComponent?: string,
  context?: any
};
