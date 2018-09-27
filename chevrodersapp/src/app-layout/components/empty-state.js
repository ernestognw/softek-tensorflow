import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { Title, Button, Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

function EmptyState(props) {
  return(
    <View style={styles.mainView}>
      <Image
        style={styles.image} 
        source={require('../../assets/empty-state.png')}
      />
      <Title>
        Aún no has agregado imagen :(
      </Title>
      <Text style={styles.caption}>
        Presiona aquí para abrir el carrete y seleccionar una foto a analizar
      </Text>
      <LinearGradient
        style={styles.buttonContainer}
        start={{x: 0, y: 0.25}} end={{x: 1, y: 0.5}}
        colors={["#A875FF", "#39A1F7"]}
      >
        <Button onPress={() => { props.toggleModal(); props.getPhotos() }} style={styles.button}>
          <Text style={styles.buttonLabel}>
            <Icon style={styles.icon} name="cloud-upload"/>
          </Text>
        </Button>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 300,
    resizeMode: 'contain',
  },
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  caption: {
    color: "#A9AEBE",
    textAlign: 'center',
    marginTop: 20,
    width: '70%'
  },
  buttonLabel: {
    fontWeight: "500",
    color: "white",
    paddingRight: 10,
    paddingLeft: 10,
  },
  buttonContainer: {
    borderRadius: 22,
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 30,
  }
})

export default EmptyState;
