import { Component } from "react";
import Link from "next/link";
import ReactMapGL, { NavigationControl, Marker, Popup, } from "react-map-gl";
import {fromJS} from "immutable"
import fetch from "isomorphic-unfetch";
//const base_url ="https://ocav1-app.herokuapp.com" || "http://localhost:5000"  
const base_url = "http://localhost:5000" || "https://ocav1-app.herokuapp.com" 

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      floodData:null,
      buildingData:null,
      drainageData:null,
      render:false,
      viewport: {
        width: "inherit",
        height: "inherit",
        latitude: 5.62620,
        longitude: -0.23250,
       
        zoom: 17.0
      },
      popupInfo: null,
      floodPopupInfo:null,
      placeInfo: null,
      floodPlaceInfo:null
    };
  }

componentDidMount(){
    this.setState({render:true})
    mapboxgl.accessToken  = "pk.eyJ1Ijoid2lzZG9tMDA2MyIsImEiOiJjanI1aWg0cGQwZTByM3dtc3J1OHJ3MGNqIn0.yjtKpgtEmgCkCcLvpH_tJg"; 
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

    var map = this.state.render && new mapboxgl.Map({
      container: 'map',
      style:"mapbox://styles/mapbox/streets-v9",
      zoom: 17.3,
      center: [-0.23188090993107835, 5.6279210505577595]     
      
      });

     this.state.render && map.addControl(new mapboxgl.NavigationControl())
  
    this.state.render && map.on("load", function () {
        // Add a layer showing the state polygons.
        map.addLayer({
        'id': 'buildings',
        'type': 'fill',
        'source': {
        'type': 'geojson',
        'data': "/static/data/alobgoshie-buildings.geojson"
        },
        'layout': {},
        'paint': {
        'fill-color': '#088',
        'fill-opacity': 0.2,
        'fill-outline-color': 'red'
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

        map.addLayer({
          'id': 'drainage',
          'type': 'line',
          'source': {
          'type': 'geojson',
          'data': "/static/data/alogboshie_waterways.geojson"
          },
          'paint': {
                  "line-color":"blue",
                  "line-width":3
                         }
          });

               // When a click event occurs on a feature in the states layer, open a popup at the
// location of the click, with description HTML from its properties.
map.on('click', 'drainage', function (e) {
  new mapboxgl.Popup()
  .setLngLat(e.lngLat)
  .setHTML(        `
  <table width="350">
  <tbody>
  ${
    e.features[0].properties["width"] && `<tr>
    <th>Width</th>
    <td style={{ paddingLeft: "5px" }}>
    ${e.features[0].properties["width"]}
    </td>
    </tr>` || ""
  }
  ${
    e.features[0].properties["waterway"] && `<tr>
    <th>Waterway</th>
    <td style={{ paddingLeft: "5px" }}>
    ${e.features[0].properties["waterway"]}
    </td>
    </tr>` || ""
  }

  ${
    e.features[0].properties["depth"] && `<tr>
    <th>Depth</th>
    <td style={{ paddingLeft: "5px" }}>
    ${e.features[0].properties["depth"]}
    </td>
    </tr>` || ""
  }
    ${
      e.features[0].properties["drain:cover_type"] && `<tr>
      <th>Cover Type</th>
      <td style={{ paddingLeft: "5px" }}>
      ${e.features[0].properties["drain:cover_type"]}
      </td>
      </tr>` || ""
    }

    ${
      e.features[0].properties["drain:ele"] && `<tr>
      <th>Ele</th>
      <td style={{ paddingLeft: "5px" }}>
      ${e.features[0].properties["drain:ele"]}
      </td>
      </tr>` || ""
    }
    ${
      e.features[0].properties["drain:material"] && `<tr>
      <th>Drain material</th>
      <td style={{ paddingLeft: "5px" }}>
      ${e.features[0].properties["drain:material"]}
      </td>
      </tr>` || ""
    }

  ${
    e.features[0].properties["drain:material_smoothness"] && `<tr>
    <th>Material Smoothnes</th>
    <td style={{ paddingLeft: "5px" }}>
    ${e.features[0].properties["drain:material_smoothness"]}
    </td>
    </tr>` || ""
  }

  ${
    e.features[0].properties["drain:profile_covered"] && `<tr>
    <th>Profile Covered</th>
    <td style={{ paddingLeft: "5px" }}>
    ${e.features[0].properties["drain:profile_covered"]}
    </td>
    </tr>` || ""
  }


  ${
    e.features[0].properties["drain:profile_open"] && `<tr>
    <th>Profile Open</th>
    <td style={{ paddingLeft: "5px" }}>
    ${e.features[0].properties["drain:profile_open"]}
    </td>
    </tr>` || ""
  }

  ${
    e.features[0].properties["layer"] && `<tr>
    <th>Layer</th>
    <td style={{ paddingLeft: "5px" }}>
    ${e.features[0].properties["layer"]}
    </td>
    </tr>` || ""
  }


${
  e.features[0].properties["reference:feature"] && `<tr>
  <th>Reference Feature</th>
  <td style={{ paddingLeft: "5px" }}>
  ${e.features[0].properties["reference:feature"]}
  </td>
  </tr>` || ""
}

${
  e.features[0].properties["reference:feature_type"] && `<tr>
  <th>Reference Feature Type</th>
  <td style={{ paddingLeft: "5px" }}>
  ${e.features[0].properties["reference:feature_type"]}
  </td>
  </tr>` || ""
}
${
  e.features[0].properties["description"] && `<tr>
  <th>Description</th>
  <td style={{ paddingLeft: "5px" }}>
  ${e.features[0].properties["description"]}
  </td>
  </tr>` || ""
}

${
  e.features[0].properties["drain:point_feature"] && `<tr>
  <th>Point Feature</th>
  <td style={{ paddingLeft: "5px" }}>
  ${e.features[0].properties["drain:point_feature"]}
  </td>
  </tr>` || ""
}

${
  e.features[0].properties["tunnel"] && `<tr>
  <th>Point Feature</th>
  <td style={{ paddingLeft: "5px" }}>
  ${e.features[0].properties["tunnel"]}
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
  map.on('mouseenter', 'drainage', function () {
  map.getCanvas().style.cursor = 'pointer';
  });
   
  // Change it back to a pointer when it leaves.
  map.on('mouseleave', 'drainage', function () {
  map.getCanvas().style.cursor = '';
  });

  map.addLayer({
    'id': 'alogboshie-flood',
    'type': 'circle',
    'source': {
    'type': 'geojson',
    'data': "/static/data/alogboshie_flod_history.geojson"
    },
    'paint': {
            "circle-color":"gray",
            "circle-radius":10
                   }
    });

    map.on('click', 'alogboshie-flood', function (e) {
      new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML(        `
      <table width="350">
      <tbody>
      ${
        e.features[0].properties["experienced_flood"] && `<tr>
        <th>experienced flood</th>
        <td style={{ paddingLeft: "5px" }}>
        ${e.features[0].properties["experienced_flood"]}
        </td>
        </tr>` || ""
      }
      ${
        e.features[0].properties["flood_history.flood_cause"] && `<tr>
        <th>Flood Cause</th>
        <td style={{ paddingLeft: "5px" }}>
        ${e.features[0].properties["flood_history.flood_cause"]}
        </td>
        </tr>` || ""
      }
    
      ${
        e.features[0].properties["flood_history.flood_event.flood_year"] && `<tr>
        <th>Flood Year</th>
        <td style={{ paddingLeft: "5px" }}>
        ${e.features[0].properties["flood_history.flood_event.flood_year"]}
        </td>
        </tr>` || ""
      }
        ${
          e.features[0].properties["dwelling_type"] && `<tr>
          <th>Dwelling Type</th>
          <td style={{ paddingLeft: "5px" }}>
          ${e.features[0].properties["dwelling_type"]}
          </td>
          </tr>` || ""
        }

        ${
          e.features[0].properties["building_use"] && `<tr>
          <th>Building Use</th>
          <td style={{ paddingLeft: "5px" }}>
          ${e.features[0].properties["building_use"]}
          </td>
          </tr>` || ""
        }

        ${
          e.features[0].properties["years_in_house"] && `<tr>
          <th>Years in house </Useth>
          <td style={{ paddingLeft: "5px" }}>
          ${e.features[0].properties["years_in_house"]}
          </td>
          </tr>` || ""
        }
    
        ${
          e.features[0].properties["flood_history.flood_depth"] && `<tr>
          <th>Flood Depth</th>
          <td style={{ paddingLeft: "5px" }}>
          ${e.features[0].properties["flood_history.flood_depth"]}
          </td>
          </tr>` || ""
        }
        ${
          e.features[0].properties["address.landmark"] && `<tr>
          <th>Land Mark</th>
          <td style={{ paddingLeft: "5px" }}>
          ${e.features[0].properties["address.landmark"]}
          </td>
          </tr>` || ""
        }
    
      ${
        e.features[0].properties["moved_house"] && `<tr>
        <th>Moved House</th>
        <td style={{ paddingLeft: "5px" }}>
        ${e.features[0].properties["moved_house"]}
        </td>
        </tr>` || ""
      }
    
      ${
        e.features[0].properties["moved_year"] && `<tr>
        <th>Moved Year</th>
        <td style={{ paddingLeft: "5px" }}>
        ${e.features[0].properties["moved_year"]}
        </td>
        </tr>` || ""
      }
        </tbody>
        </table>`
        )
      .addTo(map);
      });
       
      // Change the cursor to a pointer when the mouse is over the states layer.
      map.on('mouseenter', 'alogboshie-flood', function () {
      map.getCanvas().style.cursor = 'pointer';
      });
       
      // Change it back to a pointer when it leaves.
      map.on('mouseleave', 'alogboshie-flood', function () {
      map.getCanvas().style.cursor = '';
      });

      
    })
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
              <div id="map"></div>
              <div id='state-legend' class='legend'>
<h4></h4>
<div><span style={{backgroundColor:"#088"}}></span>Buildings</div>
<div><span style={{backgroundColor:"blue"}}></span>Drainage</div>
<div><span style={{backgroundColor:"gray"}} ></span>Flood History</div>
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

export default Index;
