import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as firebase from "firebase";
import { Container, Item, Form, Input, Button, Label } from "native-base";
export default class App extends React.Component {
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
