import Link from "next/link";
import { Component } from "react";
import { ResponsiveBar } from "@nivo/bar";
import Download from "../components/download";
import Footer from "../components/footer"


const data = [
  {
    suburb: "Alogboshie",
    "Knee deep": 2,
    "Knee deepColor": "rgb(0, 136, 136)",
    "Chest deep": 2,
    "Chest deepColor": "rgb(102, 102, 0)",
    "Waist deep": 1,
    "Waist deepColor": "rgb(255, 192, 203)",
    "Person height": 1,
    "Person heightColor": "rgb(128, 0, 128)",
    "Not measured": 17,
    "Not measuredColor": "rgb(128, 128, 128)"
  },
  // {
  //   suburb: "Akweteman",
  //   "Knee deep": 51,
  //   "Knee deepColor": "rgb(0, 136, 136)",
  //   "Chest deep": 59,
  //   "Chest deepColor": "rgb(102, 102, 0)",
  //   "Waist deep": 44,
  //   "Waist deepColor": "rgb(255, 192, 203)",
  //   "Person height": 90,
  //   "Person heightColor": "rgb(128, 0, 128)",
  //   "Not measured": 75,
  //   "Not measuredColor": "rgb(128, 128, 128)"
  // },
  // {
  //   suburb: "Alajo",
  //   "Knee deep": 101,
  //   "Knee deepColor": "rgb(0, 136, 136)",
  //   "Chest deep": 41,
  //   "Chest deepColor": "rgb(102, 102, 0)",
  //   "Waist deep": 64,
  //   "Waist deepColor": "rgb(255, 192, 203)",
  //   "Person height": 120,
  //   "Person heightColor": "rgb(128, 0, 128)",
  //   "Not measured": 115,
  //   "Not measuredColor": "rgb(128, 128, 128)"
  // },
  // {
  //   suburb: "Nima",
  //   "Knee deep": 91,
  //   "Knee deepColor": "rgb(0, 136, 136)",
  //   "Chest deep": 91,
  //   "Chest deepColor": "rgb(102, 102, 0)",
  //   "Waist deep": 44,
  //   "Waist deepColor": "rgb(255, 192, 203)",
  //   "Person height": 110,
  //   "Person heightColor": "rgb(128, 0, 128)",
  //   "Not measured": 145,
  //   "Not measuredColor": "rgb(128, 128, 128)"
  // }
];
class FloodHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      render: false
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
        zoom: 15.4,
        center: [-0.2325, 5.6299]
      });

    this.state.render && map.addControl(new mapboxgl.NavigationControl());

    this.state.render &&
      map.on("load", function() {
        // Add a layer showing the state polygons.
        map.addLayer({
          id: "flood",
          type: "circle",
          source: {
            type: "geojson",
            data: "/static/data/alogboshie_flod_history .geojson"
          },
          paint: {
            "circle-color": [
              "match",
              ["get", "flood_history.flood_depth"],
              "Keen_deep_(30-50CM)",
              "rgb(0, 136, 136)",
              "Chest_deep_(1-1.5M)",
              "rgb(102, 102, 0)",
              "Waist_deep_(60cm-1m)",
              "rgb(255, 192, 203)",
              "Person_height_(1.5-2M)",
              "rgb(128, 0, 128)",
              /* other */ "rgb(128, 128, 128)"
            ],
            "circle-radius": 10
          }
        });

        map.on("click", "flood", function(e) {
          new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(
              `
          <table width="350">
          <tbody>
          ${(e.features[0].properties["experienced_flood"] &&
            `<tr>
            <th>experienced flood</th>
            <td style={{ paddingLeft: "5px" }}>
            ${e.features[0].properties["experienced_flood"]}
            </td>
            </tr>`) ||
            ""}
          ${(e.features[0].properties["flood_history.flood_cause"] &&
            `<tr>
            <th>Flood Cause</th>
            <td style={{ paddingLeft: "5px" }}>
            ${e.features[0].properties["flood_history.flood_cause"]}
            </td>
            </tr>`) ||
            ""}
        
          ${(e.features[0].properties["flood_history.flood_event.flood_year"] &&
            `<tr>
            <th>Flood Year</th>
            <td style={{ paddingLeft: "5px" }}>
            ${e.features[0].properties["flood_history.flood_event.flood_year"]}
            </td>
            </tr>`) ||
            ""}
            ${(e.features[0].properties["dwelling_type"] &&
              `<tr>
              <th>Dwelling Type</th>
              <td style={{ paddingLeft: "5px" }}>
              ${e.features[0].properties["dwelling_type"]}
              </td>
              </tr>`) ||
              ""}

            ${(e.features[0].properties["building_use"] &&
              `<tr>
              <th>Building Use</th>
              <td style={{ paddingLeft: "5px" }}>
              ${e.features[0].properties["building_use"]}
              </td>
              </tr>`) ||
              ""}

            ${(e.features[0].properties["years_in_house"] &&
              `<tr>
              <th>Years in house </Useth>
              <td style={{ paddingLeft: "5px" }}>
              ${e.features[0].properties["years_in_house"]}
              </td>
              </tr>`) ||
              ""}
        
            ${(e.features[0].properties["flood_history.flood_depth"] &&
              `<tr>
              <th>Flood Depth</th>
              <td style={{ paddingLeft: "5px" }}>
              ${e.features[0].properties["flood_history.flood_depth"]}
              </td>
              </tr>`) ||
              ""}
            ${(e.features[0].properties["address.landmark"] &&
              `<tr>
              <th>Land Mark</th>
              <td style={{ paddingLeft: "5px" }}>
              ${e.features[0].properties["address.landmark"]}
              </td>
              </tr>`) ||
              ""}
        
          ${(e.features[0].properties["moved_house"] &&
            `<tr>
            <th>Moved House</th>
            <td style={{ paddingLeft: "5px" }}>
            ${e.features[0].properties["moved_house"]}
            </td>
            </tr>`) ||
            ""}
        
          ${(e.features[0].properties["moved_year"] &&
            `<tr>
            <th>Moved Year</th>
            <td style={{ paddingLeft: "5px" }}>
            ${e.features[0].properties["moved_year"]}
            </td>
            </tr>`) ||
            ""}
            </tbody>
            </table>`
            )
            .addTo(map);
        });

        // Change the cursor to a pointer when the mouse is over the states layer.
        map.on("mouseenter", "flood", function() {
          map.getCanvas().style.cursor = "pointer";
        });

        // Change it back to a pointer when it leaves.
        map.on("mouseleave", "flood", function() {
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
                  <a className="home-link">HOME</a>
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
                      Map Visualisation of flood history for Alogboshie,
                      Accra-Ghana
                    </small>
                  </h4>
                </div>
                <div className="col-sm-3">
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
                  <Link href="/flood-history">
                    <a className="btn btn-active">Flood History</a>
                  </Link>
                  <Link href="/drainage">
                    <a className="btn btn-n1">Drainage</a>
                  </Link>
                  <Link href="/buildings">
                    <a className="btn btn-n1">Buildings</a>
                  </Link>
                </div>

                <div className="info">
                On this page users are be able to view the flood history data collected in the areas of interest on the map. Here you can explore the history of flooding in the area and how deep the water level was. Users can also download flood history data as a .csv file.
                </div>

                <div className="py-2 px-2">
                  <div className="map-border my-3" style={{ height: "400px" }}>
                    <ResponsiveBar
                      data={data}
                      keys={[
                        "Knee deep",
                        "Waist deep",
                        "Chest deep",
                        "Person height",
                        "Not measured"
                      ]}
                      indexBy="suburb"
                      margin={{
                        top: 50,
                        right: 120,
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
                        legend: "Flood Depth",
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
                    <Download />
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
              <div className="map-border" style={{ height: "91vh" }}>
                <div id="map" />
                <h4>Population</h4>
                <div id="state-legend" class="legend">
                  <h4>Flood Depth</h4>
                  <div>
                    <span style={{ backgroundColor: "rgb(0, 136, 136)" }} />
                    Knee deep (30-50cm)
                  </div>
                  <div>
                    <span style={{ backgroundColor: "rgb(255, 192, 203)" }} />
                    Waist deep (60cm-100cm)
                  </div>
                  <div>
                    <span style={{ backgroundColor: "rgb(102, 102, 0)" }} />
                    Chest deep (100-150cm)
                  </div>

                  <div>
                    <span style={{ backgroundColor: "rgb(128, 0, 128)" }} />
                    Person height (150-200cm)
                  </div>
                  <div>
                    <span style={{ backgroundColor: "rgb(128, 128, 128)" }} />
                    Not measured
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
<Footer/>
      </div>
    );
  }
}

export default FloodHistory;
