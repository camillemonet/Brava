import React from 'react';
import { Link } from 'react-router-dom';
import { FaAddressCard, FaEnvelope } from 'react-icons/fa';

class Splash extends React.Component {
  render() {
    return(
      <div>
      <div className="splash-main">

        <h2 className="splash-text-center">The #1 app for runners and cyclists</h2>

        <div className="splash-main-content-row">

          <div className="splash-tech-image-div">
            <img src="https://d3nn82uaxijpm6.cloudfront.net/assets/website/show_simple/devices-header-3349320fa849e6a297a3b0d64a6dfdef7307b0fe50f6329a459a0105b76ffff8.jpg" className="splash-tech-image" alt="Tech Image"/>
          </div>

          <div className="splash-main-right">

            <div className="splash-signup-links">

              <Link to="/signup" className="splash-signup-link-demo">
                <FaAddressCard className="splash-react-icon"/>
                <div>Sign up with Demo</div>
              </Link>

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
        footer info
      </div>
      </div>
    )
  }
}

export default Splash;