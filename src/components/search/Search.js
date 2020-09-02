import React, { Component } from "react";
import "./Search.css";
import Axios from "axios";
import imageResults from "../imageResults/imageResults";

class Search extends Component {
  state = {
    searchText: "",
    apiUrl: "https://pixabay.com/api",
    apiKey: "18148346-f0399d01f382c8a1e78320bfe",
    images: [],
  };

  onTextChange = (e) => {
    const val = e.target.value;
    this.setState({ [e.target.name]: val }, () => {
      if (val === "") {
        this.setState({ images: [] });
      } else {
        Axios.get(
          `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&safesearch=true`
        )
          .then((res) => this.setState({ images: res.data.hits }))
          .catch((err) => console.log(err));
      }
    });
  };

  render() {
    console.log(this.state.images);
    return (
      <div>
        <input
          type="text"
          placeholder="Search for images"
          name="searchText"
          value={this.state.searchText}
          onChange={this.onTextChange}
        />
        {this.state.images.length > 0 ? (
          <imageResults images={this.state.images} />
        ) : null}
      </div>
    );
  }
}

export default Search;
