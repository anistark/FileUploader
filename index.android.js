import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableNativeFeedback
} from 'react-native';

class FileUploader extends Component {
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#AFECCA'
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        color: '#95ABB9',
        margin: 10
    },
    subTitle: {
        textAlign: 'center',
        color: '#95ABB9',
        marginBottom: 5
    },
    buttonRoundStyle: {
        width: 200,
        height: 200,
        backgroundColor: '#47AFF1',
        borderRadius: 100,
        borderWidth: 5,
        borderColor: '#d6d7da'
    },
    buttonTextStyle: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 75
    }
});

AppRegistry.registerComponent('FileUploader', () => FileUploader);
