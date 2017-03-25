/**
 * Created by Anirudha on 25/03/17.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Text,
    TouchableNativeFeedback
} from 'react-native';

var styles = require('../styles/home');

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    _onPressButton() {
        console.log("You tapped the button!");
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
