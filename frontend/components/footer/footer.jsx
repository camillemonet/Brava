import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

class Footer extends React.Component {

  loggedOutFooter() {
    return (
      <nav className="footer-loggedout">
        <a target="_blank" href="https://www.linkedin.com/in/camille-fogg-2b29a7173/"><FaLinkedinIn />          Camille Fogg</a>
        <a target="_blank" href="https://github.com/camillemonet"><FaGithub />          camillemonet</a>
        <a href="#"><FaEnvelope />          camille.m.fogg@gmail.com</a>
      </nav>
    )
  };

  loggedInFooter() {
    return (
      <nav className="footer-loggedin">
        <a target="_blank" href="https://www.linkedin.com/in/camille-fogg-2b29a7173/"><FaLinkedinIn />          Camille Fogg</a>
        <a target="_blank" href="https://github.com/camillemonet"><FaGithub />          camillemonet</a>
        <a href="#"><FaEnvelope />          camille.m.fogg@gmail.com</a>
      </nav>
    )
  };

  render() {
    if (this.props.currentUser) {
      return this.loggedInFooter();
    } else {
      return this.loggedOutFooter();
    };
  };
};

export default Footer;