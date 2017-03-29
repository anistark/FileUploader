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

var FilePickerManager = require('NativeModules').FilePickerManager;

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {file: ''};
    }

    _onPressButton() {
        var options = {};
        FilePickerManager.showFilePicker(options,(response) => {
            if (response.didCancel) {
                ToastAndroid.showWithGravity('Dont be shy! Go on! Upload Something!', ToastAndroid.SHORT, ToastAndroid.CENTER);
            }
            else if (response.error) {
                console.log(response.error);
                ToastAndroid.showWithGravity('Looks like we are broken at the moment. Hang in there while we get it fixed in a jiffy!!', ToastAndroid.SHORT, ToastAndroid.CENTER);
            }
            else {
                services.uploadFile(response, function(res, err){
                    if (err) {
                        ToastAndroid.show(String(err), ToastAndroid.LONG);
                    }
                    else if (res) {
                        if (res.success) {
                            ToastAndroid.showWithGravity(String(res.message), ToastAndroid.SHORT, ToastAndroid.CENTER);
                        }
                        else {
                            ToastAndroid.show(String(res.message), ToastAndroid.LONG);
                        }
                    }
                });
            }
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
