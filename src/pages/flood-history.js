import Link from "next/link";
import {Component} from "react"
import {ResponsiveBar} from "@nivo/bar"
const data = [
  {
    "suburb": "Alogboshie",
    "Keen_deep_(30-50CM)": 71,
    "Keen_deep_(30-50CMColor": "rgb(0, 136, 136)",
    "Chest_deep_(1-1.5M)": 140,
    "Chest_deep_(1-1.5M)Color": "rgb(102, 102, 0)",
    "Waist_deep_(60cm-1m)": 199,
    "Waist_deep_(60cm-1m)Color": "rgb(255, 192, 203)",
    "SchoPerson_height_(1.5-2M)": 136,
    "Person_height_(1.5-2M)Color": "rgb(128, 0, 128)",
    "Other": 181,
    "OtherColor": "rgb(128, 128, 128)",

  },
  {
    "suburb": "Akweteman",
    "Keen_deep_(30-50CM)": 61,
    "Keen_deep_(30-50CM)Color": "rgb(0, 136, 136)",
    "Chest_deep_(1-1.5M)": 143,
    "Chest_deep_(1-1.5M)Color": "rgb(102, 102, 0)",
    "Waist_deep_(60cm-1m)": 63,
    "Waist_deep_(60cm-1m)Color": "rgb(255, 192, 203)",
    "Person_height_(1.5-2M)": 6,
    "Person_height_(1.5-2M)Color": "rgb(128, 0, 128)",
    "Other": 65,
    "OtherColor": "rgb(128, 128, 128)",
  },
  {
    "suburb": "Alajo",
    "Keen_deep_(30-50CM)": 111,
    "Keen_deep_(30-50CM)Color": "rgb(0, 136, 136)",
    "Chest_deep_(1-1.5M)": 51,
    "Chest_deep_(1-1.5M)Color": "rgb(102, 102, 0)",
    "Waist_deep_(60cm-1m)": 44,
    "Waist_deep_(60cm-1m)Color": "rgb(255, 192, 203)",
    "Person_height_(1.5-2M)": 110,
    "Person_height_(1.5-2M)Color": "rgb(128, 0, 128)",
    "Other": 145,
    "OtherColor": "rgb(128, 128, 128)",
  },
  {
    "suburb": "Nima",
    "Keen_deep_(30-50CM)": 133,
    "Keen_deep_(30-50CM)Color": "rgb(0, 136, 136)",
    "Chest_deep_(1-1.5M)": 125,
    "Chest_deep_(1-1.5M)Color": "rgb(102, 102, 0)",
    "Waist_deep_(60cm-1m)": 194,
    "Waist_deep_(60cm-1m)Color": "rgb(255, 192, 203)",
    "Person_height_(1.5-2M)": 92,
    "Person_height_(1.5-2M)Color": "rgb(128, 0, 128)",
    "Other": 124,
    "OtherColor": "rgb(128, 128, 128)",
  }



]
class FloodHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
      render:false,

  }
}
  componentDidMount(){
    this.setState({render:true})
    mapboxgl.accessToken  = "pk.eyJ1Ijoid2lzZG9tMDA2MyIsImEiOiJjanI1aWg0cGQwZTByM3dtc3J1OHJ3MGNqIn0.yjtKpgtEmgCkCcLvpH_tJg";
  }

  render() {

  
    var map = this.state.render && new mapboxgl.Map({
      container: 'map',
      style:"mapbox://styles/mapbox/streets-v9",
      zoom: 15.4,
      center: [ -0.23250, 5.62990]     
      
      });

      this.state.render && map.addControl(new mapboxgl.NavigationControl())

      this.state.render && map.on("load", function () {
          // Add a layer showing the state polygons.
          map.addLayer({
              'id': 'flood',
              'type': 'circle',
              'source': {
              'type': 'geojson',
              'data': "/static/data/alogboshie_flod_history .geojson"
              },
              'paint': {
                'circle-color': [
                  'match',
                  ['get', 'flood_history.flood_depth'],
                  'Keen_deep_(30-50CM)', 'rgb(0, 136, 136)',
                  'Chest_deep_(1-1.5M)', 'rgb(102, 102, 0)',
                  'Waist_deep_(60cm-1m)', 'rgb(255, 192, 203)',
                  'Person_height_(1.5-2M)', 'rgb(128, 0, 128)',
                  /* other */ 'rgb(128, 128, 128)'
                  ],
              'circle-radius': 10
              }
              });

        map.on('click', 'flood', function (e) {
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
          map.on('mouseenter', 'flood', function () {
          map.getCanvas().style.cursor = 'pointer';
          });
           
          // Change it back to a pointer when it leaves.
          map.on('mouseleave', 'flood', function () {
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
                  <ResponsiveBar
        data={data}
        keys={[
            "Keen_deep_(30-50CM)",
            "Chest_deep_(1-1.5M)",
            "Waist_deep_(60cm-1m)",
            "Person_height_(1.5-2M)",
            "Other",
           
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
              <div className="map-border" style={{ height: "900px" }}>
               <div id="map">   
               </div>
               <h4>Population</h4>
              <div id='state-legend' class='legend'>
<h4>Flood Depth</h4>
<div><span style={{backgroundColor:"rgb(0, 136, 136)"}}></span>Keen_deep_(30-50CM)</div>
<div><span style={{backgroundColor:"rgb(102, 102, 0)"}}></span>Chest_deep_(1-1.5M)</div>
<div><span style={{backgroundColor:"rgb(255, 192, 203)"}} ></span>Waist_deep_(60cm-1m)</div>
<div><span style={{backgroundColor:"rgb(128, 0, 128)"}} ></span>Person_height_(1.5-2M)</div>
<div><span style={{backgroundColor:"rgb(128, 128, 128)"}} ></span>Other</div>
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

export default FloodHistory;
