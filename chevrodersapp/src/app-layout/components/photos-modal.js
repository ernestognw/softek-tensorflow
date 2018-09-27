import React from "react";
import { Text, Modal, SafeAreaView, Dimensions, View, Image, TouchableHighlight, ScrollView, StyleSheet } from 'react-native';
import { Button, Icon } from 'native-base'; 
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

function PhotosModal(props) {
  return (
    <Modal
      animationType={"slide"}
      transparent={false}
      visible={props.modalVisible}
      onRequestClose={() => console.log("closed")}
    >
    <SafeAreaView/>
      <View style={styles.modalContainer}>
        <Button style={styles.closeButton} onPress={props.toggleModal}>
          <Icon style={styles.closeIcon} name="clear" />
        </Button>
        <ScrollView contentContainerStyle={styles.scrollView}>
          {props.photos.map((p, i) => {
            return (
              <TouchableHighlight
                style={{ opacity: i === props.index ? 0.5 : 1 }}
                key={i}
                underlayColor="transparent"
                onPress={() => props.setIndex(i)}
              >
                <Image
                  style={{
                    width: width / 3,
                    height: width / 3
                  }}
                  source={{ uri: p.node.image.uri }}
                />
              </TouchableHighlight>
            );
          })}
        </ScrollView>
        {props.index !== null && (
          <LinearGradient
            style={styles.buttonContainer}
            start={{x: 0, y: 0.25}} end={{x: 1, y: 0.5}}
            colors={["#A875FF", "#39A1F7"]}
          >
            <Button onPress={() => { props.setPhoto(); props.toggleModal() }} style={styles.button} full>
              <Text style={styles.buttonLabel}>Seleccionar imagen</Text>
            </Button>
          </LinearGradient>
        )}
      </View>
    </Modal>
  );
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContainer: {
    paddingTop: 5,
    flex: 1
  },
  scrollView: {
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  buttonContainer: {
    width: "88%",
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: 30,
    borderRadius: 4
  },
  buttonLabel: {
    fontSize: 17,
    fontWeight: "500",
    color: "white"
  },
  closeIcon: {
    color: '#535D7E',
  },
  closeButton: {
    width: '100%',
    justifyContent: 'flex-end',
  }
})


export default PhotosModal
