import React, { Component } from "react";
import Slider from "react-slick";
import createClass from "create-react-class";
import "../Css/carousel.css";
var cards = [
  {
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",
    title: "Burgundy Flemming",
    subtitle: "Advertising"
  },
  {
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample119.jpg",
    title: "Nigel Nigel",
    subtitle: "Sound & Vision"
  },
  {
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample120.jpg",
    title: "Caspian Bellevedere",
    subtitle: "Accounting"
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
