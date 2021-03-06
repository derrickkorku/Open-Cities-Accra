import { Component } from "react";
import Link from "next/link";
import Footer from "../components/footer";
import dynamic from "next/dynamic";
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      building_status: true,
      drainage_status: true,
      flood_status: true,
      isLoading: false,
      floodData: null,
      buildingData: null,
      drainageData: null,
      render: false,
      title:
        "Map Visualisation of buildings, flood history, and drainage for Alogboshie, Accra-Ghana",
      community: "Alobgoshie",
      buildings: "alobgoshie-buildings.geojson",
      waterways: "alogboshie_waterways.geojson",
      flood: "alogboshie_flod_history .geojson",
      center: [-0.2325, 5.6262]
    };
  }

  componentDidMount() {
    this.setState({ render: true });
    mapboxgl.accessToken =
      "pk.eyJ1Ijoid2lzZG9tMDA2MyIsImEiOiJjanI1aWg0cGQwZTByM3dtc3J1OHJ3MGNqIn0.yjtKpgtEmgCkCcLvpH_tJg";
  }

  render() {
    let buildingurl = this.state.render && this.state.buildings;
    let waterwaysurl = this.state.render && this.state.waterways;
    let floodurl = this.state.render && this.state.flood;
    let center = this.state.render && this.state.center;

    var map =
      this.state.render &&
      new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v9",
        zoom: 17.3,
        center: center
      });

    this.state.render && map.addControl(new mapboxgl.NavigationControl());
    let building_status = this.state.building_status
    let drainage_status = this.state.drainage_status
    let flood_status = this.state.flood_status

    this.state.render &&
      map.on("load", function() {
        // Add a layer showing the state polygons.
        map.addLayer({
          id: "buildings",
          type: "fill",
          source: {
            type: "geojson",
            data: `/static/data/${buildingurl}`
          },
          layout: {},
          paint: {
            "fill-color": "#088",
            "fill-opacity": 0.2,
            "fill-outline-color": "red"
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

        map.addLayer({
          id: "drainage",
          type: "line",
          source: {
            type: "geojson",
            data: `/static/data/${waterwaysurl}`
          },
          paint: {
            "line-color": "blue",
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

        map.addLayer({
          id: "flood",
          type: "circle",
          source: {
            type: "geojson",
            data: `/static/data/${floodurl}`
          },
          paint: {
            "circle-color": /* other */ "rgb(128, 128, 128)",

            "circle-radius": 10
          }
        });


!building_status && map.setFilter("buildings", ["in", "building"])
!drainage_status && map.setFilter("drainage", ["in", "waterway" ])
!flood_status && map.setFilter("flood", ["in", "flood_history.flood_depth"])
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
        <div className="container-fluid mt-3 mr-10 ml-10">
          <div className="row index-pg">
            <div className="col-sm-4">
            <center>
                <Link href="/">
                  <a className="home-link my-5">
                  <h5>
                  Open Cities Accra Data Visualizations

                  </h5>
                  </a>
                </Link>
              </center>
              <div className="bg-sidebar">
                <div className="info">
                  This web application was developed as part of the Open Cities
                  Accra project. The project sought to collect and curate
                  up-to-date and accurate geospatial data in the following areas
                  of interest in Accra: Akweteyman, Alajo, Alogboshie and Nima.
                  This web application was developed as a data tool to help
                  government agencies, institutions and other stakeholders
                  working in the Disaster Risk Management field take data-driven
                  decisions in their work. The maps display the following data -
                  buildings, flood history and drainage.
                </div>
                <div style={{ marginTop: "30px" }} />

                <div className=" row py-2 mx-1 rounded shadow">
                  <div className="col-sm-4 mb-1">
                    <Link href="/buildings">
                      <a
                        className="btn btn-md btn-block btn-light rounded"
                        style={{ height: "100%" }}
                      >
                        <i className="fas fa-home fa-2x fa-color" />
                        <br />
                        Building
                      </a>
                    </Link>
                  </div>
                  <div className="mb-1 col-sm-4">
                    <Link href="/flood-history">
                      <a
                        className="btn btn-md btn-block btn-light rounded"
                        style={{ height: "100%" }}
                      >
                        <i className="fab fa-fort-awesome-alt fa-2x fa-color" />
                        <br />
                        Flood History
                      </a>
                    </Link>
                  </div>
                  <div className="col-sm-4">
                    <Link href="/drainage">
                      <a
                        className="btn btn-block btn-md btn-light rounded"
                        style={{ height: "100%" }}
                      >
                        <i className="fab fa-schlix fa-2x fa-color" />
                        <br />
                        Drainage Points
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div style={{ clear: "both", marginTop: "30px" }} />
              <div className="above-575">
              <Link href="/contact">
                <a
                  className="btn btn-dark btn-block"
                  style={{ width: "60%", marginLeft: "20%" }}
                >
                  Contact
                </a>
              </Link>
              </div>

              <span className="above-1300"> 
              <Footer />

              </span>


              {/* <ul className="list-unstyled px-3 py-3 rounded bg-sidebar shadow">
                <li className="mb-3" style={{float:"left"}}>
                  <Link href="/buildings">
                    <a className="btn btn-lg btn-block btn-light rounded p-home-btn">
                      <i className="fas fa-home fa-2x fa-color" />
                      <br />
                      Building
                    </a>
                  </Link>
                </li>
                <li className="mb-3" style={{float:"left"}}>
                  <Link href="/flood-history">
                    <a className="btn btn-lg btn-block btn-light rounded p-home-btn">
                      <i className="fab fa-fort-awesome-alt fa-2x fa-color" />
                      <br />
                      Flood History
                    </a>
                  </Link>
                </li>
                <li className="" style={{float:"left"}}>
                  <Link href="/drainage">
                    <a className="btn btn-lg btn-block btn-lg btn-light rounded p-home-btn">
                      <i className="fab fa-schlix fa-2x fa-color" />
                      <br />
                      Drainage Points
                    </a>
                  </Link>
                </li>
              </ul>
              <div style={{clear:"both"}}/>
              <Link href="/contact">
                <a className="btn btn-dark btn-block">Contact</a>
              </Link> */}
            </div>

            <div className="col-sm-8">
            <div className="row">
                <div className="col-sm-9">
                  <h5>
                  
                      {this.state.title}
                  
                  </h5>
                </div>
                <div className="col-sm-3">
                  <select
                    className="form-control mb-3 mr-3 w-100 rounded"
                    onChange={e => {
                      if (e.target.value === "Akweteyman") {
                        this.setState({
                          title:
                            "Map Visualisation of buildings and drainage for Akweteyman, Accra-Ghana",
                          community: e.target.value,
                          buildings: "akweteyman_buildings.geojson",
                          waterways: "akweteyman_waterways.geojson",
                          flood: null,
                          center: [-0.23843433907319422, 5.613465574220044]
                        });
                      } else {
                        if (e.target.value === "Alogboshie") {
                          this.setState({
                            title:
                              "Map Visualisation of buildings, flood history and drainage for Alobgoshie, Accra-Ghana",

                            community: e.target.value,
                            buildings: "alobgoshie-buildings.geojson",
                            waterways: "alogboshie_waterways.geojson",
                            flood: "alogboshie_flod_history .geojson",
                            center: [-0.2325, 5.6262]
                          });
                        } else {
                          if (e.target.value === "Alajo") {
                            this.setState({
                              title:
                                "Map Visualisation of buildings for Alajo, Accra-Ghana",

                              community: e.target.value,
                              buildings: "alajo_buildings.geojson",
                              waterways: null,
                              flood: null,
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
              <div
                className="map-border"
                style={{ height: "90vh", width: "100%" }}
              >
                <div id="map" />
                <div id="state-legend" class="legend">
                  <h4 />
                  {this.state.buildings && (
                    <div>
                      <span style={{ backgroundColor: "#088" }} />
                      Buildings{" "}
                      <span style={{ marginLeft: "40px", float:"right" }}>
                        <input
                          onChange={e =>
                            this.setState({
                              building_status: e.target.checked
                            })
                          }
                          type="checkbox"
                          checked={this.state.building_status}
                          value="building"
                        />
                      </span>
                    </div>
                  )}
                  {this.state.waterways && (
                    <div>
                      <span style={{ backgroundColor: "blue" }} />
                      Drainage{" "}
                      <span style={{ marginLeft: "40px", float:"right" }}>
                        <input
                          onChange={e =>
                            this.setState({
                              drainage_status: e.target.checked
                            })
                          }
                          type="checkbox"
                          checked={this.state.drainage_status}
                          value="drainage"
                        />
                      </span>
                    </div>
                  )}
                  {this.state.flood && (
                    <div>
                      <span style={{ backgroundColor: "gray" }} />
                      Flood History{" "}
                      <span style={{ marginLeft: "18px", float:"right" }}>
                        <input
                          onChange={e =>
                            this.setState({
                              flood_status: e.target.checked
                            })
                          }
                          type="checkbox"
                          checked={this.state.flood_status}
                          value="waterway"
                        />
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <center className="below-575 mt-4 mx-auto" style={{width:"40%"}}>
              <Link href="/contact">
                <a
                  className="btn btn-dark btn-block"
                >
                  Contact Us
                </a>
              </Link>
              </center>
            <div className="below-1300"> 
              <Footer />

              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
