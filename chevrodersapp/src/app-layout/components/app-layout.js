import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import {
  Container,
  Header,
  Button,
  Title,
  Right,
  Footer,
  FooterTab,
  Left,
  Content,
  Body
} from "native-base";
import LinearGradient from "react-native-linear-gradient";

function AppLayout(props) {
  return (
    <Container style={styles.container}>
      <Header>
        <Left/>
        <Body>
          <Image source={require('../../assets/logotipoblack.png')} style={styles.image} />
        </Body>
        <Right/>
      </Header>
      <Content padder>{props.children}</Content>
      <LinearGradient
        style={styles.buttonContainer}
        start={{x: 0, y: 0.25}} end={{x: 1, y: 0.5}}
        colors={["#A875FF", "#39A1F7"]}
      >
      {
        props.image ?
        <Button style={styles.button} full>
          <Text style={styles.buttonLabel}>Subir imagen</Text>
        </Button> :
        <Button onPress={() => { props.toggleModal(); props.getPhotos() }} style={styles.button} full>
          <Text style={styles.buttonLabel}>Buscar imagen</Text>
        </Button>
      }
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
  },
  image: {
    height: 70,
    resizeMode: 'contain',
  },
});

export default AppLayout;
