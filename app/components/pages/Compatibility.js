import React from 'react';

import Header from '../partials/Header'
import HelloMessage from '../partials/HelloMessage'

class Compatibility extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <HelloMessage name="Compatibility" />
      </div>
    )
  }
}

export default Compatibility;
