import '../styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navigation() {
    return(
      <>
        <nav className="navbar navbar-expand-lg navbar-light navbar-bkg py-4">
            <div className="container-fluid d-flex justify-content-end">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul className="navbar-nav">
                  <li className="nav-item mx-2">
                    <a className="nav-items" href="/">Home</a>
                  </li>

                  <li className="nav-item mx-2">
                    <a className="nav-items" href="/services">Services</a>
                  </li>

                  <li className="nav-item mx-2">
                    <a className="nav-items" href="/gallery">Gallery</a>
                  </li>

                  <li className="nav-item mx-2">
                    <a className="nav-items" href="/customers">Customers</a>
                  </li>

                  <li className="nav-item mx-2">
                    <a className="nav-items" href="/testimonials">Client Testimonials</a>
                  </li>

                  <li className="nav-item mx-2">
                    <a className="nav-items" href="/charity">Sponsorship & Charity Work</a>
                  </li>

                  <li className="nav-item mx-2">
                    <a className="nav-items" href="/contact">Contact</a>
                  </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
}