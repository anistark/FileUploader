import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class FileUploader extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    File Uploader
                </Text>
                <Text style={styles.subTitle}>
                    Upload Files Fast and Ease
                </Text>
                <Text style={styles.body}>
                    Kumar Anirudha{'\n'}
                    anistark anirudha.org
                </Text>
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
  body: {
    textAlign: 'center',
    color: '#47AFF1',
    marginBottom: 5
  }
});

AppRegistry.registerComponent('FileUploader', () => FileUploader);
