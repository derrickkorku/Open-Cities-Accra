import Link from "next/link";
import {Component} from "react"
import ReactMapGL, { Marker, Popup, NavigationControl } from "react-map-gl";
const navStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  padding: "20px"
};
import fetch from "isomorphic-unfetch";
const base_url = "https://ocav1-app.herokuapp.com" || "http://localhost:5000" 
//const base_url = "http://localhost:5000" || "https://ocav1-app.herokuapp.com" 
class FloodHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      floodData:null,
      render:false,
      viewport: {
        width: "inherit",
        height: "inherit",
        latitude: 5.6249636,
        longitude: -0.2332194,
        zoom: 14.6,

      },
      popupInfo: null,
      placeInfo: null
    };
    this.renderPopup = this.renderPopup.bind(this)
  }



  componentDidMount(){
    this.setState({render:true})
  //  return  fetch(
  //     base_url + "/static/data/alogboshie_flod_history.geojson"
  //   ).then(floodRes=>floodRes.json() ).then(floodData=>{this.setState({floodData})
  //      })
  
    
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
          <table width="400">
            <tbody>
              <tr>
                <th>experienced_flood</th>
                <td style={{ paddingLeft: "5px" }}>
                  {this.state.placeInfo.experienced_flood}
                </td>
              </tr>
              <tr>
                <th tyle={{ width: "80px" }}>suburb</th>
                <td style={{ paddingLeft: "5px" }}>
                  {this.state.placeInfo.suburb}
                </td>
              </tr>
              <tr>
                <th>flood_cause</th>
                <td style={{ paddingLeft: "5px" }}>
                  {this.state.placeInfo.flood_cause}
                </td>
              </tr>
              <tr>
                <th>flood_year</th>
                <td style={{ paddingLeft: "5px" }}>
                  {this.state.placeInfo.flood_year}
                </td>
              </tr>
              <tr>
                <th>dwelling_type</th>
                <td style={{ paddingLeft: "5px" }}>
                  {this.state.placeInfo.dwelling_type}
                </td>
              </tr>
              <tr>
                <th>flood_depth</th>
                <td style={{ paddingLeft: "5px" }}>
                  {this.state.placeInfo.flood_depth}
                </td>
              </tr>
              <tr>
                <th>landmark</th>
                <td style={{ paddingLeft: "5px" }}>
                  {this.state.placeInfo.landmark}
                </td>
              </tr>
              <tr>
                <th>moved_house</th>
                <td style={{ paddingLeft: "5px" }}>
                  {this.state.placeInfo.moved_house}
                </td>
              </tr>
            {
                this.state.placeInfo.moved_house ==="yes" &&
                <tr>
                <th>moved_year</th>
                <td style={{ paddingLeft: "5px" }}>
                  {this.state.placeInfo.moved_year}
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

    const myMap =this.state.render && this.mapRef.getMap()
    this.state.render && myMap.on("load", function () {
        // Add a layer showing the state polygons.
        myMap.addLayer({
        'id': 'states-layer',
        'type': 'circle',
        'source': {
        'type': 'geojson',
        'data': base_url + "/static/data/alogboshie_flod_history.geojson"
        },
        'paint': {
                "circle-color":"gray",
                "circle-radius":10
                       }
        });

        myMap.on('click', 'states-layer', function (e) {
          window.alert("hello")
          // new mapboxgl.Popup()
          // .setLngLat(e.lngLat)
          // .setHTML(e.features[0].properties.name)
          // .addTo(map);
          });

          myMap.on('mouseenter', 'states-layer', function () {
            myMap.getCanvas().style.cursor = 'pointer';
            });
      
    })
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
              <h4 className="font-weight-bold">FLOOD HISTORY-ALOGBOSHIE</h4>
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
                  <Link href="/flood-history">
                    <a className="btn btn-active">Flood History</a>
                  </Link>
                  <Link href="/drainage">
                    <a className="btn btn-n1">Drainage</a>
                  </Link>
                  <Link href="/buildings">
                    <a className="btn btn-n2">Buildings</a>
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
              ref={ map => this.mapRef = map }
              mapboxApiAccessToken={
                "pk.eyJ1Ijoid2lzZG9tMDA2MyIsImEiOiJjanI1aWg0cGQwZTByM3dtc3J1OHJ3MGNqIn0.yjtKpgtEmgCkCcLvpH_tJg"
              }
              {...this.state.viewport}
               mapStyle="mapbox://styles/mapbox/streets-v9"
                  onViewportChange={viewport => this.setState({ viewport })}
                >
                {this.state.floodData && this.state.floodData.features.map((value, index)=>{
                                        return (
                                          <Marker
                                            latitude={value.geometry.coordinates[1]}
                                            longitude={value.geometry.coordinates[0]}
                                            key={index}
                                          >
                                            <img
                                              src="../static/img/flood.png"
                                              width="17"
                                              height="15"
                                              style={{backgroundColor:"gray"}}
                                              onClick={() => {
                                              
                                                this.setState({
                                                  popupInfo: {
                                                    state: {
                                                      longitude: value.geometry.coordinates[0],
                                                      latitude: value.geometry.coordinates[1]
                                                    }
                                                  },
                                                  placeInfo: {
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

export default FloodHistory;
