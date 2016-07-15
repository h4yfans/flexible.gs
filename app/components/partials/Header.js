import React from 'react';
import { Link } from 'react-router'

class Header extends React.Component {
  render() {
    return (
      <div className="xl-tal xl-px24 xl-py8 xl-ba-black-500 xl-co-white">
        <div className="wrap xl-flexbox xl-between">
          <div className="col">
            <Link className="xl-vam xl-dib xl-co-white xl-p8 xl-mr8 icon-flexiblegs" to="/"></Link>
            <Link className="xl-vam xl-dib xl-co-gray-400 xl-p8 xl-fs14" to="/">Homepage</Link>
            <Link className="xl-vam xl-dib xl-co-gray-400 xl-p8 xl-fs14" to="/install">Install</Link>
            <Link className="xl-vam xl-dib xl-co-white xl-p8 xl-fs14 xl-fw600" to="/learn">Learn</Link>
            <Link className="xl-vam xl-dib xl-co-gray-400 xl-p8 xl-fs14" to="/compatibility">Compatibility</Link>
            <Link className="xl-vam xl-dib xl-co-gray-400 xl-p8 xl-fs14" to="/responsive-test">Responsive Test</Link>
            <Link className="xl-vam xl-dib xl-co-gray-400 xl-p8 xl-fs14" to="/motivation">Motivation</Link>
            <Link className="xl-vam xl-dib xl-co-gray-400 xl-p8 xl-fs14" to="/future">Future</Link>
          </div>
          <div className="col">
            <a href="#" className="xl-vam xl-dib xl-co-white xl-p8 xl-fs14 xl-fw600">EN</a>
            <a href="#" className="xl-vam xl-dib xl-co-gray-400 xl-p8 xl-fs14">TR</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
