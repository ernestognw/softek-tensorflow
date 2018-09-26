import React, { Component } from "react";
import getTheme from "./native-base-theme/components";
import AppLayout from "./src/app-layout/components/app-layout";
import ImageCard from "./src/app-layout/containers/image-card";
import custom from "./native-base-theme/variables/custom";
import { StyleProvider, Button } from "native-base";
import { View, StyleSheet, Modal, ScrollView, CameraRoll } from 'react-native';
import { Text } from 'react-native';
import PhotosModal from './src/app-layout/components/photos-modal';
import RNFetchBlob from 'rn-fetch-blob'

class App extends Component {
  state = {
    modalVisible: false,
    photos: [],
    index: null,
    selectedImage: null,
  };

  toggleModal = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  };

  getPhotos = () => {
    CameraRoll.getPhotos({
      first: 20,
      assetType: "All"
    }).then(r => {
      console.log(r);
      this.setState({ photos: r.edges });
    });
  };

  setIndex = (index) => {
    if (index === this.state.index) {
      index = null
    }
    this.setState({ index })
  }

  setPhoto = () => {
    const image = this.state.photos[this.state.index].node.image.uri;
    this.setState({ selectedImage: image })
  }

  deletePhoto = () => {
    this.setState({ selectedImage: null, index: null })
  }

  sendPhoto = () => { // 
    const image = this.state.photos[this.state.index].node.image.uri
    RNFetchBlob.fs.readFile(image, 'base64')
    .then((data) => {
      console.log(data)
    })
  }

  render() {
    return (
      <StyleProvider style={getTheme(custom)}>
        <AppLayout
          toggleModal={this.toggleModal}
          getPhotos={this.getPhotos}
          image={this.state.selectedImage}
        >
          <ImageCard 
            image={this.state.selectedImage}
            deletePhoto={this.deletePhoto}
          />
          <PhotosModal
            getPhotos={this.getPhotos}
            toggleModal={this.toggleModal}
            setIndex={this.setIndex}
            setPhoto={this.setPhoto}
            modalVisible={this.state.modalVisible}
            photos={this.state.photos}
            index={this.state.index}
          />
        </AppLayout>
      </StyleProvider>
    );
  }
}

export default App;
