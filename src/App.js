import React, { Component } from "react";
import "./App.css";
import Home from "./Components/home";
import About from "./Components/about";
import Portfolio from "./Components/portolio";
import Contact from "./Components/contact";
import {
  FindInPageTwoTone,
  ImportContactsTwoTone,
  TvTwoTone,
  GifTwoTone,
  ContactsTwoTone
} from "@material-ui/icons";

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
        blur: "React app that shows conditonal search results",
        description:
          "The DEVelopers Network is a concept that brings together the community aspect of stackoverflow, the search power of Google, and the information of The technological web all in one place. It’s designed for old and new developers alike to have all resources in one central place, disregarding the need to search a multitude of websites to find your answers.",
        link: "https://github.com/Mekhib/TheDevelopersNetwork",
        linkToCode: "https://github.com/Mekhib/TheDevelopersNetwork",
        screenshot:
          "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",
        languages: "React, JS, NODE, Mongo",
        icon: FindInPageTwoTone
      },
      {
        name: "News.Me",
        blurb: "Simple react news site",
        description:
          "News.me is a simple, single page React app (Created using create-react-app) That displays top stories, and allows a user to view stories based on category, sources or user defined search and display results in card like layout.",
        link: "https://news-me-5c1ca.web.app/",
        linkToCode: "https://github.com/Mekhib/News.me",
        screenshot:
          "https://media.gettyimages.com/photos/electronic-technician-holding-tweezers-and-assemblin-a-circuit-board-picture-id166103292?s=612x612",
        languages: "React, CSS, HTML",
        icon: ImportContactsTwoTone
      },
      {
        blurb: "An app for finding T.v Show info",
        name: "What's On?",
        description:
          "A simple app that utilizes 2 T.V api's to get quick info on televison shows with a goal of mobile responsivness (Try it out, tell me what you think!)",
        link: "https://whats-on-tv.herokuapp.com/",
        linkToCode: "https://github.com/Mekhib/WhatsOn-",
        screenshot:
          "https://media.gettyimages.com/photos/electronic-technician-holding-tweezers-and-assemblin-a-circuit-board-picture-id166103292?s=612x612",
        languages: "JS, Node, Express",
        icon: TvTwoTone
      },
      {
        name: "gify",
        blurb: "Displays gifs on search",
        description: "JavaScript and API call combined to make a GIF website",
        link: "https://mekhib.github.io/-Gifyapi/",
        linkToCode: "https://github.com/Mekhib/-Gifyapi",
        screenshot:
          "https://media.gettyimages.com/photos/electronic-technician-holding-tweezers-and-assemblin-a-circuit-board-picture-id166103292?s=612x612",
        languages: "Bootstrap, HTML",
        icon: GifTwoTone
      },
      {
        name: "215-Contacts",
        blurb: "App that allows sharing of contact info",
        description:
          "An app that allows you to add friends and view thier contact information; Login and sign-up required",
        link: "https://github.com/Mekhib/Project-2",
        linkToCode: "https://github.com/Mekhib/Project-2",
        screenshot:
          "https://media.gettyimages.com/photos/electronic-technician-holding-tweezers-and-assemblin-a-circuit-board-picture-id166103292?s=612x612",
        languages: "Mongo, JS, HTML, CSS, Express",
        icon: ContactsTwoTone
      }
    ]
  };
  toggleAccordion = () => {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("active");
  };
  switch = page => {
    this.setState({ home: false });
    this.setState({ about: false });
    this.setState({ contact: false });
    this.setState({ porfolio: false });
    this.setState({ [page]: true });
  };
  render() {
    let component = null;
    switch (true) {
      case this.state.contact:
        component = <Contact switch={this.switch} />;
        break;
      case this.state.home:
        component = <Home switch={this.switch} />;
        break;
      case this.state.about:
        component = <About switch={this.switch} />;
        break;
      case this.state.portfolio:
        component = (
          <Portfolio switch={this.switch} projects={this.state.projects} />
        );
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
