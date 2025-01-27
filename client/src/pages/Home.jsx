// Home Page: Just the <main> from v1's corresponding HTML refactored into JSX

// Importing Slider/Carousel
import HomeSlider from '../components/HomeSlider'

// Importing css file from v1 for Home page
import '../styles/home.css'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <HomeSlider/>

      {/* <div className="img-container">
        <img
          src="images/code-over-uni-banner.png"
          alt="Code Over Uni Banner Image"
          className="banner-img"
        />
      </div> */}

      <h1 className="home-heading">
        Welcome to
        <span className="brand-line">Code Over Uni</span>
      </h1>
      <div className="img-container">
        <img
          src="images/code-over-uni-logo.png"
          alt="Code Over Uni brand logo"
          className="logo"
        />
      </div>

      <section className="container">
        <h2 className="center">Who We Are</h2>
        <p className="flow-text">
          Code Over Uni is a project by Tom Rilley that offers high-quality
          educational computer science videos accessible to all. Tom Rilley
          started CodeOverUni after teaching himself how to code online as a
          teenager. Tom wanted to create a site that would give programming
          beginners the guidance they need. Tom Rilley started Code Over Uni
          after teaching himself how to code online as a teenager. Tom wanted to
          create a site that would give programming beginners the guidance they
          need.
        </p>

        <figure className="custom-figure">
          <a href="https://www.linkedin.com/in/tamsir-rilley-a45487330/"
            ><img
              src="images/Tom-Rilley.jpeg"
              className="card headshot"
              alt="Image of Code Over Uni Founder Tom Rilley"
          /></a>
          <figcaption className="center">
            Tom Rilley: Founder of Code Over Uni
          </figcaption>
        </figure>
      </section>

      <section className="container">
        <h2 className="center">Our Mission</h2>
        <p>
          Our mission at Code Over Uni is to make mastering tech easy,
          accessible, and fun for everyone, regardless of your limitations,
          whether physical, mental, or financial. I want to help you become
          living proof that you can learn to code and even have a successful
          tech career without having to go to an esteemed university. To watch
          our videos, click
          <a href="https://www.youtube.com/@CodeOverUni/featured"> HERE</a> to
          visit our YouTube channel.
        </p>
      </section>

      <section className="container">
        <h2 className="center">Purpose of Site</h2>
        <p>
          The purpose of this site is to serve as the home of Code Over Uni's
          merch store. This is where we sell all of our branded products as well
          as our affiliate partner links. If you would like to support
          CodeOverUni's vision, please consider buying a product from our store
          <a href="pages/product.html"> HERE</a>. On top of our store, backlogs
          of Code Over Uni videos and blogs will be placed on this site as well.
          Feel free to explore!
        </p>
      </section>
    </main>
  )
}