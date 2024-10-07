# react-native-zaptric-ui

This is UI library for Zaptric

## Installation

```sh
npm install react-native-zaptric-ui
Add react-native-reanimated/plugin plugin to your babel.config.js.


```
```js
  module.exports = {
    presets: [
      ... // don't add it here :)
    ],
    plugins: [
      ...
      'react-native-reanimated/plugin',
    ],
  };
```

## Usage

```js
import { Button } from 'react-native-zaptric-ui';

// ...

 <Button
        title="Next"
        btnWidth={200}
        
        onPress={() => {
          console.log('Working');
        }}
      />
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
