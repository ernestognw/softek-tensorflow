import React, { Component } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { Card, Text, CardItem, Icon } from "native-base";

class ImageCard extends Component {
  render() {
    return (
      <Card>
        <CardItem cardBody>
          <TouchableOpacity style={styles.close}>
            <Icon style={styles.icon} name="close"/>
          </TouchableOpacity>
          <Image
            source={{uri: 'https://picsum.photos/500/450/?random'}}
            style={styles.image}
          />
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  image: { 
    height: 350, 
    flex: 1,
    borderRadius: 5,
    shadowOffset: {height: 10, width: 0},
    shadowColor: 'rgba(0,0,0,0.1)',
    shadowRadius: 20
  },
  close: {
    position: "absolute",
    zIndex: 10,
    top: 5,
    right: 0,
  },
  icon: {
    color: 'rgba(255,255,255,0.5)',
  }
});

export default ImageCard;
