import React from "react";
import { Text, Modal, Dimensions, View, Image, TouchableHighlight, ScrollView, StyleSheet } from 'react-native';
import { Button } from 'native-base'; 

const { width } = Dimensions.get('window');

function PhotosModal(props) {
  return (
    <Modal
      animationType={"slide"}
      transparent={false}
      visible={props.modalVisible}
      onRequestClose={() => console.log("closed")}
    >
      <View style={styles.modalContainer}>
        <Button onPress={props.toggleModal}>
          <Text>Close</Text>
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
          <View style={styles.shareButton}>
            <Button onPress={() => {props.setPhoto(); props.toggleModal();}} >
              <Text>Set photo</Text>
            </Button>
          </View>
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
    paddingTop: 20,
    flex: 1
  },
  scrollView: {
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  shareButton: {
    position: 'absolute',
    width,
    padding: 10,
    bottom: 0,
    left: 0
  }
})


export default PhotosModal
