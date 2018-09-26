import React, { Component } from "react";
import getTheme from "./native-base-theme/components";
import AppLayout from "./src/app-layout/components/app-layout";
import ImageCard from "./src/app-layout/containers/image-card";
import custom from "./native-base-theme/variables/custom";
import { StyleProvider } from "native-base";

class App extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(custom)}>
        <AppLayout>
          <ImageCard />
        </AppLayout>
      </StyleProvider>
    );
  }
}

export default App;
