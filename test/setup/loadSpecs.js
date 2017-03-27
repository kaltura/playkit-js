export function loadSpecs() {
  const context = require.context('../src/', true, /\.spec\.js$/);
  console.log(context);
  for (const key of context.keys()) {
    describe(key, () => {
      context(key)
    });
  }
}

export default loadSpecs;
