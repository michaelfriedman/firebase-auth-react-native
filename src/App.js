import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {
  state = { loggedIn: null };

  componentWillMount () {
    firebase.initializeApp({
      apiKey: 'AIzaSyDG6YtEHxssQJNLzoLD56WTEkO1JR7vr00',
      authDomain: 'packageroute-7b2e4.firebaseapp.com',
      databaseURL: 'https://packageroute-7b2e4.firebaseio.com',
      projectId: 'packageroute-7b2e4',
      storageBucket: 'packageroute-7b2e4.appspot.com',
      messagingSenderId: '469271313196'
    });

    firebase.auth().onAuthStateChanged((user) => {
      user
        ? this.setState({ loggedIn: true })
        : this.setState({ loggedIn: false });
    })
  }

  renderContent () {
    const { loggedIn } = this.state;
    switch (loggedIn) {
      case true:
        return (
          <Button
            onPress={() => firebase.auth().signOut()}
          >
            Log Out
          </Button>
      )
      case false:
        return <LoginForm />
      default:
        return <Spinner size='large' />
    }
  }
  render () {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}
