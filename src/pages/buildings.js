import { Component } from "react";
import Link from "next/link";
import ReactMapGL, { Popup, NavigationControl } from "react-map-gl";
import {fromJS} from 'immutable';
const navStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  padding: "20px"
};
import fetch from "isomorphic-unfetch";
const base_url = "https://ocav1-app.herokuapp.com" || "http://localhost:5000" 
//const base_url = "http://localhost:5000" || "https://ocav1-app.herokuapp.com" 
const mapStyle = fromJS({
  version: 8,
  sources: {
      building: {
          type: 'geojson',
          data:  base_url + "/static/data/alobgoshie-buildings.geojson", 
      }
  },
  layers: [
      {
          id: 'my-layer',
          source: 'building',
          type: "fill",
          'paint': {
       "fill-color":"blue"
            }
      
      }
  ]
});
class Buildings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buildingData:null,
      render:false,
      viewport: {
        width: "inherit",
        height: "inherit",
        latitude: 5.62620,
        longitude: -0.23250,
       
        zoom: 17.0
       

        
    
      },
      popupInfo: null,
      placeInfo: null
    };
    this.renderPopup = this.renderPopup.bind(this);
  }


  componentDidMount(){
this.setState({render:true})
mapboxgl.accessToken  = "pk.eyJ1Ijoid2lzZG9tMDA2MyIsImEiOiJjanI1aWg0cGQwZTByM3dtc3J1OHJ3MGNqIn0.yjtKpgtEmgCkCcLvpH_tJg";
   
     
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

    var map = this.state.render && new mapboxgl.Map({
      container: 'map',
      style:"mapbox://styles/mapbox/streets-v9",
      zoom: 17,
      center: [ -0.23250, 5.62620]     
      
      });

     this.state.render && map.addControl(new mapboxgl.NavigationControl())

    this.state.render && map.on("load", function () {
        // Add a layer showing the state polygons.
        map.addLayer({
        'id': 'buildings',
        'type': 'fill',
        'source': {
        'type': 'geojson',
        'data': base_url + "/static/data/alobgoshie-buildings.geojson"
        },
        'layout': {},
        'paint': {
          'fill-color': [
            'match',
            ['get', 'building'],
            'residential', '#088',
            'commercial', 'red',
            'commercial;residential', 'pink',
            'church', 'purple',
            "school","yellow",
            /* other */ 'green'
            ],
        'fill-opacity': 0.2
        }
        });


         
         

        // When a click event occurs on a feature in the states layer, open a popup at the
// location of the click, with description HTML from its properties.
map.on('click', 'buildings', function (e) {
  new mapboxgl.Popup()
  .setLngLat(e.lngLat)
  .setHTML(        `
  <table width="300">
  <tbody>
  ${
    e.features[0].properties["name"] && `<tr>
    <th>Name</th>
    <td style={{ paddingLeft: "5px" }}>
    ${e.features[0].properties["name"]}
    </td>
    </tr>` || ""
  }
    ${
      e.features[0].properties["addr:community"] && `<tr>
      <th>Community</th>
      <td style={{ paddingLeft: "5px" }}>
      ${e.features[0].properties["addr:community"]}
      </td>
      </tr>` || ""
    }

    ${
      e.features[0].properties["building:material"] && `<tr>
      <th>Building material</th>
      <td style={{ paddingLeft: "5px" }}>
      ${e.features[0].properties["building:material"]}
      </td>
      </tr>` || ""
    }
    ${
      e.features[0].properties["roof:material"] && `<tr>
      <th>Roof material</th>
      <td style={{ paddingLeft: "5px" }}>
      ${e.features[0].properties["roof:material"]}
      </td>
      </tr>` || ""
    }

  ${
    e.features[0].properties["addr:street"] && `<tr>
    <th>Street</th>
    <td style={{ paddingLeft: "5px" }}>
    ${e.features[0].properties["addr:street"]}
    </td>
    </tr>` || ""
  }

  ${
    e.features[0].properties["addr:city"] && `<tr>
    <th>City</th>
    <td style={{ paddingLeft: "5px" }}>
    ${e.features[0].properties["addr:city"]}
    </td>
    </tr>` || ""
  }


  ${
    e.features[0].properties["addr:suburb"] && `<tr>
    <th>Suburb</th>
    <td style={{ paddingLeft: "5px" }}>
    ${e.features[0].properties["addr:suburb"]}
    </td>
    </tr>` || ""
  }

  ${
    e.features[0].properties["addr:amenity"] && `<tr>
    <th>Amenity</th>
    <td style={{ paddingLeft: "5px" }}>
    ${e.features[0].properties["addr:amenity"]}
    </td>
    </tr>` || ""
  }


${
  e.features[0].properties["religion"] && `<tr>
  <th>Religion</th>
  <td style={{ paddingLeft: "5px" }}>
  ${e.features[0].properties["religion"]}
  </td>
  </tr>` || ""
}

${
  e.features[0].properties["building"] && `<tr>
  <th>Building</th>
  <td style={{ paddingLeft: "5px" }}>
  ${e.features[0].properties["building"]}
  </td>
  </tr>` || ""
}

${
  e.features[0].properties["denomination"] && `<tr>
  <th>Denomination</th>
  <td style={{ paddingLeft: "5px" }}>
  ${e.features[0].properties["denomination"]}
  </td>
  </tr>` || ""
}

${
  e.features[0].properties["source"] && `<tr>
  <th>Source</th>
  <td style={{ paddingLeft: "5px" }}>
  ${e.features[0].properties["source"]}
  </td>
  </tr>` || ""
}
    </tbody>
    </table>`
    )
  .addTo(map);
  });
   
  // Change the cursor to a pointer when the mouse is over the states layer.
  map.on('mouseenter', 'buildings', function () {
  map.getCanvas().style.cursor = 'pointer';
  });
   
  // Change it back to a pointer when it leaves.
  map.on('mouseleave', 'buildings', function () {
  map.getCanvas().style.cursor = '';
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
              <div id='map' class='dark'></div>
              <h4>Population</h4>
              <div id='state-legend' class='legend'>
<h4>Buildings</h4>
<div><span style={{backgroundColor:"#088"}}></span>Residential</div>
<div><span style={{backgroundColor:"red"}}></span>Commercial</div>
<div><span style={{backgroundColor:"pink"}} ></span>Commercial & Residential</div>
<div><span style={{backgroundColor:"purple"}} ></span>Church</div>
<div><span style={{backgroundColor:"yellow"}} ></span>School</div>

</div>
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

export default Buildings;
