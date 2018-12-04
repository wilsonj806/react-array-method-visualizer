# React Array Method Visualizer

## Status

[![GitHub tag (latest SemVer)](https://img.shields.io/github/tag/wilsonj806/react-array-method-visualizer.svg)](https://github.com/wilsonj806/react-array-method-visualizer)

[**Live Site**](https://wilsonj806.github.io/react-array-method-visualizer/)

## Description

This is a small React app built to visualize the various array methods available.

## Goals

My goal is to build a React app that visualizes array methods. The app is pretty simple, but there's a large amount of state management involved due to the way I want to implement this.

### Roadmap to v1.0.0

**Currently implemented features**
- Instancing state for each rendered card
- Instaced array reset via button
- Array value submission via form
- Array reset via button

**Version 0.5.0 should have the following done**
- Cards should get the array from the form and then save that as an instance in each Card's state
- Cards should be resetable via a button in the form
- Form should allow you to submit or reset the arrays
- User may add and remove cards with the corresponding array method

**Version 1.0.0 should have the following done**
- Cards should visualize each step of the specified array method
  - each card should display a separate array method properly
- Cards should be able to *slowly* update the state of the Card's array while its performing operations
  - this is quite complex and will probably be worked on throughout

**Post v1.0.0 features**
- Allow for the addition of strings into the form

## Dependencies

This app was built using Facebook's create-react-app npm package.