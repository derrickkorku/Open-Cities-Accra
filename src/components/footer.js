import Link from "next/link";

export default ()=>(
    <footer className="footer">
    <div className="container">
      <center>Powered by:</center>
      <div className="row">
        <ul className="list-inline py-2 d-flex">
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
                  src="../static/img/partners/osmghana-logo.png"
                  className="hot"
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
)