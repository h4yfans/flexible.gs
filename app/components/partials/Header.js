import React from 'react';
import { Link } from 'react-router'

class Header extends React.Component {
  render() {
    return (
      <div className="xl-tal xl-py8 xl-px24 xl-ba-black-500 xl-co-white">
        <div className="xl-maw1280 xl-ma">
          <div className="wrap xl-flexbox xl-between">
            <div className="col">
              <Link className="icon-flexiblegs xl-vam xl-dib xl-p8 xl-mr8 xl-co-white ho-co-gray-500" to="/"></Link>
              <Link className="xl-vam xl-dib xl-p8 xl-fs14 xl-fw400 xl-co-gray-500 ho-co-white" to="/">Home</Link>
              <Link className="xl-vam xl-dib xl-p8 xl-fs14 xl-fw400 xl-co-gray-500 ho-co-white" to="/install">Install</Link>
              <Link className="xl-vam xl-dib xl-p8 xl-fs14 xl-fw400 xl-co-white" to="/learn">Learn</Link>
              <Link className="xl-vam xl-dib xl-p8 xl-fs14 xl-fw400 xl-co-gray-500 ho-co-white" to="/compatibility">Compatibility</Link>
              <Link className="xl-vam xl-dib xl-p8 xl-fs14 xl-fw400 xl-co-gray-500 ho-co-white" to="/responsive-test">Responsive Test</Link>
              <Link className="xl-vam xl-dib xl-p8 xl-fs14 xl-fw400 xl-co-gray-500 ho-co-white" to="/motivation">Motivation</Link>
              <Link className="xl-vam xl-dib xl-p8 xl-fs14 xl-fw400 xl-co-gray-500 ho-co-white" to="/future">Future</Link>
            </div>
            <div className="col">
              <a href="#" className="icon-github-alt icon-sm xl-vam xl-dib xl-co-black-100 ho-co-white xl-p8 xl-mr8 "></a>
              <a href="#" className="icon-twitter icon-sm xl-vam xl-dib xl-co-black-100 ho-co-white xl-p8 xl-mr8 "></a>
              <a href="#" className="icon-youtube-play icon-sm xl-vam xl-dib xl-co-black-100 ho-co-white xl-p8 xl-mr16 "></a>
              <a href="#" className="xl-vam xl-dib xl-p8 xl-fs14 xl-fw400 xl-co-white">English</a>
              <a href="#" className="xl-vam xl-dib xl-p8 xl-fs14 xl-fw400 xl-co-gray-500 ho-co-white">Turkish</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
