# Smart Store

Smart Store Apps Mobile Application based on React Native Framework. Built with **React Native 0.62.2**.

## Features

- [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- [Zustand](https://github.com/pmndrs/zustand)
- [React Navigation](https://reactnavigation.org/)
- [React Native Gesture Handler](https://github.com/kmagiera/react-native-gesture-handler)
- [Jest](https://facebook.github.io/jest/)
- [Eslint](http://eslint.org/) ([Airbnb config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb))

## Prerequisites

- [Node](https://nodejs.org) v12 (it is recommended to install it via [NVM](https://github.com/creationix/nvm))
- [Yarn](https://yarnpkg.com/)
- A development machine set up for React Native by following [these instructions](https://facebook.github.io/react-native/docs/getting-started.html)

## Installation

First of all, install npm package dependencies

```
npm install
```

or if using yarn:

```
yarn install
```

## Run Application [Android]

Below command is used for running metro packager and build and install android debug APK file to device or emulator

```
npx react-native run-android
```

Or if you want run a stand alone metro packager only, use below command:

```
yarn start
```

And If you want to build APK file only use below command:

- Build debug version

```
// on Windows
> cd android
> .\gradlew assembleDebug

// on Mac OS
$ cd android
$ chmod +x gradlew
$ ./gradlew assembleRelease
```

- Build release version

```
// on Windows
> cd android
> .\gradlew assembleRelease

// on Mac OS
$ cd android
$ chmod +x gradlew
$ ./gradlew assembleRelease
```

## Run Application [iOS]

Below command is used for running metro packager and build and install iOS debug IPA file to device or emulator

```
npx react-native run-ios
```

## Account DEMO For Login

- username: 'mor_2314'
- password: '83r5^_'
