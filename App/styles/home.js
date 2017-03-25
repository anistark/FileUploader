/**
 * Created by Anirudha on 25/03/17.
 */


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet
} from 'react-native';


const homeStyles = StyleSheet.create({
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


module.exports = homeStyles;
