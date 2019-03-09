import { Component } from "react";
import Link from "next/link";
import {ResponsiveBar} from "@nivo/bar"

const data = [
  {
    "suburb": "Alogboshie",
    "Yes": 69,
    "YesColor": "rgb(0, 0, 255)",
    "No": 23,
    "NoColor": "rgb(255, 0, 0)",
    "Not Known": 53,
    "Not KnownColor": "rgb(0, 128, 0)",

  },
  {
    "suburb": "Akweteman",
    "Yes": 61,
    "YesColor": "rgb(0, 0, 255)",
    "No": 43,
    "NoColor": "rgb(255, 0, 0)",
    "Not Known": 63,
    "Not KnownColor": "rgb(0, 128, 0)",

  },
  {
    "suburb": "Alajo",
    "Yes": 41,
    "YesColor": "rgb(0, 0, 255)",
    "No": 73,
    "NoColor": "rgb(255, 0, 0)",
    "Not Known": 83,
    "Not KnownColor": "rgb(0, 128, 0)",
  },
  {
    "suburb": "Nima",
    "Yes": 69,
    "YesColor": "rgb(0, 0, 255)",
    "No": 23,
    "NoColor": "rgb(255, 0, 0)",
    "Not Known": 33,
    "Not KnownColor": "rgb(0, 128, 0)",
  }



]


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

      this.state.render && map.addControl(new mapboxgl.NavigationControl())

      this.state.render && map.on("load", function () {
          // Add a layer showing the state polygons.
          map.addLayer({
              'id': 'drainage',
              'type': 'line',
              'source': {
              'type': 'geojson',
              'data': "/static/data/alogboshie_waterways.geojson"
              },
              'paint': {
                      "line-color":[
                        "match",
                        ["get", "drain:profile_covered"],
                        "no", "red",
                        "yes", "blue",
                        "green"

                      ],
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
                  <ResponsiveBar
        data={data}
        keys={[
            "Yes",
            "No",
            "Not Known",

           
        ]}
        indexBy="suburb"
        margin={{
            "top": 50,
            "right": 110,
            "bottom": 50,
            "left": 50
        }}
        padding={0.3}
        colors="nivo"
        colorBy={function(e){var t=e.id;return e.data["".concat(t,"Color")]}}
        defs={[
            {
                "id": "dots",
                "type": "patternDots",
                "background": "inherit",
                "color": '({ id, data }) => data[`${id}Color`]',
                "size": 4,
                "padding": 1,
                "stagger": true
            },
            {
                "id": "lines",
                "type": "patternLines",
                "background": "inherit",
                "color": "#eed312",
                "rotation": -45,
                "lineWidth": 6,
                "spacing": 10
            }
        ]}
        fill={[
            {
                "match": {
                    "id": "fries"
                },
                "id": "dots"
            },
            {
                "match": {
                    "id": "sandwich"
                },
                "id": "lines"
            }
        ]}
        borderColor="inherit:darker(1.6)"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            "tickSize": 5,
            "tickPadding": 5,
            "tickRotation": 0,
            "legend": "suburb",
            "legendPosition": "middle",
            "legendOffset": 32
        }}
        axisLeft={{
            "tickSize": 5,
            "tickPadding": 5,
            "tickRotation": 0,
            "legend": "building type",
            "legendPosition": "middle",
            "legendOffset": -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor="inherit:darker(1.6)"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        legends={[
            {
                "dataFrom": "keys",
                "anchor": "bottom-right",
                "direction": "column",
                "justify": false,
                "translateX": 120,
                "translateY": 0,
                "itemsSpacing": 2,
                "itemWidth": 100,
                "itemHeight": 20,
                "itemDirection": "left-to-right",
                "itemOpacity": 0.85,
                "symbolSize": 20,
                "effects": [
                    {
                        "on": "hover",
                        "style": {
                            "itemOpacity": 1
                        }
                    }
                ]
            }
        ]}
    />
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
              <div id='state-legend' class='legend'>
<h4>Drain Covered</h4>
<div><span style={{backgroundColor:"blue"}}></span>Yes</div>
<div><span style={{backgroundColor:"red"}}></span>No</div>
<div><span style={{backgroundColor:"green"}}></span>Not Known</div>


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

export default Drainage;
