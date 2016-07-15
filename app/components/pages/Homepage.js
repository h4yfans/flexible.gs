import React from 'react';

import Header from '../partials/Header'
import HelloMessage from '../partials/HelloMessage'

class Homepage extends React.Component {
  render() {
    return (
      <div className="xl-tac">
        <Header/>
        <HelloMessage name="Homepage" />
        <a className="xl-vam xl-co-black-500 xl-dib xl-p8 xl-mr8 icon-flexiblegs-logo-rounded"></a>
      </div>
    )
  }
}

export default Homepage;
