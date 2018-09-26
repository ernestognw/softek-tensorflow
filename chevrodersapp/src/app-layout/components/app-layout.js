import React from "react";
import { Text, View, StyleSheet } from "react-native";
import {
  Container,
  Header,
  Button,
  Title,
  Right,
  Footer,
  FooterTab,
  Left,
  Content
} from "native-base";
import LinearGradient from "react-native-linear-gradient";

function AppLayout(props) {
  return (
    <Container style={styles.container}>
      <Header>
        <Left>
          <Title style={styles.title}>Chevroders</Title>
        </Left>
      </Header>
      <Content padder>{props.children}</Content>
      <LinearGradient
        style={styles.buttonContainer}
        start={{x: 0, y: 0.25}} end={{x: 1, y: 0.5}}
        colors={["#A875FF", "#39A1F7"]}
      >
        <Button style={styles.button} full>
          <Text style={styles.buttonLabel}>Subir imagen</Text>
        </Button>
      </LinearGradient>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F6F9FF"
  },
  buttonContainer: {
    width: "88%",
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: 30,
    borderRadius: 4
  },
  button: {
    borderRadius: 4
  },
  buttonLabel: {
    fontSize: 17,
    fontWeight: "500",
    color: "white"
  },
  title: {
    fontSize: 28,
    left: 20,
  }
});

export default AppLayout;
