import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {
  componentWillMount () {
    firebase.initializeApp({
      apiKey: 'AIzaSyDG6YtEHxssQJNLzoLD56WTEkO1JR7vr00',
      authDomain: 'packageroute-7b2e4.firebaseapp.com',
      databaseURL: 'https://packageroute-7b2e4.firebaseio.com',
      projectId: 'packageroute-7b2e4',
      storageBucket: 'packageroute-7b2e4.appspot.com',
      messagingSenderId: '469271313196'
    });
  }
  render () {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    );
  }
}
