# @fastics/components

This project aims to help by creating beautiful React components, without headache.

In fact, you only need to design your own custom styles and here we go ! You get working components
that work for you.

[![CI status][github-action-image]][github-action-url] [![codecov][codecov-image]][codecov-url][![david deps][david-image]][david-url] [![david devDeps][david-dev-image]][david-dev-url] [![Total alerts][lgtm-image]][lgtm-url]

[codecov-image]: https://codecov.io/gh/fastics/components/branch/main/graph/badge.svg?token=2jeYgN8SRs
[codecov-url]: https://codecov.io/gh/fastics/components/branch/main
[github-action-image]: https://github.com/fastics/components/workflows/Quality/badge.svg
[github-action-url]: https://github.com/fastics/components/actions?query=workflow%3AQuality
[david-image]: https://img.shields.io/david/fastics/components?style=flat-square
[david-dev-url]: https://david-dm.org/fastics/components?type=dev
[david-dev-image]: https://img.shields.io/david/dev/fastics/components?style=flat-square
[david-url]: https://david-dm.org/fastics/components
[lgtm-image]: https://flat.badgen.net/lgtm/alerts/g/fastics/components
[lgtm-url]: https://lgtm.com/projects/g/fastics/components/alerts/

## Demo

See live demo at https://fastics.github.io/components/

## Installation

```shell
yarn add @fastics/components
```

Or

```shell
npm i -S @fastics/components
```

## Usage

```tsx
import { IconButton, Icon, Icons } from '@fastics/components';

const App = () => (
  <IconButton
    icon={<Icon icon={Icons.ring_volume} />}
    onPress={() => { console.log('pressed!') }}
  />
)
```

## Documentation
You can see all documentation on https://fastics.github.io/components/.
It's a component library that exposes all available components.

## Contributors
Made with ❤️ by [Donovan BENFOUZARI](https://dbenfouzari.tech)
