import React, { Component } from "react";
import Slider from "react-slick";
import createClass from "create-react-class";
import "../Css/carousel.css";
import gif1 from "../Css/gif1.gif";
import gif2 from "../Css/gif2.gif";
import gif3 from "../Css/gif3.gif";
var cards = [
  {
    image: gif1,
    title: "What's on?",
    subtitle: "small full-stack app"
  },
  {
    image: gif2,
    title: "Portfolio 1.0",
    subtitle: "Porfolio before React"
  },
  {
    image: gif3,
    title: "News.me",
    subtitle: "React App"
  }
];
class Article extends Component {
  render() {
    var image = this.props.data.image,
      title = this.props.data.title,
      subtitle = this.props.data.subtitle;
    return (
      <figure className="snip1584">
        <img src={image} alt="screenshot" />
        <figcaption>
          <h3>{title}</h3>
          <h5>{subtitle}</h5>
        </figcaption>
        <a href="#"></a>
      </figure>
    );
  }
}
class News extends Component {
  render() {
    var data = this.props.data;
    var newsTemplate;
    var settings = {
      dots: true,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 0
    };
    if (data.length > 0) {
      newsTemplate = data.map(function(item, index) {
        return (
          <div key={index}>
            <Article data={item} />
          </div>
        );
      });
    } else {
      newsTemplate = <p>Please add some cards</p>;
    }
    return (
      <div className="news">
        <Slider {...settings}>{newsTemplate}</Slider>
      </div>
    );
  }
}
class App extends Component {
  render() {
    return <News data={cards} />;
  }
}

export default App;
