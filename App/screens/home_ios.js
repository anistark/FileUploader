/**
 * Created by Anirudha on 25/03/17.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Text,
    AlertIOS,
    TouchableOpacity
} from 'react-native';

var styles = require('../styles/home');
var services = require('../utils/services');

var DocumentPicker = require('react-native').NativeModules.RNDocumentPicker;

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {file: ''};
    }

    _onPressButton() {
        console.log('Button Pressed');

        AlertIOS.alert(
            'Button Clicked'
        );

        DocumentPicker.show({
            filetype: ['public.image']
        },(error,url) => {
            alert(url);
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    File Uploader
                </Text>
                <Text style={styles.subTitle}>
                    Upload Files Fast and Ease
                </Text>
                <TouchableOpacity
                    onPress={this._onPressButton}>
                    <View style={styles.buttonRoundStyle}>
                        <Text style={styles.buttonTextStyle}>Upload</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

module.exports = HomeScreen;
