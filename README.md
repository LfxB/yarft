# YARFT

![npm](https://img.shields.io/npm/v/yarft.svg?style=for-the-badge)

Yet another react fit text ... component!

## Features

- Scales text down to fit its parent element.
- Built for React 16.

## Installation

```sh
npm i yarft
```

## Used on

[Bible Verse Display](https://bibleversedisplay.onrender.com/)

## Usage

```js
import React from 'react'
import FittedText from 'yarft'

const BigHello = () => (
  <FittedText>
    Hello!
  </FittedText>
)
```

## Documentation

| Properties | Type       | Default       | Description |
 | ---        | ---        | ---           | ---         |
 | `defaultFontSize`  | `Number`   | `200`           | The default font size (in px) the text will be scale down from. |

## Changelog

- [x] 1.0.0 - Fit text on vertical overflow
- [x] 1.1.0 - Fit text on horizontal overflow
- [x] 1.1.0 - `windowObject` : new property to allow users to pass a different window to add the resize listeners to.
- [ ] `parent` : new property to let text fit to a given parent node.

## Contributing

1. Fork this repo
2. Add stuff
3. Create a PR

## Building

```sh
npm run-script build
```

## Credits

Thanks to [rmaruizzo](https://github.com/rmariuzzo/react-new-window/blob/master/README.md) for this sweet readme template :)
