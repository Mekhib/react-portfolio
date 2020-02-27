import React, { Component } from "react";
import "./App.css";
import Home from "./Components/home";

class App extends Component {
  state = {
    home: true,
    about: false,
    contact: false,
    portfolio: false,
    projects: [
      {
        name: "The Developers Network",
        descripion: "",
        link: "",
        linkToCode: "",
        screenshot: "",
        languages: ""
      },
      {
        name: "News.Me",
        descripion: "",
        link: "",
        linkToCode: "",
        screenshot: "",
        languages: ""
      },
      {
        name: "What's On?",
        descripion: "",
        link: "",
        linkToCode: "",
        screenshot: "",
        languages: ""
      },
      {
        name: "gify",
        descripion: "",
        link: "",
        linkToCode: "",
        screenshot: "",
        languages: ""
      },
      {
        name: "215-Contacts",
        descripion: "",
        link: "",
        linkToCode: "",
        screenshot: "",
        languages: ""
      }
    ]
  };
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}
export default App;
