import { Component } from "react";
import Link from "next/link";
import { ResponsiveBar } from "@nivo/bar";
import AlogboshieDownload from "../components/download";
import AkwetemanDownload from "../components/aketeyman-downloads";
import AlajoDownload from "../components/alajo-download";
import Footer from "../components/footer";
const data = [
  {
    suburb: "Alogboshie",
    Residential: 2672,
    ResidentialColor: "rgba(0, 136, 136, 0.3)",
    Commercial: 687,
    CommercialColor: "rgba(255,0,0, 0.3)",
    Church: 46,
    ChurchColor: "rgba(128, 0, 128, 0.3)",
    School: 45,
    SchoolColor: "rgba(255, 255, 0, 0.4)",
    Other: 9062,
    OtherColor: "rgba(0, 128, 0, 0.4)"
  },
  {
    suburb: "Akweteman",
    Residential: 0,
    ResidentialColor: "rgba(0, 136, 136, 0.3)",
    Commercial: 0,
    CommercialColor: "rgba(255,0,0, 0.3)",
    Church: 0,
    ChurchColor: "rgba(128, 0, 128, 0.3)",
    School: 0,
    SchoolColor: "rgba(255, 255, 0, 0.4)",
    Other: 7005,
    OtherColor: "rgba(0, 128, 0, 0.4)"
  },
  {
    suburb: "Alajo",
    Residential: 0,
    ResidentialColor: "rgba(0, 136, 136, 0.3)",
    Commercial: 3,
    CommercialColor: "rgba(255,0,0, 0.3)",
    Church: 3,
    ChurchColor: "rgba(128, 0, 128, 0.3)",
    School: 0,
    SchoolColor: "rgba(255, 255, 0, 0.4)",
    Other: 11006,
    OtherColor: "rgba(0, 128, 0, 0.4)"
  }
  // {
  //   suburb: "Nima",
  //   Residential: 133,
  //   ResidentialColor: "rgba(0, 136, 136, 0.3)",
  //   Commercial: 125,
  //   CommercialColor: "rgba(255,0,0, 0.3)",
  //   Church: 194,
  //   ChurchColor: "rgba(128, 0, 128, 0.3)",
  //   School: 92,
  //   SchoolColor: "rgba(255, 255, 0, 0.4)",
  //   Other: 124,
  //   OtherColor: "rgba(0, 128, 0, 0.4)"
  // }
];
class Buildings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      residential_status: true,
      commercial_status: true,
      resi_comm_status: true,
      church_status: true,
      school_status: true,
      construction_status: true,
      warehouse_status: true,
      industrial_status:true,
      shed_status:true,
      toilets_status:true,
      other_status: true,
      buildingData: null,
      render: false,
      buildings: "alobgoshie-buildings.geojson",
      community: "Alogboshie",
      center: [-0.2325, 5.6262]
    };
  }

  componentDidMount() {
    this.setState({ render: true });
    mapboxgl.accessToken =
      "pk.eyJ1Ijoid2lzZG9tMDA2MyIsImEiOiJjanI1aWg0cGQwZTByM3dtc3J1OHJ3MGNqIn0.yjtKpgtEmgCkCcLvpH_tJg";
  }

  render() {
    let Download =
      this.state.community === "Alogboshie" ? (
        <AlogboshieDownload />
      ) : this.state.community === "Akweteyman" ? (
        <AkwetemanDownload />
      ) : this.state.community === "Alajo" ? (
        <AlajoDownload />
      ) : (
        ""
      );

    let filterArr = [];
    this.state.residential_status && filterArr.push("residential");
    this.state.commercial_status && filterArr.push("commercial");
    this.state.resi_comm_status && filterArr.push("commercial;residential");
    this.state.church_status && filterArr.push("church");
    this.state.school_status && filterArr.push("school");
    this.state.warehouse_status && filterArr.push("warehouse");
    this.state.construction_status && filterArr.push("construction");
    this.state.industrial_status && filterArr.push("industrial")
    this.state.shed_status && filterArr.push("shed")
    this.state.toilets_status && filterArr.push("toilets")

    let otherfilterArr = [];
    !this.state.residential_status && otherfilterArr.push("residential");
    !this.state.commercial_status && otherfilterArr.push("commercial");
    !this.state.resi_comm_status && otherfilterArr.push("commercial;residential");
    !this.state.church_status && otherfilterArr.push("church");
    !this.state.school_status && otherfilterArr.push("school");
    !this.state.warehouse_status && otherfilterArr.push("warehouse");
    !this.state.construction_status && otherfilterArr.push("construction");
    !this.state.industrial_status && otherfilterArr.push("industrial")
    !this.state.shed_status && otherfilterArr.push("shed")
    !this.state.toilets_status && otherfilterArr.push("toilets")




    let center = this.state.render && this.state.center;

    var map =
      this.state.render &&
      new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v9",
        zoom: 17,
        center: center
      });

    this.state.render && map.addControl(new mapboxgl.NavigationControl());
    let dataurl = this.state.render && this.state.buildings;
