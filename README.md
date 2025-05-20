⚠️ WARNING, Work in progress ⚠️

If you are looking for a good key/value storage solution for React Native, you check out [react-native-mmkv](https://github.com/mrousavy/react-native-mmkv)

This intended to be used only if you need to upgrade your existing code to use turbo or integrate a brownfeild android application.

# react-native-shared-preferences-turbo

react-native-shared-preferences  w/ turbo

## Installation

```sh
npm install react-native-shared-preferences-turbo
```
or
```sh
yarn add react-native-shared-preferences-turbo
```

## Usage


```js
import { setItem, getItem, clear } from 'react-native-shared-preferences-turbo';

// Store a value
setItem('myKey', 'myValue');
// Retrieve a value
const value = getItem('myKey');

// Clear all stored preferences
clear();
```

You can customize the name of the shared preferences file used for storage on Android by adding a meta-data entry to your application's AndroidManifest.xml file:

```xml
<application ...>
    <meta-data
        android:name="com.sharedpreferencesturbo.PREFERENCES_NAME"
        android:value="your_custom_preferences_name" />
</application>
```
If no custom name is specified, the module will default to using "RNSharedPreferences" as the shared preferences name.

### Example
Here's an example of how to set a custom preferences name in your Android manifest:

```xml
<application ...>
    <!-- Other application components -->
    
    <meta-data 
        android:name="com.sharedpreferencesturbo.PREFERENCES_NAME" 
        android:value="com.myapp.custom_preferences" />

```


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
