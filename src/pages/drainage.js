import { Component } from "react";
import Link from "next/link";
import ReactMapGL, { Marker, Popup, NavigationControl } from "react-map-gl";
import {fromJS} from 'immutable';
import fetch from "isomorphic-unfetch";
const base_url = "https://ocav1-app.herokuapp.com" || "http://localhost:5000" 
//const base_url = "http://localhost:5000" || "https://ocav1-app.herokuapp.com" 
const navStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  padding: "20px"
};


class Drainage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drainageData:null,
      render:false,
      viewport: {
        width: "inherit",
        height: "inherit",
        latitude: 5.6299636,
        longitude: -0.2302194,
        zoom: 16.1,
        bearing: 9.6,
        pitch: 60,
        opacity: 1,
        boxZoom: false
      }
    };
  }



  componentDidMount(){
this.setState({render:true})
mapboxgl.accessToken  = "pk.eyJ1Ijoid2lzZG9tMDA2MyIsImEiOiJjanI1aWg0cGQwZTByM3dtc3J1OHJ3MGNqIn0.yjtKpgtEmgCkCcLvpH_tJg";


   
  
        

  }

  render() {
    var map = this.state.render && new mapboxgl.Map({
      container: 'map',
      style:"mapbox://styles/mapbox/streets-v9",
      zoom: 17,
      center: [ -0.23250, 5.62620]     
      
      });

      this.state.render && map.on("load", function () {
          // Add a layer showing the state polygons.
          map.addLayer({
              'id': 'drainage',
              'type': 'line',
              'source': {
              'type': 'geojson',
              'data': base_url + "/static/data/alogboshie_waterways.geojson"
              },
              'paint': {
                      "line-color":"blue",
                      "line-width":3
                             }
              });
  
          map.on('click', 'states-layer', function (e) {
            window.alert("hello")
            // new mapboxgl.Popup()
            // .setLngLat(e.lngLat)
            // .setHTML(e.features[0].properties.name)
            // .addTo(map);
            });
  
            map.on('mouseenter', 'states-layer', function () {
              map.getCanvas().style.cursor = 'pointer';
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
              <h4 className="font-weight-bold">DRAINAGE-ALOGBOSHIE</h4>
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
                  <Link href="/drainage">
                    <a className="btn btn-active">Drainage</a>
                  </Link>
                  <Link href="/buildings">
                    <a className="btn btn-n1">Buildings</a>
                  </Link>
                  <Link href="/flood-history">
                    <a className="btn btn-n2">Flood History</a>
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
              <div className="map-border" style={{ height: "700px" }}>
              <div id="map"></div>
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
                <li className="list-inline-item"  >
                  <Link href="https://www.hotosm.org/">
                    <a target="_blank" style={{width:"800px !important"}}>
                      <img
                        src="../static/img/hot.png" 
                        className="hot"
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

export default Drainage;
