import { Component } from "react";
import Link from "next/link";
import { ResponsiveBar } from "@nivo/bar";
import AlogboshieDownload from "../components/download";
import AkwetemanDownload from "../components/aketeyman-downloads"
import AlajoDownload from "../components/alajo-download"
import Footer from "../components/footer"


const data = [
  {
    suburb: "Alogboshie",
    Drain: 185,
    DrainColor: "#0099cc",
    "Ditch": 6,
    "DitchColor": "#ff9999",
    "Stream": 9,
    "StreamColor": "#009900"
  },
  {
    suburb: "Akweteman",
    Drain: 402,
    DrainColor: "#0099cc",
    "Ditch": 22,
    "DitchColor": "#ff9999",
    "Stream": 1,
    "StreamColor": "#009900"
  },
  // {
  //   suburb: "Alajo",
  //   Covered: 41,
  //   CoveredColor: "rgb(0, 0, 255)",
  //   "Not Covered": 73,
  //   "Not CoveredColor": "rgb(255, 0, 0)",
  //   "Not Known": 83,
  //   "Not KnownColor": "rgb(0, 128, 0)"
  // },
  // {
  //   suburb: "Nima",
  //   Covered: 69,
  //   CoveredColor: "rgb(0, 0, 255)",
  //   "Not Covered": 23,
  //   "Not CoveredColor": "rgb(255, 0, 0)",
  //   "Not Known": 33,
  //   "Not KnownColor": "rgb(0, 128, 0)"
  // }
];

