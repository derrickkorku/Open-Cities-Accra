import { Component } from "react";
import Link from "next/link";
import Router from "next/router"
import fetch from "isomorphic-unfetch";
import Footer from "../components/footer"
import { css } from "@emotion/core";
import "react-toastify/dist/ReactToastify.css";
import { ClipLoader } from "react-spinners";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  position: absolute;
`;
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone_number: "",
      Message: "",
      loading: false
    };

    this.sendEmail = this.sendEmail.bind(this);
    this.notify = this.notify.bind(this);
  }

  notify = () => toast("Wow so easy !");

  async sendEmail(e) {
    e.preventDefault();
    this.setState({ loading: true });

    const contactRes = await fetch("/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    });
    let contactData = await contactRes.json()
    console.log(contactData)
    if(contactData.success) Router.push(`/thank-you?name=${this.state.name}`)
    
    this.setState({ loading: false });
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
                      onChange={e => this.setState({ name: e.target.value })}
                    />
                  </div>
                  <div className="col-6 form-group">
                    <input
                      type="text"
                      name=""
                      className="form-control"
                      placeholder="Email"
                      required
                      onChange={e => this.setState({ email: e.target.value })}
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
                      onChange={e =>
                        this.setState({ phone_number: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-12 form-group">
                    <textarea
                      className="form-control"
                      rows="10"
                      placeholder="Message"
                      onChange={e => this.setState({ Message: e.target.value })}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-12 form-group">
                    <center>
                      <button
                        type="submit"
                        className="btn btn-primary px-5"
                        disabled={this.state.loading}
                      >
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
                <div
                className="sweet-loading"
                style={{
                  position: "absolute",
                  bottom: "53vh",
                  display: "block",
                  margin: "auto",
                  borderColor: "red"
                }}
              >
              
                <ClipLoader
                  css={override}
                  sizeUnit={"px"}
                  size={150}
                  color={"#123abc"}
                  loading={this.state.loading}
                />
              </div>
              </center>
            </div>
          </div>
        </div>
<Footer/>
      </div>
    );
  }
}

export default Contact;
