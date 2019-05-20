import {Component} from "react"
class Download extends Component {
    constructor(props){
        super(props)
        
        this.state={
            file:null,
            filename:null
        }
    }

    render(){
return (
    <div className="d-flex">
    <select
      className="form-control mb-3 text-center rounded"
      style={{ width: "70%" }}
      onChange = {(e)=>{
          let filearr = e.target.value.split("/")
let filename = filearr[filearr.length-1]
          this.setState({file:e.target.value, filename})}

    }
    >
      <option value={{
        filePath:null,
        filename:null
      }}>-- Select to Download --</option>
      <option value=
      "../static/alobgoshie-buildings.geojson"
      >Buildings</option>

      <option value="../static/alogboshie_flod_history .geojson"
      
    >Flood History</option>

<option value="../static/alogboshie_waterways.geojson">Drainage</option>
    </select>
    <div style={{ marginLeft: "10px" }}>
      <a
        className="btn btn-dark"
        style={{ color: "white" }}
        href={this.state.file}
        download={this.state.filename}
      >
        Download
      </a>
    </div>
  </div>
)
    }
}

export default Download