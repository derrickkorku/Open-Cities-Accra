import { Component } from "react";
import Link from "next/link";
import { ResponsiveBar } from "@nivo/bar";
import Download from "../components/download"
const data = [
  {
    suburb: "Alogboshie",
    Residential: 71,
    ResidentialColor: "rgba(0, 136, 136, 0.3)",
    Commercial: 140,
    CommercialColor: "rgba(255,0,0, 0.3)",
    Church: 199,
    ChurchColor: "rgba(128, 0, 128, 0.3)",
    School: 136,
    SchoolColor: "rgba(255, 255, 0, 0.4)",
    Other: 181,
    OtherColor: "rgba(0, 128, 0, 0.4)"
  },
  {
    suburb: "Akweteman",
    Residential: 61,
    ResidentialColor: "rgba(0, 136, 136, 0.3)",
    Commercial: 143,
    CommercialColor: "rgba(255,0,0, 0.3)",
    Church: 63,
    ChurchColor: "rgba(128, 0, 128, 0.3)",
    School: 6,
    SchoolColor: "rgba(255, 255, 0, 0.4)",
    Other: 65,
    OtherColor: "rgba(0, 128, 0, 0.4)"
  },
  {
    suburb: "Alajo",
    Residential: 111,
    ResidentialColor: "rgba(0, 136, 136, 0.3)",
    Commercial: 51,
    CommercialColor: "rgba(255,0,0, 0.3)",
    Church: 44,
    ChurchColor: "rgba(128, 0, 128, 0.3)",
    School: 110,
    SchoolColor: "rgba(255, 255, 0, 0.4)",
    Other: 145,
    OtherColor: "rgba(0, 128, 0, 0.4)"
  },
  {
    suburb: "Nima",
    Residential: 133,
    ResidentialColor: "rgba(0, 136, 136, 0.3)",
    Commercial: 125,
    CommercialColor: "rgba(255,0,0, 0.3)",
    Church: 194,
    ChurchColor: "rgba(128, 0, 128, 0.3)",
    School: 92,
    SchoolColor: "rgba(255, 255, 0, 0.4)",
    Other: 124,
    OtherColor: "rgba(0, 128, 0, 0.4)"
  }
];
import ReactMapGL, { Popup, NavigationControl } from "react-map-gl";
import { fromJS } from "immutable";
const navStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  padding: "20px"
};
import fetch from "isomorphic-unfetch";
class Buildings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buildingData: null,
      render: false,
      file: null,
    };
  }

  componentDidMount() {
    this.setState({ render: true });
    mapboxgl.accessToken =
      "pk.eyJ1Ijoid2lzZG9tMDA2MyIsImEiOiJjanI1aWg0cGQwZTByM3dtc3J1OHJ3MGNqIn0.yjtKpgtEmgCkCcLvpH_tJg";
  }

  

  render() {
    var map =
      this.state.render &&
      new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v9",
        zoom: 17,
        center: [-0.2325, 5.6262]
      });

    this.state.render && map.addControl(new mapboxgl.NavigationControl());

    this.state.render &&
      map.on("load", function() {
        // Add a layer showing the state polygons.
        map.addLayer({
          id: "buildings",
          type: "fill",
          source: {
            type: "geojson",
            data: "/static/data/alobgoshie-buildings.geojson"
          },
          layout: {},
          paint: {
            "fill-color": [
              "match",
              ["get", "building"],
              "residential",
              "#088",
              "commercial",
              "red",
              "commercial;residential",
              "pink",
              "church",
              "purple",
              "school",
              "yellow",
              /* other */ "green"
            ],
            "fill-opacity": 0.3
          }
        });

        // When a click event occurs on a feature in the states layer, open a popup at the
        // location of the click, with description HTML from its properties.
        map.on("click", "buildings", function(e) {
          new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(
              `
  <table width="300">
  <tbody>
  ${(e.features[0].properties["name"] &&
    `<tr>
    <th>Name</th>
    <td style={{ paddingLeft: "5px" }}>
    ${e.features[0].properties["name"]}
    </td>
    </tr>`) ||
    ""}

  ${(e.features[0].properties["building:levels"] &&
    `<tr>
    <th>Building Level</th>
    <td style={{ paddingLeft: "5px" }}>
    ${e.features[0].properties["building:levels"]}
    </td>
    </tr>`) ||
    ""}
    ${(e.features[0].properties["addr:community"] &&
      `<tr>
      <th>Community</th>
      <td style={{ paddingLeft: "5px" }}>
      ${e.features[0].properties["addr:community"]}
      </td>
      </tr>`) ||
      ""}

    ${(e.features[0].properties["building:material"] &&
      `<tr>
      <th>Building material</th>
      <td style={{ paddingLeft: "5px" }}>
      ${e.features[0].properties["building:material"]}
      </td>
      </tr>`) ||
      ""}
    ${(e.features[0].properties["roof:material"] &&
      `<tr>
      <th>Roof material</th>
      <td style={{ paddingLeft: "5px" }}>
      ${e.features[0].properties["roof:material"]}
      </td>
      </tr>`) ||
      ""}

  ${(e.features[0].properties["addr:street"] &&
    `<tr>
    <th>Street</th>
    <td style={{ paddingLeft: "5px" }}>
    ${e.features[0].properties["addr:street"]}
    </td>
    </tr>`) ||
    ""}

  ${(e.features[0].properties["addr:city"] &&
    `<tr>
    <th>City</th>
    <td style={{ paddingLeft: "5px" }}>
    ${e.features[0].properties["addr:city"]}
    </td>
    </tr>`) ||
    ""}


  ${(e.features[0].properties["addr:suburb"] &&
    `<tr>
    <th>Suburb</th>
    <td style={{ paddingLeft: "5px" }}>
    ${e.features[0].properties["addr:suburb"]}
    </td>
    </tr>`) ||
    ""}

  ${(e.features[0].properties["addr:amenity"] &&
    `<tr>
    <th>Amenity</th>
    <td style={{ paddingLeft: "5px" }}>
    ${e.features[0].properties["addr:amenity"]}
    </td>
    </tr>`) ||
    ""}


${(e.features[0].properties["religion"] &&
  `<tr>
  <th>Religion</th>
  <td style={{ paddingLeft: "5px" }}>
  ${e.features[0].properties["religion"]}
  </td>
  </tr>`) ||
  ""}

${(e.features[0].properties["building"] &&
  `<tr>
  <th>Building</th>
  <td style={{ paddingLeft: "5px" }}>
  ${e.features[0].properties["building"]}
  </td>
  </tr>`) ||
  ""}

${(e.features[0].properties["denomination"] &&
  `<tr>
  <th>Denomination</th>
  <td style={{ paddingLeft: "5px" }}>
  ${e.features[0].properties["denomination"]}
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
        map.on("mouseenter", "buildings", function() {
          map.getCanvas().style.cursor = "pointer";
        });

        // Change it back to a pointer when it leaves.
        map.on("mouseleave", "buildings", function() {
          map.getCanvas().style.cursor = "";
        });
      });
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
                <div className="col-md-2" />
                <div className="col-sm-6">
                  <h4 className="font-weight-bold">BUILDINGS-ALOGBOSHIE</h4>
                </div>
                <div className="col-sm-4">
                  <select
                    className="form-control mb-3 mr-3 w-100 rounded"
                    disabled
                  >
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
                    <ResponsiveBar
                      data={data}
                      keys={[
                        "Residential",
                        "Commercial",
                        "Church",
                        "School",
                        "Other"
                      ]}
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
                        legend: "building type",
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
<Download/>
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
                <div id="map" class="dark" />
                <h4>Population</h4>
                <div id="state-legend" class="legend">
                  <h4>Buildings</h4>
                  <div>
                    <span
                      style={{ backgroundColor: "rgba(0, 136, 136, 0.3)" }}
                    />
                    Residential
                  </div>
                  <div>
                    <span style={{ backgroundColor: "rgba(255,0,0, 0.3)" }} />
                    Commercial
                  </div>
                  <div>
                    <span style={{ backgroundColor: "rgb(0, 0, 0, 0.5)" }} />
                    Commercial & Residential
                  </div>
                  <div>
                    <span
                      style={{ backgroundColor: "rgba(128, 0, 128, 0.3)" }}
                    />
                    Church
                  </div>
                  <div>
                    <span
                      style={{ backgroundColor: "rgba(255, 255, 0, 0.4)" }}
                    />
                    School
                  </div>
                  <div>
                    <span style={{ backgroundColor: "rgba(0, 128, 0, 0.4)" }} />
                    Other
                  </div>
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
                <li className="list-inline-item">
                  <Link href="https://www.hotosm.org/">
                    <a target="_blank" style={{ width: "800px !important" }}>
                      <img src="../static/img/hot.png" className="hot" />
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
