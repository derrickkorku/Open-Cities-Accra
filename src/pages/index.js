import { Component } from "react";
import Link from "next/link";
import ReactMapGL, { NavigationControl, Marker, Popup } from "react-map-gl";
const navStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  padding: "20px"
};
import fetch from "isomorphic-unfetch";
const base_url = "https://ocav1-app.herokuapp.com" || "http://localhost:5000" 

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: "inherit",
        height: "inherit",
        latitude: 5.63589,
        longitude: -0.23602,
        zoom: 15.6
      },
      popupInfo: null,
      floodPopupInfo:null,
      placeInfo: null,
      floodPlaceInfo:null
    };
    this.renderPopup = this.renderPopup.bind(this);
  }

  static async getInitialProps() {
    const drainageRes = await fetch(
      base_url + "/static/data/alogboshie_waterways.geojson"
    );
    const drainageData = await drainageRes.json();
    const buildingsRes = await fetch(base_url + "/static/data/derrick.json");
    const buildingData = await buildingsRes.json();

    const floodRes = await fetch(
      base_url + "/static/data/alogboshie_flod_history.geojson"
    );
    const floodData = await floodRes.json();
    // console.log(InduestryData);
    return { buildingData, drainageData, floodData };
  }

  renderPopup() {
    console.log(this.state.placeInfo);
    return (
      this.state.popupInfo && (
        <Popup
          tipSize={10}
          anchor="bottom-right"
          longitude={this.state.popupInfo.state.longitude}
          latitude={this.state.popupInfo.state.latitude}
          onClose={() => this.setState({ popupInfo: null })}
          closeOnClick={true}
        >
          <table width="300">
            <tbody>
              <tr>
                <th>Community</th>
                <td style={{ paddingLeft: "5px" }}>
                  {this.state.placeInfo.community}
                </td>
              </tr>
              <tr>
                <th tyle={{ width: "80px" }}>Building material</th>
                <td style={{ paddingLeft: "5px" }}>
                  {this.state.placeInfo.building_material}
                </td>
              </tr>
              <tr>
                <th>Roof material</th>
                <td style={{ paddingLeft: "5px" }}>
                  {this.state.placeInfo.roof_material}
                </td>
              </tr>
              <tr>
                <th>Building</th>
                <td style={{ paddingLeft: "5px" }}>
                  {this.state.placeInfo.building}
                </td>
              </tr>
              <tr>
                <th>suburb</th>
                <td style={{ paddingLeft: "5px" }}>
                  {this.state.placeInfo.suburb}
                </td>
              </tr>
              <tr>
                <th>street</th>
                <td style={{ paddingLeft: "5px" }}>
                  {this.state.placeInfo.street}
                </td>
              </tr>
              <tr>
                <th>City</th>
                <td style={{ paddingLeft: "5px" }}>
                  {this.state.placeInfo.city}
                </td>
              </tr>
            </tbody>
          </table>
        </Popup>
      )
    );
  }

  renderFloodPopup() {
    
    return (
      this.state.floodPopupInfo && (
        <Popup
          tipSize={10}
          anchor="bottom-right"
          longitude={this.state.floodPopupInfo.state.longitude}
          latitude={this.state.floodPopupInfo.state.latitude}
          onClose={() => this.setState({ floodPopupInfo: null })}
          closeOnClick={true}
        >
          <table width="400">
            <tbody>
              <tr>
                <th>experienced_flood</th>
                <td style={{ paddingLeft: "5px" }}>
                  {this.state.floodPlaceInfo.experienced_flood}
                </td>
              </tr>
              <tr>
                <th tyle={{ width: "80px" }}>suburb</th>
                <td style={{ paddingLeft: "5px" }}>
                  {this.state.floodPlaceInfo.suburb}
                </td>
              </tr>
              <tr>
                <th>flood_cause</th>
                <td style={{ paddingLeft: "5px" }}>
                  {this.state.floodPlaceInfo.flood_cause}
                </td>
              </tr>
              <tr>
                <th>flood_year</th>
                <td style={{ paddingLeft: "5px" }}>
                  {this.state.floodPlaceInfo.flood_year}
                </td>
              </tr>
              <tr>
                <th>dwelling_type</th>
                <td style={{ paddingLeft: "5px" }}>
                  {this.state.floodPlaceInfo.dwelling_type}
                </td>
              </tr>
              <tr>
                <th>flood_depth</th>
                <td style={{ paddingLeft: "5px" }}>
                  {this.state.floodPlaceInfo.flood_depth}
                </td>
              </tr>
              <tr>
                <th>landmark</th>
                <td style={{ paddingLeft: "5px" }}>
                  {this.state.floodPlaceInfo.landmark}
                </td>
              </tr>
              <tr>
                <th>moved_house</th>
                <td style={{ paddingLeft: "5px" }}>
                  {this.state.floodPlaceInfo.moved_house}
                </td>
              </tr>
            {
                this.state.floodPlaceInfo.moved_house ==="yes" &&
                <tr>
                <th>moved_year</th>
                <td style={{ paddingLeft: "5px" }}>
                  {this.state.floodPlaceInfo.moved_year}
                </td>
              </tr>
              }

            </tbody>
          </table>
        </Popup>
      )
    );
  }

  render() {
    return (
      <div>
        <div className="container-fluid mt-3 mr-10 ml-10">
          <div className="row">
            <div className="col-sm-3" style={{ marginTop: "0.8em" }}>
              <center>
                <Link href="/">
                  <a className="home-link">HOME</a>
                </Link>
              </center>
            </div>
            <div className="col-sm-9">
            <div className="row">
            <div className="col-md-2"></div>
            <div className="col-sm-6">
              <h4 className="font-weight-bold">ALOGBOSHIE</h4>
              </div>
              <div className="col-sm-4">
         
                <select className="form-control mb-3 mr-3 w-100 rounded" disabled>
                  <option>-- Select Community --</option>
                  <option>Akweteyman</option>
                  <option selected>Alogboshie</option>
                  <option>Alajo</option>
                  <option>Nima</option>
                </select>
          
           
              </div>
              </div>
            </div>
          </div>
          <div className="row index-pg">
            <div className="col-sm-3">
              <ul className="list-unstyled px-3 py-3 rounded bg-sidebar shadow">
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
              <div className="map-border" style={{ height: "700px" }}>
                <ReactMapGL
                  mapboxApiAccessToken={
                    "pk.eyJ1Ijoid2lzZG9tMDA2MyIsImEiOiJjanI1aWg0cGQwZTByM3dtc3J1OHJ3MGNqIn0.yjtKpgtEmgCkCcLvpH_tJg"
                  }
                  {...this.state.viewport}
                  mapStyle="mapbox://styles/mapbox/streets-v9"
                  onViewportChange={viewport => this.setState({ viewport })}
                >
                  {this.props.buildingData.features.map(value => {
                    return value.geometry.coordinates.map((val, index) => {
                      return (
                        <Marker
                          latitude={val[index][1]}
                          longitude={val[index][0]}
                          key={index}
                        >
                          <img
                            src="../static/img/home.png"
                         
                            width="20"
                            height="20"
                            onClick={() => {
                              console.log("hhhheheheheh");
                              this.setState({
                                popupInfo: {
                                  state: {
                                    longitude: val[index][0],
                                    latitude: val[index][1]
                                  }
                                },
                                placeInfo: {
                                  community: value.properties["addr:community"],
                                  building_material:
                                    value.properties["building:material"] ||
                                    null,
                                  roof_material:
                                    value.properties["roof:material"] || null,
                                    street: value.properties["addr:street"] || null,
                                    suburb:value.properties["addr:suburb"] || null,
                                    building:value.properties["building"] || null,
                                    city:value.properties["addr:city"] || null


                                }
                              });
                            }}
                          />
                        </Marker>
                      );
                    });
                  })}

{this.props.drainageData.features.map(value => {
                    return value.geometry.coordinates.map((val, index) => {
                      return (
                        <Marker
                          latitude={val[1]}
                          longitude={val[0]}
                          key={index}
                        >
                          <img
                            src="../static/img/river.png"
                            width="17"
                            height="17"

                          />
                        </Marker>
                      );
                    });
                  })}

{this.props.floodData.features.map((value, index)=>{
                                        return (
                                          <Marker
                                            latitude={value.geometry.coordinates[1]}
                                            longitude={value.geometry.coordinates[0]}
                                            key={index}
                                          >
                                            <img
                                              src="../static/img/flood.png"
                                              style={{backgroundColor:"gray"}}
                                              width="17"
                                              height="15"
                                              onClick={() => {
                                              
                                                this.setState({
                                                  floodPopupInfo: {
                                                    state: {
                                                      longitude: value.geometry.coordinates[0],
                                                      latitude: value.geometry.coordinates[1]
                                                    }
                                                  },
                                                  floodPlaceInfo: {
                                                    experienced_flood: value.properties["experienced_flood"],
                                                    suburb:
                                                      value.properties["address.suburb"] ||
                                                      null,
                                                    flood_cause:
                                                      value.properties["flood_history.flood_cause"] || null,
                                                      flood_year:value.properties["flood_history.flood_event.flood_year"] || null,
                                                      dwelling_type:value.properties["dwelling_type"] || null,
                                                      flood_depth:value.properties["flood_history.flood_depth"]||null,
                                                      landmark:value.properties["address.landmark"] || null,
                                                      moved_house:value.properties["moved_house"] || null,
                                                      moved_year:value.properties["moved_year"] || null
                                                  }
                                                });
                                              }}
                                            />
                                          </Marker>
                                        )})}

                  <div className="nav" style={navStyle}>
                    <NavigationControl
                      onViewportChange={viewport => this.setState({ viewport })}
                    />
                  </div>
                  {this.renderPopup()}
                  {this.renderFloodPopup()}
                </ReactMapGL>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
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
