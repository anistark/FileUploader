/**
 * Created by Anirudha on 25/03/17.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Text,
    TouchableNativeFeedback,
    ToastAndroid
} from 'react-native';

var styles = require('../styles/home');
var services = require('../utils/services');

//var FilePickerManager = require('NativeModules').FilePickerManager;

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    _onPressButton() {
        console.log('in Button Pressed');
        //services.uploadFile(function(res, err){
        //    if (err) {
        //        ToastAndroid.show(String(err), ToastAndroid.LONG);
        //    }
        //    else if (res) {
        //        ToastAndroid.showWithGravity(String(res.message), ToastAndroid.SHORT, ToastAndroid.CENTER);
        //    }
        //});
        //FilePickerManager.showFilePicker((response) => {
        //    console.log('Response', response);
        //
        //    if (response.didCancel) {
        //        console.log('User cancelled file picker');
        //    }
        //    else if (response.error) {
        //        console.log('FilePickerManager Error: ', response.error);
        //    }
        //    else {
        //        this.setState({
        //            file: response
        //        });
        //    }
        //});
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
                <TouchableNativeFeedback
                    onPress={this._onPressButton}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <View style={styles.buttonRoundStyle}>
                        <Text style={styles.buttonTextStyle}>Upload</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
}

module.exports = HomeScreen;
