import logo from "../assets/logo/aster-logo-removebg-preview.png";
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
              className="w-32 object-cover"
            />
            <p>Rituals for stillness, grounding, and graceful return.</p>
          </div>

          <div>
            <h5>About</h5>
            <a href="/aboutus">Our Story</a>
            <a href="/aboutus">Our Mission</a>
            <a href="/aboutus">Our Values</a>
            <a href="/aboutus">Beyond The Product</a>
          </div>

          <div>
            <h5>Journal</h5>
            <a href="#">Affirmations</a>
            <a href="#">Meditations</a>
            <a href="#">Workshops</a>
          </div>

          <div>
            <h5>Services</h5>
            <a href="#">All Rituals</a>
            <a href="#">Gift Sets</a>
            <a href="#">Best Sellers</a>
          </div>

          <div>
            <h5>Newsletter</h5>
            <p>Be the first to receive new rituals.</p>
            <form
              // onSubmit={handleSubmit}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 max-w-lg px-4 py-3 rounded bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#CBB48A]"
              />

              <button
                type="submit"
                className="px-4 py-3 rounded bg-[#7D8770] hover:bg-[#69745F] transition duration-300 font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div>
          <h3>Copyright </h3>
        </div>
      </div>
    </div>
  );
}