let community = this.state.community
let other = this.state.other_status
    this.state.render &&
      map.on("load", function() {
        // Add a layer showing the state polygons.
        map.addLayer({
          id: "buildings",
          type: "fill",
          source: {
            type: "geojson",
            data: `/static/data/${dataurl}`
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
              "construction",
              "#005ce6",
              "warehouse",
              "rgb(128, 128, 255)",
              "industrial",
              "rgb(128, 128, 128)",
              "shed",
              "rgb(238, 130, 238)",
              "toilets",
              "rgb(0, 255, 0)",

              /* other */ "green"
            ],
            "fill-opacity": 0.3
          }
        });

   other && map.setFilter("buildings", ["!in", "building", ...otherfilterArr]);
   !other && map.setFilter("buildings", ["in", "building", ...filterArr]);


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
            <div
              className="col-sm-3 text-center"
              style={{ marginTop: "0.8em" }}
            >
              <center>
                <Link href="/">
                  <a className="home-link home-heading">
                    Open Cities Accra Data Visualizations
                  </a>
                </Link>
              </center>
            </div>
            <div className="col-sm-9">
              <div className="row" style={{ minHeight: "6vh" }}>
                <div className="col-sm-2" />
                <div className="col-sm-7">
                  <h4>
                    <small className="font-weight-bold">
                      Map Visualisation of buildings for{" "}
                      {this.state.render && this.state.community}, Accra-Ghana
                    </small>
                  </h4>
                </div>
                <div className="col-sm-3">
                  <select
                    className="form-control mb-3 mr-3 w-100 rounded"
                    onChange={e => {
                      if (e.target.value === "Akweteyman") {
                        
                        this.setState({
                          community: e.target.value,
                          buildings: "akweteyman_buildings.geojson",
                          center: [-0.2410443288160593, 5.6134037536466415]
                        });

                      } else {
                        if (e.target.value === "Alogboshie") {
                          this.setState({
                            community: e.target.value,
                            buildings: "alobgoshie-buildings.geojson",
                            center: [-0.2325, 5.6262]
                          });
                        } else {
                          if (e.target.value === "Alajo") {
                            this.setState({
                              community: e.target.value,
                              buildings: "alajo_buildings.geojson",
                              center: [-0.2152084488221533, 5.598973832979908]
                            });
                          } else {
                            return;
                          }
                        }
                      }
                    }}
                  >
                    <option>-- Select Community --</option>
                    <option value="Alogboshie" selected>
                      Alogboshie
                    </option>
                    <option value="Akweteyman">Akweteyman</option>
                    <option value="Alajo">Alajo</option>
                    {/* <option value="Nima">Nima</option> */}
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
                    <a className="btn btn-n1">Drainage</a>
                  </Link>
                </div>

                <div className="info">
                  The buildings page displays the buildings data collected in a
                  selected area of interest on the map. Here, you can explore
                  the data collected on buildings in a selected area of interest
                  according to the following subjects: type, purpose and
                  materials used. You can also explore the data according to
                  these subjects by viewing the bar graph on the left side of
                  the page. Beneath that is the download button which allows
                  users to download either buildings data alone or the entire
                  dataset as a .GeoJSON file.
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
                  <center>{Download}</center>
                </div>
              </ul>
              <center>
                <Link href="/contact">
                  <a className="btn btn-dark px-10">Contact</a>
                </Link>
              </center>

              <Footer />
            </div>
            <div className="col-sm-8">
              <div className="map-border" style={{ height: "90vh" }}>
                <div id="map" class="dark" />
                <h4>Population</h4>
                <div id="state-legend" class="legend">
                  <h4>Buildings</h4>
                  <div>
                    <span
                      style={{ backgroundColor: "rgba(0, 136, 136, 0.3)" }}
                    />
                    Residential{" "}
                    <span style={{ marginLeft: "98px" }}>
                      <input
                        onChange={e =>
                          this.setState({
                            residential_status: e.target.checked
                          })
                        }
                        type="checkbox"
                        checked={this.state.residential_status}
                        value="residential"
                      />
                    </span>
                  </div>
                  <div>
                    <span style={{ backgroundColor: "rgba(255,0,0, 0.3)" }} />
                    Commercial{" "}
                    <span style={{ marginLeft: "95px" }}>
                      <input
                        onChange={e =>
                          this.setState({
                            commercial_status: e.target.checked
                          })
                        }
                        type="checkbox"
                        checked={this.state.commercial_status}
                        value="commercial"
                      />
                    </span>
                  </div>
                  <div>
                    <span style={{ backgroundColor: "rgb(0, 0, 0, 0.5)" }} />
                    Commercial & Residential{" "}
                    <span style={{ marginLeft: "21px" }}>
                      <input
                        onChange={e =>
                          this.setState({
                            resi_comm_status: e.target.checked
                          })
                        }
                        type="checkbox"
                        checked={this.state.resi_comm_status}
                        value="residential_commercial"
                      />
                    </span>
                  </div>
                  <div>
                    <span
                      style={{ backgroundColor: "rgba(128, 0, 128, 0.3)" }}
                    />
                    Church{" "}
                    <span style={{ marginLeft: "121px" }}>
                      <input
                        onChange={e =>
                          this.setState({
                            church_status: e.target.checked
                          })
                        }
                        type="checkbox"
                        checked={this.state.church_status}
                        value="church"
                      />
                    </span>
                  </div>
                  <div>
                    <span
                      style={{ backgroundColor: "rgba(255, 255, 0, 0.4)" }}
                    />
                    School{" "}
                    <span style={{ marginLeft: "123px" }}>
                      <input
                        onChange={e =>
                          this.setState({
                            school_status: e.target.checked
                          })
                        }
                        type="checkbox"
                        checked={this.state.school_status}
                        value="school"
                      />
                    </span> 
                  </div>
                  <div>
                    <span style={{ backgroundColor: "rgba(0, 92, 230, 0.4)" }} />
                    construction{" "}
                    <span style={{ marginLeft: "96px" }}>
                      <input
                        onChange={e =>
                          this.setState({
                            construction_status: e.target.checked
                          })
                        }
                        type="checkbox"
                        checked={this.state.construction_status}
                        value="construction"
                      />
                    </span>
                  </div>
                  <div>
                    <span style={{ backgroundColor: "rgba(128, 128, 255, 0.4)" }} />
                    Warehouse{" "}
                    <span style={{ marginLeft: "98px" }}>
                      <input
                        onChange={e =>
                          this.setState({
                            warehouse_status: e.target.checked
                          })
                        }
                        type="checkbox"
                        checked={this.state.warehouse_status}
                        value="other"
                      />
                    </span>
                  </div>
                  <div>
                    <span style={{ backgroundColor: "rgba(128, 128, 128, 0.4)" }} />
                    Industrial{" "}
                    <span style={{ marginLeft: "110px" }}>
                      <input
                        onChange={e =>
                          this.setState({
                            industrial_status: e.target.checked
                          })
                        }
                        type="checkbox"
                        checked={this.state.industrial_status}
                        value="industrial"
                      />
                    </span>
                  </div>
                  <div>
                    <span style={{ backgroundColor: "rgba(238, 130, 238, 0.4)" }} />
                    Shed{" "}
                    <span style={{ marginLeft: "132px" }}>
                      <input
                        onChange={e =>
                          this.setState({
                            shed_status: e.target.checked
                          })
                        }
                        type="checkbox"
                        checked={this.state.shed_status}
                        value="shed"
                      />
                    </span>
                  </div>
                  <div>
                    <span style={{ backgroundColor: "rgb(0, 255, 0, 0.4)" }} />
                    Toilet{" "}
                    <span style={{ marginLeft: "130px" }}>
                      <input
                        onChange={e =>
                          this.setState({
                            toilets_status: e.target.checked
                          })
                        }
                        type="checkbox"
                        checked={this.state.toilets_status}
                        value="toilet"
                      />
                    </span>
                  </div>
                  <div>
                    <span style={{ backgroundColor: "rgba(0, 128, 0, 0.4)" }} />
                    Other{" "}
                    <span style={{ marginLeft: "130px" }}>
                      <input
                        onChange={e =>
                          this.setState({
                            other_status: e.target.checked
                          })
                        }
                        type="checkbox"
                        checked={this.state.other_status}
                        value="other"
                      />
                    </span>
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

export default Buildings;
