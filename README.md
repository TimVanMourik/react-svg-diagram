# react-svg-diagram
**react-svg-diagram** is a React component that allows you to build **diagrams** in SVG format on top of a canvas in with **pan** and **zoom** features. 

[![TimVanMourik](https://img.shields.io/badge/website-TimVanMourik-orange.svg)](https://www.TimVanMourik.com)
[![Code](https://img.shields.io/badge/sources-GitHub-c9510c.svg)](https://github.com/TimVanMourik/react-svg-diagram)
[![npm](https://img.shields.io/npm/v/react-svg-diagram.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/react-svg-diagram)
[![Downloads](https://img.shields.io/npm/dm/react-svg-diagram.svg)](https://www.npmjs.com/package/react-svg-diagram)

<!-- BEGIN_SECTION_SKIPPED_ONLINE -->
[![react-svg-diagram](https://raw.githubusercontent.com/TimVanMourik/react-svg-diagram/master/react-svg-diagram.gif)](http://TimVanMourik.github.io/react-svg-diagram)

## Live Demo
available at [http://TimVanMourik.github.io/react-svg-diagram/](http://TimVanMourik.github.io/react-svg-diagram)
<!-- END_SECTION_SKIPPED_ONLINE -->

## Features
This component can work in four different modes depending on the selected tool:
- With the tool **pan** the user can move the image and drag it around within the viewer, but can't interact with SVG child elements.
- With the tool **zoom** the user can scale the image either with a point click or selecting a region to zoom the specified area, but can't interact with SVG child elements.
- With the tool **none** the user can interact with SVG child elements and trigger events.
- With the tool **auto** the user can interact with SVG child elements, perform *pan* (dragging the image), *zoom in* (double click), *zoom out* (double click + shift).

## Documentation
- [Getting Started](./docs/getting-started.md#props)
- [Props](./docs/documentation.md#props)
- [Methods](./docs/documentation.md#methods)
- [API](./docs/documentation.md#api)
- [Autosizer viewer](./docs/autosizer-viewer.md)
- [SVG dynamically loaded](./docs/svg-dynamically-loaded.md)

<!-- BEGIN_SECTION_SKIPPED_ONLINE -->
## Install
### NPM
```sh
npm install --save react-svg-diagram
```
### YARN
```sh
yarn add react-svg-diagram
```
### UMD
```html
<script src="https://unpkg.com/prop-types@15/prop-types.js"></script>
<script src="https://unpkg.com/react-svg-diagram@0"></script>
```
<!-- END_SECTION_SKIPPED_ONLINE -->

## Usage examples
- [**Basic**](./examples/controlled-component) - Basic usage of `<ReactSVGPanZoom>`.
- [**Uncontrolled Component**](./examples/uncontrolled-component) - Basic usage of `<UncontrolledReactSVGPanZoom>`.
- [**Advanced usage**](./examples/controlled-component-advanced-usage) - Complex usage of `<ReactSVGPanZoom>` that uses some advanced features.
- [**JSFiddle**](https://jsfiddle.net/TimVanMourik/) - This is a JSFiddle demo that uses UMD bundle.
- [**CodeSandbox**](https://codesandbox.io/s/1v19809803) - This is a CodeSandbox demo.

## Changelog
- **v0.1** - 
- **v0.0** - 

## Some projects using react-svg-diagram
- [**GiraffeTools**](https://giraffe.tools)
- Pull request your project!

## Contributors
- [TimVanMourik](https://github.com/TimVanMourik) (author)