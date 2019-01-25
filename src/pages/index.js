import { Component } from "react";
import Link from "next/link";
import ReactMapGL, { NavigationControl, Marker } from "react-map-gl";
const navStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  padding: "10px"
};
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: "inherit",
        height: "inherit",
        latitude: 5.63689,
        longitude: -0.23602,
        zoom: 12.0
      }
    };
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
                <a className="btn btn-dark btn-block">Contact</a>
              </Link>
            </div>
            <div className="col-sm-9">
              <div className="map-border" style={{ height: "600px" }}>
                <ReactMapGL
                  mapboxApiAccessToken={
                    "pk.eyJ1Ijoid2lzZG9tMDA2MyIsImEiOiJjanI1aWg0cGQwZTByM3dtc3J1OHJ3MGNqIn0.yjtKpgtEmgCkCcLvpH_tJg"
                  }
                  {...this.state.viewport}
                  mapStyle="mapbox://styles/mapbox/streets-v9"
                  onViewportChange={viewport => this.setState({ viewport })}
                >
                  {" "}
                  <div className="nav" style={navStyle}>
                    <NavigationControl
                      onViewportChange={viewport => this.setState({ viewport })}
                    />
                  </div>
                  <Marker latitude="5.53689" longitude="-0.21602">
                    <img
                      src="https://img.icons8.com/color/48/000000/marker.png"
                      width="10"
                      height="10"
                    />
                  </Marker>
                  <Marker latitude="5.63799" longitude="-0.23602">
                    <img
                      src="https://img.icons8.com/color/48/000000/marker.png"
                      width="10"
                      height="10"
                    />
                  </Marker>
                  <Marker latitude="5.63749" longitude="-0.23602">
                    <img
                      src="https://img.icons8.com/color/48/000000/marker.png"
                      width="10"
                      height="10"
                    />
                  </Marker>
                  <Marker latitude="5.61499" longitude="-0.25607">
                    <img
                      src="https://img.icons8.com/color/48/000000/marker.png"
                      width="10"
                      height="10"
                    />
                  </Marker>
                  <Marker latitude="5.63719" longitude="-0.26662">
                    <img
                      src="https://img.icons8.com/color/48/000000/marker.png"
                      width="10"
                      height="10"
                    />
                  </Marker>
                  <Marker latitude="5.69749" longitude="-0.23912">
                    <img
                      src="https://img.icons8.com/color/48/000000/marker.png"
                      width="10"
                      height="10"
                    />
                  </Marker>
                  <Marker latitude="5.63749" longitude="-0.23612">
                    <img
                      src="https://img.icons8.com/color/48/000000/marker.png"
                      width="10"
                      height="10"
                    />
                  </Marker>
                  <Marker latitude="5.63599" longitude="-0.23603">
                    <img
                      src="https://img.icons8.com/color/48/000000/marker.png"
                      width="10"
                      height="10"
                    />
                  </Marker>
                </ReactMapGL>
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
                  <Link href="http://mobilewebghana.org/">
                    <a target="_blank">
                      <img
                        src="../static/img/partners/mwg.png"
                        className="partner"
                      />
                    </a>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link href="https://www.osmghana.org/">
                    <a target="_blank">
                      <img
                        src="../static/img/partners/osmghana.png"
                        className="partner"
                      />
                    </a>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link href="https://www.hotosm.org/">
                    <a target="_blank">
                      <img
                        src="../static/img/partners/hot.png"
                        className="partner"
                      />
                    </a>
                  </Link>
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
