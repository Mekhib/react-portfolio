import React, { Component } from "react";
import Slider from "react-slick";
import createClass from "create-react-class";
import "../Css/carousel.css";

var cards = [
  {
    image:
      "https://lh3.googleusercontent.com/NtylMNwrgEgzbyUm8tr2FPONbxV7gl6JgH8DoPYqcIGx6lQEWeDzv3P64o-wBliC7u7SMgqi4oegfEAepBxrLhPp-RvbSLkwSTaVMfK1lKXNKRb4vutMIJdnvvnghS6LxWi1FdC-yMillNLDdBthzC8EDqZkLDiKl6vJVGt6NvYALtuh0UgS0KS4eEIpbDM9hTyJ0_uD7FsA1IyLfQIgmYJ7dX-ydnT-NV28GOIm6RBz_gxcJLTXaWV7x09R_mvLX8ddZJCfXQXKF-0zEd6dUiJV6E6qV2V5PiX0E0HlEpHAgACVyK2S9yIvwy1A99KAIzpeUwHJ0C9ixfAMADtWk38_01RsO5G75O8fVhx4BWc4sjayn0KqPjA2AJZ6oYsMy1gsmx8oLLF7ACoYw-1qkSfj9uiKvDDb_6mgnXaDe7kTR4wgb3qnw4wG2BScD80Cehfv5HHM5i52lRmVGIO9hoB9pMIiNY5CWLboX4oe6I3qyg68uUt-hdDhmWdOV42I7FCsCvrHcos5wVtCsfrd-U9aFU7r8sYYJ1FEWxGsV51uNtZQ02_h423EJrsHMt0OCVyZhqL2OJ6KbasoLyXDvMlYj2dRJKakwaqEmp6xhygdfqiKu91VUNjk_frxSr3yqbysDbkMxcTfMPCSZsHf7BvR6toVx89Try2PfPYtJqa6PA_Q5Q5DX88=w443-h252-no",
    title: "What's on?",
    subtitle: "small full-stack app"
  },
  {
    image:
      "https://lh3.googleusercontent.com/Av2i78os53dyjY7-yIm1M1tbxXpIb9yQmd4hL5_j7AOsIY2bC2jiG-Dwez4aPuXK8sUXRHH4PUoh_3CH0tuPbaKU05HeMMUq0MsiPs2VEF9s116TKPwbo1JnSxo5LXQzPwBIDCn6IPsCnj1nd5wdmhD7p9T_EzwXGAXuL02Hk9Lo0RF1WghIvFGTcq1qcmWD49Cm7AOKzEOJAZVbavCAlqJLpTNUYG_BVNdhwfQaZSi-aXVOTQ4kQ5vr3MG7NjpLfRZrRCAKrazXudBwIz5k4FyNUqleX-ZVfnUxpug0E-NyOYPgN8Tdgx9FRPqvhAXvOJBOcWekLb2HKv29iCXTBuPfayowtBHCcreZbkffVrRh6OZbyHSBj7aH2gYk_oB2I9Rl543CS169eh17K-KHaLDV-ouwmnLJZlj6dAAN586YJymb6GdlM6GhUw_iMLDFmXGyW60k_SKuK88Yh8_pERveOTeQZcaPDzK8b1XwwrTDCFo7TyYdAuABDAa7VeCAC7ZldQqGiCpyFgHAaqDJOOKQLjeMlx3095MzknbxkEiHp4GUfqlCIUfFk2TjXTpi1np45V-GifJ74RJEKuFyLf03e74RHeiJh9HfMcK9SLQP5DHSvTBdzydeEY5ql3HOnR5GnKrBgWC6yuv7N5novcwFcIiwbTM1NStzdia_iYd0M7mcvIy_pYI=w500-h264-no",
    title: "Portfolio 1.0",
    subtitle: "Porfolio before React"
  },
  {
    image:
      "https://lh3.googleusercontent.com/u4ukrzc60H2FAEFxLKHOqcBSMvZrJV4RIzUI2hW87yba8ePG_Q0LT7EuNnL_Bb7rP8M0lDAp0hrENuRd6w5pnfkUefoxS1fJclEh14eDFk48FwI8WkcWW8jLZP3qF54g5N-ijDtJ9PSeoibQhlIv0qzmUv1QIUc7VmN5NNZbiQ0hDZTBbY7kCjIp8KfbTFL59Y9rF1APScLF-7mwAdGVZtRW2cCpLsRq4N8RVzPfrWIXgPcBYKIoBnrcNKLRwynS4z9y_tR-iuXZ7T1xHiXXzz6svkOJvSSjuyhdo00s73dzG_ehtPki9qroo_fMxlkhYsJx9rQzgg1-1ETjh66ECHJqB762BpavAB9HCE993S6HZQUD-7b1En7bcXQAX_ZAlrEYa5_bZhBz2V7c6b_7BPOlV_uJY9EDuG17Nfj7bpotFMK6JEVA5SQ4WUthTADpxAp_SrsYDJ_DxoBcmCDqVjVzYuH59-S9vS_riQ5zZg9X7PhdbNYqddLHa_koSnMqfSxpNDQxYbtMasaMZPCVcOkOb-edftYwN0PaMXkb6B0O6CiwwavyefsGZE6bHJRoZNDpNr9fsSoopkuSuRO-sUGjiT8ROyz_UoLF41LugHQUNATGeaXeqRj-vZYerbU20iGZB4rXVZLdTS8TZh1HNKStIXujDSj5yT9df_djrNI9rIo_PzY66sc=w500-h282-no",
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
