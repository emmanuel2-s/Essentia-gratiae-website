import logo from "../assets/logo/logo3.png";
import "../App.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container-custom">
        <div className="footer-grid">
          <div>
            <img
              src={logo}
              alt="Aster Essentia Gratiae"
              className="w-52 object-cover"
            />
            <p>Rituals for stillness, grounding, and graceful return.</p>
          </div>

          <div>
            <h5>Begin</h5>
            <a href="#">All Rituals</a>
            <a href="#">Gift Sets</a>
            <a href="#">Best Sellers</a>
          </div>

          <div>
            <h5>Journal</h5>
            <a href="#">Affirmations</a>
            <a href="#">Meditations</a>
            <a href="#">Workshops</a>
          </div>

          <div>
            <h5>About</h5>
            <a href="#">Our Story</a>
            <a href="#">Philosophy</a>
            <a href="#">Sustainability</a>
          </div>

          <div>
            <h5>Newsletter</h5>
            <p>Be the first to receive new rituals.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
