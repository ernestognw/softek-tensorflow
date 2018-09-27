import React, { Fragment } from "react";
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
      {props.children}
      {
        props.image &&
        <Fragment>
        <LinearGradient
          style={styles.buttonContainer}
          start={{x: 0, y: 0.25}} end={{x: 1, y: 0.5}}
          colors={["#A875FF", "#39A1F7"]}
        >
          <Button onPress={props.sendPhoto} style={styles.button} full>
            <Text style={styles.buttonLabel}>Subir imagen</Text>
          </Button> 
        </LinearGradient>
        <View style={styles.anotherContainer}>
          <Button onPress={props.toggleModal} style={styles.button} full primary>
            <Text style={styles.anotherLabel}>Cambiar imagen</Text>
          </Button> 
        </View>
        </Fragment>
      }
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
    marginBottom: 10,
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
  anotherContainer: {
    width: "88%",
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: 30,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#535D7E"
  },
  anotherLabel: {
    fontSize: 17,
    fontWeight: "500",
    color: "#535D7E"
  }
});

export default AppLayout;
