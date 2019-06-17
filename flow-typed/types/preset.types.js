
type PresetComponent = {
  presets?: Array<string>,
  container: string,
  componentName?: string,
  component: (props: any) => any,
  position?: string,
  context?: any
};
