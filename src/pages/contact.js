import { Component } from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
//const base_url = "https://ocav1-app.herokuapp.com" || "http://localhost:5000" 
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      email:"",
      phone_number:"",
      Message:""
    }

    
    this.sendEmail = this.sendEmail.bind(this);
  }

  async sendEmail(e) {
    e.preventDefault();
    const drainageRes = await fetch("/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    });
    const drainageData = await drainageRes.json();
    console.log(drainageData);
  }

  render() {
    return (
      <div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-12">
              <h4 className="text-center">
                <strong>Contact</strong>
              </h4>
            </div>
          </div>
          <div className="row justify-content-center mb-2">
            <div className="col-sm-10">
              <form
              method="POST"
                className="contact-form-border p-4"
                onSubmit={this.sendEmail}
              >
                <div className="form-row">
                  <div className="col-12 form-group">
                    <h5>Send Us a Message</h5>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-6 form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      required
                      onChange={(e)=>this.setState({name:e.target.value})}
                    />
                  </div>
                  <div className="col-6 form-group">
                    <input
                      type="text"
                      name=""
                      className="form-control"
                      placeholder="Email"
                      required
                      onChange={(e)=>this.setState({email:e.target.value})}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-12 form-group">
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      placeholder="Phone Number"
                      onChange={(e)=>this.setState({phone_number:e.target.value})}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-12 form-group">
                    <textarea
                      className="form-control"
                      rows="10"
                      placeholder="Message"
                      onChange={(e)=>this.setState({Message:e.target.value})}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-12 form-group">
                    <center>
                      <button type="submit" className="btn btn-primary px-5">
                        Send Message
                      </button>
                    </center>
                  </div>
                </div>
              </form>
              <center>
                <Link href="/">
                  <a className="home-link">BACK HOME</a>
                </Link>
              </center>
            </div>
          </div>
        </div>
        <footer>
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

export default Contact;
