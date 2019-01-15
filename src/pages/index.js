import { Component } from "react";
import Link from "next/link";
class Index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="container mt-3">
          <div className="row">
            <div className="col-sm-3" style={{ marginTop: "0.8em" }}>
              <center>
                <Link href="/">
                  <a className="home-link">HOME</a>
                </Link>
              </center>
            </div>
            <div className="col-sm-9">
              <center>
                <select className="form-control mb-3 text-center w-50 rounded">
                  <option>-- Select Community --</option>
                  <option>Akweteyman</option>
                  <option>Alogboshie</option>
                  <option>Alajo</option>
                  <option>Nima</option>
                </select>
              </center>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3">
              <ul className="list-unstyled px-3 py-3 rounded bg-sidebar shadow">
                <li className="mb-3">
                  <input
                    type="search"
                    className="form-control rounded"
                    placeholder="Search location..."
                  />
                </li>
                <li className="mb-3">
                  <Link href="/buildings">
                    <a className="btn btn-lg btn-block btn-light rounded p-home-btn">
                      <i className="fas fa-home fa-2x fa-color" />
                      <br />
                      Building
                    </a>
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="/flood-history">
                    <a className="btn btn-lg btn-block btn-light rounded p-home-btn">
                      <i className="fab fa-fort-awesome-alt fa-2x fa-color" />
                      <br />
                      Flood History
                    </a>
                  </Link>
                </li>
                <li className="">
                  <Link href="/drainage">
                    <a className="btn btn-lg btn-block btn-lg btn-light rounded p-home-btn">
                      <i className="fab fa-schlix fa-2x fa-color" />
                      <br />
                      Drainage Points
                    </a>
                  </Link>
                </li>
              </ul>
              <Link href="/contact">
              <a  className="btn btn-dark btn-block">
                Contact
              </a>
              </Link>
            </div>
            <div className="col-sm-9">
              <div className="map-border" style={{ height: "600px" }}>
                Map content here
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container">
            <center>Powered by:</center>
            <div className="row justify-content-center">
              <ul className="list-inline py-2">
                <li className="list-inline-item">
                  <a href="http://mobilewebghana.org/" target="_blank">
                    <img
                      src="../static/img/partners/mwg.png"
                      className="partner"
                    />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.osmghana.org/" target="_blank">
                    <img
                      src="../static/img/partners/osmghana.png"
                      className="partner"
                    />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.hotosm.org/" target="_blank">
                    <img
                      src="../static/img/partners/hot.png"
                      className="partner"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Index;
