import React from 'react';

import Header from '../partials/Header'
import HelloMessage from '../partials/HelloMessage'

class Homepage extends React.Component {
  render() {
    return (
      <div className="xl-tac">
        <Header/>
        <HelloMessage name="Homepage" />
      </div>
    )
  }
}

export default Homepage;
