import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Container, Item, Form, Input, Button, Label } from "native-base";
export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input autoCapitalize="none" autoCorrect={false} />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input autoCapitalize="none" autoCorrect={false} />
          </Item>
          <Button full rounded>
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
    alignItems: "center",
    justifyContent: "center"
  }
});
