import Link from "next/link"
import Router from "next/router"
function ThankYou ({name, isName}){
  if(!isName) return null
  return (
  <div style={{height:"100vh", overflow:"hidden" }}>
    <div className="row justify-content-center">
    <div className="jumbotron text-xs-center">
  <h4 className="display-4">Thank You!</h4>
  <p className="lead"><strong>Hi {name}, thank you  for getting in touch with us.</strong> This is to comfirm that we have received </p>
 <p>your email and we will get in touch with you</p>
  <hr/>
  <p className="lead">
  <Link href="/">
    <a className="btn btn-sm" style={{backgroundColor:"purple", color:"white"}} >Continue to homepage</a>
    </Link>
  </p>
</div>
</div>
</div>
)}


ThankYou.getInitialProps = async ({ query }) => {

let name = query.name
let isName = query.name?true:false

  return { name, isName }
}

export default ThankYou