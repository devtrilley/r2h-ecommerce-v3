// Footer Component

// Refactored Footer from v1 of site to it's own component
export default function Footer() {
  return (
    <footer className="page-footer blue">
      <div className="container">
        <div className="row">
          <div className="col s12 l6">
            <h5>Cover Over Uni</h5>
            <p>
              Code Over Uni is an educational brand dedicated to the quick and
              efficient teaching of computer science principles, in order to
              make a career in tech possible for anyone.
            </p>
          </div>
          <div className="col s12 l6">
            <h5>Socials</h5>
            <ul>
              <li>
                <a
                  href="https://www.youtube.com/@CodeOverUni/featured"
                  className="white-text"
                  target="_blank"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/?lang=en"
                  className="white-text"
                  target="_blank"
                >
                  X (Twitter)
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/tamsir-rilley-a45487330/"
                  className="white-text"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  className="white-text"
                  target="_blank"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright black">
        <div className="container center">&copy; 2024 CodeOverUni</div>
      </div>
    </footer>
  );
}
