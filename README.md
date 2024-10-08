# react-native-zaptric-ui

This is UI library for Zaptric

## Features

- **Switch**: A customizable switch component with gesture-based interactions.
- **Slider**: A draggable slider with smooth animations and color interpolation.
- **Button**: A customizable button with animated feedback.
- Built with `react-native-reanimated` for fluid animations.
- Utilizes `react-native-gesture-handler` for gesture-based interactions.

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
```js
import { Switch } from 'react-native-zaptric-ui';

const App = () => {
  return (
    <Switch
      status={true}
      title="Toggle Switch"
      btnWidth={300}
    />
  );
};

```

```js
import { Slider } from 'react-native-zaptric-ui';

const App = () => {
  return (
    <Slider
      status={false}
      title="Drag Slider"
      btnWidth={300}
    />
  );
};

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## Documentation

Each component is highly customizable. Below are some common props for each component:

### Switch

| Prop       | Type     | Default  | Description                           |
|------------|----------|----------|---------------------------------------|
| `status`   | boolean  | `false`  | The initial status of the switch.     |
| `title`    | string   | `""`     | The title to display below the switch.|
| `btnWidth` | number   | `300`    | The width of the switch track.        |

### Slider

| Prop       | Type     | Default  | Description                           |
|------------|----------|----------|---------------------------------------|
| `status`   | boolean  | `false`  | The initial position of the slider.   |
| `title`    | string   | `""`     | The title to display below the slider.|
| `btnWidth` | number   | `300`    | The width of the slider track.        |

### Button

| Prop       | Type     | Default   | Description                                          |
|------------|----------|-----------|------------------------------------------------------|
| `title`    | string   | `""`      | The text to display on the button.                   |
| `onPress`  | function | `null`    | Callback function when the button is pressed.        |
| `variant`  | string   | `"primary"`| Variant style for the button. Options: `primary`, `secondary`, `outline`. |

### Key Sections Explained:

- **Installation**: Specifies how to install the library and its dependencies.
- **Usage**: Provides code examples for each component (`Switch`, `Slider`, and `Button`).
- **Props Documentation**: Outlines the props for each component, explaining how users can customize them.
- **Dependencies**: Lists the required dependencies (`react-native-reanimated` and `react-native-gesture-handler`).
- **License**: Provides the licensing information.

You can adjust the content to match your library's exact implementation or provide more detailed instructions for customization.
