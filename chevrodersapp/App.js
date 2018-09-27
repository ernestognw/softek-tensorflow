import React, { Component } from "react";
import getTheme from "./native-base-theme/components";
import AppLayout from "./src/app-layout/components/app-layout";
import ImageCard from "./src/app-layout/containers/image-card";
import custom from "./native-base-theme/variables/custom";
import { StyleProvider, Button, Content, Title } from "native-base";
import { View, StyleSheet, Modal, ScrollView, CameraRoll } from 'react-native';
import PhotosModal from './src/app-layout/components/photos-modal';
import RNFetchBlob from 'rn-fetch-blob'
import EmptyState from './src/app-layout/components/empty-state';

console.disableYellowBox = true;

class App extends Component {
  state = {
    modalVisible: false,
    photos: [],
    index: null,
    selectedImage: null,
    message: null,
  };

  toggleModal = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  };

  getPhotos = () => {
    CameraRoll.getPhotos({
      first: 20,
      assetType: "Photos"
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
    this.setState({ selectedImage: null, index: null, message: null, })
  }

  sendPhoto = () => {
    console.log('funciona')
    const url = 'http://localhost:8000/predict/predict_img';
    const image = this.state.photos[this.state.index].node.image.uri
    RNFetchBlob.fs.readFile(image, 'base64')
    .then((data) => {
      console.log(data.length / 1024 + ' kB')
      fetch(url, {
        method: 'post',
        body: data
      }).then(res => {
        console.log(res)
        let data = JSON.parse(res._bodyText)
        console.log(data)
        this.setState({message:data.saludos})
      });
    })
  }

  render() {
    return (
      <StyleProvider style={getTheme(custom)}>
        <AppLayout
          image={this.state.selectedImage}
          sendPhoto={this.sendPhoto}
          toggleModal={this.toggleModal}
        >
        {
          this.state.selectedImage ? 
          <Content padder>
            <ImageCard 
              image={this.state.selectedImage}
              deletePhoto={this.deletePhoto}
            />
            {
              this.state.message &&
              <Title>{this.state.message}</Title>
            }
          </Content> :
          <EmptyState 
            toggleModal={this.toggleModal}
            getPhotos={this.getPhotos}
          />
        }
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
