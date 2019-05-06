import React from "react";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";

class App extends React.Component {
  state = { images: [] };
  //recuarda que aqui estamos usando axios revisar en el archivo unsplash
  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });

    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        {/* se le pasa como prop un arreglo de imagenes */}
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
