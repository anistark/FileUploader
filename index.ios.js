import React, { Component } from 'react';
import {
    AppRegistry
} from 'react-native';

var HomeScreen = require('./App/screens/home_ios');

class FileUploader extends Component {
    render() {
        return (
            <HomeScreen />
        );
    }
}

AppRegistry.registerComponent('FileUploader', () => FileUploader);
