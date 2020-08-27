import React from 'react';
import { Link } from 'react-router-dom';
import { FaAddressCard, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

class Splash extends React.Component {

  constructor(props) {
    super(props);
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
  }

  handleDemoSubmit(e) {
    e.preventDefault();
    this.props.login({ email: 'demo@gmail.com', password: '123456' })
      .then(() => this.props.history.push("/feed"));
  }

  render() {
    return(
      <div className="splash-content">
      <div className="splash-main">

        <h2 className="splash-text-center">The #1 app for runners and cyclists</h2>

        <div className="splash-main-content-row">

          <div className="splash-tech-image-div">
            <img src="https://d3nn82uaxijpm6.cloudfront.net/assets/website/show_simple/devices-header-3349320fa849e6a297a3b0d64a6dfdef7307b0fe50f6329a459a0105b76ffff8.jpg" className="splash-tech-image" alt="Tech Image"/>
          </div>

          <div className="splash-main-right">

            <div className="splash-signup-links">

              <form onSubmit={this.handleDemoSubmit}>
                <button className="splash-signup-link-demo">
                  <FaAddressCard className="splash-react-icon" />
                  <div>Sign up with Demo</div>
                </button>
              </form>

              <div className="splash-or-div">
                <div className="splash-or">or</div>
              </div>

              <Link to="/signup" className="splash-signup-link-email">
                <FaEnvelope className="splash-react-icon"/>
                <div>Sign up with Email</div>
              </Link>
            
            </div>

            <div className="disclaimer">
              <p>
                By signing up for Brava, you agree to the 
                <a href="https://www.strava.com/legal/terms"> Terms of Service</a>. 
                View our 
                <a href="https://www.strava.com/legal/terms"> Privacy Policy</a>.
              </p>
            </div>

            <div className="splash-already-member">
              Already a member? 
              <Link to="/login"> Login.</Link>
            </div>

          </div>

        </div>


      </div>
      <div className="splash-footer">

        <div className="splash-footer-c1">
            <img src={window.logo2URL} className="header-logo2" alt="Logo" />
        </div>

        <div className="splash-footer-c2">
          <div className="splash-footer-header">MENU</div>
          <div className="splash-footer-c2-12">
            <div className="splash-footer-c2-1">
              <a href="#">FEATURES</a>
              <a href="#">SUBSCRIPTION</a>
              <a href="#">ABOUT</a>
              <a href="#">CAREERS</a>
              <a href="#">BLOG</a>
            </div>
            <div className="splash-footer-c2-2">
              <a href="#">LOCAL</a>
              <a href="#">SUPPORT</a>
              <a href="#">BUSINESS</a>
              <a href="#">TERMS</a>
              <a href="#">PRIVACY</a>
            </div>
          </div>
        </div>

        <div className="splash-footer-c3">
          <div className="splash-footer-header">FOLLOW</div>
          <div className="splash-footer-c3-1">
            <a href="#"><FaFacebookF className="splash-footer-icon"/>FACEBOOK</a>
            <a href="#"><FaInstagram className="splash-footer-icon"/>INSTAGRAM</a>
            <a href="#"><FaTwitter className="splash-footer-icon"/>TWITTER</a>
            <a href="#"><FaYoutube className="splash-footer-icon"/>YOUTUBE</a>
          </div>
        </div>

        <div className="splash-footer-c3">
          <div className="splash-footer-header">GET STARTED</div>
          <div className="splash-footer-c4-1">
            <a href="#">SIGN UP</a>
            <a href="#">LOG IN</a>
          </div>
        </div>

      </div>
      </div>
    )
  }
}

export default Splash;