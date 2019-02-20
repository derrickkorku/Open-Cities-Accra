import { Component } from "react";
import Link from "next/link";
import ReactMapGL, { Marker, Popup, NavigationControl } from "react-map-gl";
const navStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  padding: "20px"
};
import fetch from "isomorphic-unfetch";
const base_url = "https://ocav1-app.herokuapp.com" || "http://localhost:5000" 
class Buildings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buildingData:null,
      viewport: {
        width: "inherit",
        height: "inherit",
        latitude: 5.63629,
        longitude: -0.23600,
        zoom: 15.6,
        bearing: 9.6,
        
    
      },
      popupInfo: null,
      placeInfo: null
    };
    this.renderPopup = this.renderPopup.bind(this);
  }


  componentDidMount(){
    return  fetch(
      base_url + "/static/data/derrick.json", 
     ).then(buildingsRes=>buildingsRes.json() ).then(buildingData=>{this.setState({buildingData})
        })
   
     
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

  render() {
    return (
      <div>
        <div className="container-fluid mt-3">
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
              <h4 className="font-weight-bold">BUILDINGS-ALOGBOSHIE</h4>
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
          <div className="row">
            <div className="col-sm-4">
              <ul className="list-unstyled rounded bg-sidebar shadow">
                <div
                  className="btn-group btn-group-lg w-100 rounded"
                  role="group"
                >
                  <Link href="/buildings">
                    <a className="btn btn-active">Buildings</a>
                  </Link>
                  <Link href="/flood-history">
                    <a className="btn btn-n1">Flood History</a>
                  </Link>
                  <Link href="/drainage">
                    <a className="btn btn-n2">Drainage</a>
                  </Link>
                </div>

                <div className="py-2 px-2">
                  <div className="map-border my-3" style={{ height: "400px" }}>
                    Summary chart and legends here
                  </div>
                  <center>
                    <select className="form-control mb-3 text-center rounded">
                      <option>-- Select to Download --</option>
                      <option>All Buildings</option>
                      <option>All Data</option>
                    </select>
                  </center>
                </div>
              </ul>
              <center>
                <Link href="/contact">
                  <a className="btn btn-dark px-10">Contact</a>
                </Link>
              </center>
            </div>
            <div className="col-sm-8">
              <div className="map-border" style={{ height: "750px" }}>
                <ReactMapGL
                  mapboxApiAccessToken={
                    "pk.eyJ1Ijoid2lzZG9tMDA2MyIsImEiOiJjanI1aWg0cGQwZTByM3dtc3J1OHJ3MGNqIn0.yjtKpgtEmgCkCcLvpH_tJg"
                  }
                  {...this.state.viewport}
                  mapStyle="mapbox://styles/mapbox/streets-v9"
                  onViewportChange={viewport => this.setState({ viewport })}
                >
                  {this.state.buildingData && this.state.buildingData.features.map(value => {
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

                  <div className="nav" style={navStyle}>
                    <NavigationControl
                      onViewportChange={viewport => this.setState({ viewport })}
                    />
                  </div>
                  {this.renderPopup()}
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

export default Buildings;