class Drainage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drainageData: null,
      render: false,
      waterways:"alogboshie_waterways.geojson",
      community:"Alogboshie",
      center:[-0.2325, 5.6262]

    };
  }

  componentDidMount() {
    this.setState({ render: true });
    mapboxgl.accessToken =
      "pk.eyJ1Ijoid2lzZG9tMDA2MyIsImEiOiJjanI1aWg0cGQwZTByM3dtc3J1OHJ3MGNqIn0.yjtKpgtEmgCkCcLvpH_tJg";
  }

  render() {
    let Download = this.state.community ==="Alogboshie"?<AlogboshieDownload/>:this.state.community==="Akweteyman"?<AkwetemanDownload/>:""
    let center = this.state.render && this.state.center
    var map =
      this.state.render &&
      new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v9",
        zoom: 16,
        center:center
      });

    this.state.render && map.addControl(new mapboxgl.NavigationControl());
  let dataurl = this.state.render && this.state.waterways


    this.state.render &&
      map.on("load", function() {
        // Add a layer showing the state polygons.
        map.addLayer({
          id: "drainage",
          type: "line",
          source: {
            type: "geojson",
            data: `/static/data/${dataurl}`
          },
          paint: {
            "line-color": [
              "match",
              ["get", "waterway"],
              "drain",
              "#0099cc",
              "ditch",
              "#ff9999",
              "stream",
              "#009900",
              "red"
            ],
            "line-width": 3
          }
        });

        // When a click event occurs on a feature in the states layer, open a popup at the
        // location of the click, with description HTML from its properties.
        map.on("click", "drainage", function(e) {
          new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(
              `
  <table width="350">
  <tbody>
  ${(e.features[0].properties["width"] &&
    `<tr>
    <th>Width</th>
    <td style={{ paddingLeft: "5px" }}>
    ${e.features[0].properties["width"]}
    </td>
    </tr>`) ||
    ""}
  ${(e.features[0].properties["waterway"] &&
    `<tr>
    <th>Waterway</th>
    <td style={{ paddingLeft: "5px" }}>
    ${e.features[0].properties["waterway"]}
    </td>
    </tr>`) ||
    ""}

  ${(e.features[0].properties["depth"] &&
    `<tr>
    <th>Depth</th>
    <td style={{ paddingLeft: "5px" }}>
    ${e.features[0].properties["depth"]}
    </td>
    </tr>`) ||
    ""}
    ${(e.features[0].properties["drain:cover_type"] &&
      `<tr>
      <th>Cover Type</th>
      <td style={{ paddingLeft: "5px" }}>
      ${e.features[0].properties["drain:cover_type"]}
      </td>
      </tr>`) ||
      ""}

    ${(e.features[0].properties["drain:ele"] &&
      `<tr>
      <th>Ele</th>
      <td style={{ paddingLeft: "5px" }}>
      ${e.features[0].properties["drain:ele"]}
      </td>
      </tr>`) ||
      ""}
    ${(e.features[0].properties["drain:material"] &&
      `<tr>
      <th>Drain material</th>
      <td style={{ paddingLeft: "5px" }}>
      ${e.features[0].properties["drain:material"]}
      </td>
      </tr>`) ||
      ""}

  ${(e.features[0].properties["drain:material_smoothness"] &&
    `<tr>
    <th>Material Smoothnes</th>
    <td style={{ paddingLeft: "5px" }}>
    ${e.features[0].properties["drain:material_smoothness"]}
    </td>
    </tr>`) ||
    ""}

  ${(e.features[0].properties["drain:profile_covered"] &&
    `<tr>
    <th>Profile Covered</th>
    <td style={{ paddingLeft: "5px" }}>
    ${e.features[0].properties["drain:profile_covered"]}
    </td>
    </tr>`) ||
    ""}


    ${(e.features[0].properties["covered"] &&
    `<tr>
    <th>Profile Covered</th>
    <td style={{ paddingLeft: "5px" }}>
    ${e.features[0].properties["covered"]}
    </td>
    </tr>`) ||
    ""}


  ${(e.features[0].properties["drain:profile_open"] &&
    `<tr>
    <th>Profile Open</th>
    <td style={{ paddingLeft: "5px" }}>
    ${e.features[0].properties["drain:profile_open"]}
    </td>
    </tr>`) ||
    ""}

  ${(e.features[0].properties["layer"] &&
    `<tr>
    <th>Layer</th>
    <td style={{ paddingLeft: "5px" }}>
    ${e.features[0].properties["layer"]}
    </td>
    </tr>`) ||
    ""}


${(e.features[0].properties["reference:feature"] &&
  `<tr>
  <th>Reference Feature</th>
  <td style={{ paddingLeft: "5px" }}>
  ${e.features[0].properties["reference:feature"]}
  </td>
  </tr>`) ||
  ""}

${(e.features[0].properties["reference:feature_type"] &&
  `<tr>
  <th>Reference Feature Type</th>
  <td style={{ paddingLeft: "5px" }}>
  ${e.features[0].properties["reference:feature_type"]}
  </td>
  </tr>`) ||
  ""}
${(e.features[0].properties["description"] &&
  `<tr>
  <th>Description</th>
  <td style={{ paddingLeft: "5px" }}>
  ${e.features[0].properties["description"]}
  </td>
  </tr>`) ||
  ""}

${(e.features[0].properties["drain:point_feature"] &&
  `<tr>
  <th>Point Feature</th>
  <td style={{ paddingLeft: "5px" }}>
  ${e.features[0].properties["drain:point_feature"]}
  </td>
  </tr>`) ||
  ""}

${(e.features[0].properties["tunnel"] &&
  `<tr>
  <th>Point Feature</th>
  <td style={{ paddingLeft: "5px" }}>
  ${e.features[0].properties["tunnel"]}
  </td>
  </tr>`) ||
  ""}


${(e.features[0].properties["source"] &&
  `<tr>
  <th>Source</th>
  <td style={{ paddingLeft: "5px" }}>
  ${e.features[0].properties["source"]}
  </td>
  </tr>`) ||
  ""}
    </tbody>
    </table>`
            )
            .addTo(map);
        });

        // Change the cursor to a pointer when the mouse is over the states layer.
        map.on("mouseenter", "drainage", function() {
          map.getCanvas().style.cursor = "pointer";
        });

        // Change it back to a pointer when it leaves.
        map.on("mouseleave", "drainage", function() {
          map.getCanvas().style.cursor = "";
        });
      });
    return (
      <div>
        <div className="container-fluid mt-3">
          <div className="row" style={{ minHeight: "6vh" }}>
            <div className="col-sm-3" style={{ marginTop: "0.8em" }}>
              <center>
                <Link href="/">
                  <a className="home-link home-heading">Open Cities Accra Data Visualizations</a>
                </Link>
              </center>
            </div>
            <div className="col-sm-9">
              <div className="row">
                <div className="col-md-2" />
                <div className="col-sm-7">
                  <h4>
                    {" "}
                    <small className="font-weight-bold">
                      Map Visualisation of drainage for {this.state.render && this.state.community}, Accra-Ghana
                    </small>
                  </h4>
                </div>
                <div className="col-sm-3">
                  <select
                    className="form-control mb-3 mr-3 w-100 rounded"
                    onChange={(e)=>{
                      
                      if(e.target.value==="Akweteyman"){
                        this.setState({
                          community:e.target.value,
                          waterways:"akweteyman_waterways.geojson",
                          center:[-0.2410443288160593, 5.6134037536466415]

                        })
                      }else{
                        if(e.target.value==="Alogboshie"){
                          this.setState({
                            community:e.target.value,
                            waterways:"alogboshie_waterways.geojson",
                            center:[-0.2325, 5.6262]
                          })
                        

                        }else{
                          return;
                        }
                      }
                    }}
                    
                  >
                    <option>-- Select Community --</option>
                    <option value="Alogboshie" selected>Alogboshie</option>
                    <option value="Akweteyman">Akweteyman</option>
                    {/* <option value="Alajo">Alajo</option>
                    <option value="Nima">Nima</option> */}
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
                    <a className="btn btn-n1">Buildings</a>
                  </Link>
                  <Link href="/flood-history">
                    <a className="btn btn-n1">Flood History</a>
                  </Link>
                  <Link href="/drainage">
                    <a className="btn btn-active">Drainage</a>
                  </Link>
                </div>

                <div className="info">
                This page displays drainage data (drain lines and points) on the map. Here data displayed is for the entire area of interest and the user can zoom in on the map to a particular place to see more details about the data displayed. On the left side of the page is a visualization of the drainage in the area of interest. Users can explore the drainage data by looking at the types of drains in the community.  Beneath that is the download button which allows users to download either drainage data alone or the entire dataset as a .GeoJSON file.
                </div>

                <div className="py-2 px-2">
                  <div className="map-border my-3" style={{ height: "400px" }}>
                    <ResponsiveBar
                      data={data}
                      keys={["Drain", "Ditch", "Stream"]}
                      indexBy="suburb"
                      margin={{
                        top: 50,
                        right: 110,
                        bottom: 50,
                        left: 50
                      }}
                      padding={0.3}
                      colors="nivo"
                      colorBy={function(e) {
                        var t = e.id;
                        return e.data["".concat(t, "Color")];
                      }}
                      defs={[
                        {
                          id: "dots",
                          type: "patternDots",
                          background: "inherit",
                          color: "({ id, data }) => data[`${id}Color`]",
                          size: 4,
                          padding: 1,
                          stagger: true
                        },
                        {
                          id: "lines",
                          type: "patternLines",
                          background: "inherit",
                          color: "#eed312",
                          rotation: -45,
                          lineWidth: 6,
                          spacing: 10
                        }
                      ]}
                      fill={[
                        {
                          match: {
                            id: "fries"
                          },
                          id: "dots"
                        },
                        {
                          match: {
                            id: "sandwich"
                          },
                          id: "lines"
                        }
                      ]}
                      borderColor="inherit:darker(1.6)"
                      axisTop={null}
                      axisRight={null}
                      axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: "suburb",
                        legendPosition: "middle",
                        legendOffset: 32
                      }}
                      axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: "Waterway",
                        legendPosition: "middle",
                        legendOffset: -40
                      }}
                      labelSkipWidth={12}
                      labelSkipHeight={12}
                      labelTextColor="inherit:darker(1.6)"
                      animate={true}
                      motionStiffness={90}
                      motionDamping={15}
                      legends={[
                        {
                          dataFrom: "keys",
                          anchor: "bottom-right",
                          direction: "column",
                          justify: false,
                          translateX: 120,
                          translateY: 0,
                          itemsSpacing: 2,
                          itemWidth: 100,
                          itemHeight: 20,
                          itemDirection: "left-to-right",
                          itemOpacity: 0.85,
                          symbolSize: 20,
                          effects: [
                            {
                              on: "hover",
                              style: {
                                itemOpacity: 1
                              }
                            }
                          ]
                        }
                      ]}
                    />
                  </div>
                  <center>
                    {Download }
                  </center>
                </div>
              </ul>
              <center>
                <Link href="/contact">
                  <a className="btn btn-dark px-10">Contact</a>
                </Link>
              </center>

              <Footer/>
            </div>
            <div className="col-sm-8">
              <div className="map-border" style={{ height: "90vh" }}>
                <div id="map" />
                <div id="state-legend" class="legend">
                  <h4>Waterway</h4>
                  <div>
                    <span style={{ backgroundColor: "#0099cc" }} />
                    Drain
                  </div>
                  <div>
                    <span style={{ backgroundColor: "#ff9999" }} />
                   Ditch
                  </div>
                  <div>
                    <span style={{ backgroundColor: "#009900" }} />
                    Stream
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Drainage;
