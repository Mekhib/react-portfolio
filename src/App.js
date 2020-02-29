import React, { Component } from "react";
import "./App.css";
import Home from "./Components/home";
import About from "./Components/about";
import Portfolio from "./Components/portolio";
import Contact from "./Components/contact";

class App extends Component {
  state = {
    pages: {
      home: true,
      about: false,
      contact: false,
      portfolio: false
    },
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

  switch = page => {
    this.setState({ home: false });
    this.setState({ about: false });
    this.setState({ conatct: false });
    this.setState({ porfolio: false });
    this.setState({ [page]: true });
  };
  render() {
    let component = null;
    switch (true) {
      case this.state.home:
        component = <Home switch={this.switch} />;
        break;
      case this.state.about:
        component = <About switch={this.switch} />;
        break;
      case this.state.portfolio:
        component = <Portfolio switch={this.switch} />;
        break;
      case this.state.contact:
        component = <Contact switch={this.switch} />;
        break;
      default:
        component = <Home switch={this.switch} />;
    }
    return (
      <React.Fragment>
        <div className=".container">{component}</div>
      </React.Fragment>
    );
    //   const page = () => {
    //     switch(this.state) {
    //       case (this.state.home) : return <div> <Home  home={this.home}
    //           about={this.about}
    //           portfolio={this.portfolio}
    //           contact={this.contact}
    //         />
    //       </div>
    //       case(this.state.contact) : return <div><</div>

    //     }
    //   }
    //   if (this.state.home) {
    //     return
    //       <div>
    //         <Home
    //           home={this.home}
    //           about={this.about}
    //           portfolio={this.portfolio}
    //           contact={this.contact}
    //         />
    //       </div>

    //   }
    //   if (this.state.about) {
    //     return (
    //       <div>
    //       <About/>
    //     </div>
    //     )
    // }
  }
}
export default App;
