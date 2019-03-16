import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as firebase from "firebase";
import { Container, Item, Form, Input, Button, Label } from "native-base";

var config = {
  apiKey: "AIzaSyDFdsjQWG8IFLXmviNqSiVZMw_ADFl5tpo",
  authDomain: "react-native-firebase-3bde9.firebaseapp.com",
  databaseURL: "https://react-native-firebase-3bde9.firebaseio.com",
  projectId: "react-native-firebase-3bde9",
  storageBucket: "react-native-firebase-3bde9.appspot.com",
  messagingSenderId: "269398778466"
};
firebase.initializeApp(config);
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  SignUp = (email, password) => {
    try {
      firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error.toString(error));
    }
  };
  render() {
    return (
      <Container style={styles.container}>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input autoCapitalize="none" autoCorrect={false} />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </Item>
          <Button full rounded style={{ marginTop: 20 }}>
            <Text>SignIn</Text>
          </Button>
          <Button full rounded success style={{ marginTop: 20 }}>
            <Text>Signup</Text>
          </Button>
        </Form>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
    padding: 10
  }
});
