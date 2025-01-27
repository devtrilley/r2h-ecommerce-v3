// Component from home page's top slider using npm modules react-slick and slick-carousel
// Styles provided by slick-carousel package in index.css

// react-slick = React friendly wrapper that allows slick-carousel to work
// slick-carousel is the CORE library which holds the carousel animations and behavior. Without it, we'd have to custom make our animations in CSS, which waste time and isn't unique to our site

import Slider from "react-slick";

export default function HomeSlider(params) {
  // Slider settings
  const settings = {
    dots: true, // Navigation dots/circles
    infinite: true, // Infinity scroll, no end, revolving door
    speed: 500, // Transition spped (ms)
    slidesToShow: 1, // Show on slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // autoplay carousel
    autoplaySpeed: 3000, // Autoplay interval time (ms)
    arrows: true, // Navigation arrows
  };

  return (
    // Slider = containter for our slides that gives them the carousel functionality
    // We spread out our settings object as a prop
    <Slider {...settings}>
      {/* Each <div> is a slide in our carousel */}
      <div>
        <img src="images/code-over-uni-banner.png" alt="Slide 1 - Code Over Uni YouTube Banner" className="slider-image" />
      </div>
      <div>
        <img src="images/tom-welcome.png" alt="Slide 2 - Tom Rilley Welcome Message" className="slider-image" />
      </div>
      <div>
        <a ><img src="images/codewars-vid.png" alt="Slide 3 - Code Over Uni Code Codewars video thumbnail" className="slider-image" /></a>
      </div>
    </Slider>
  );
}
