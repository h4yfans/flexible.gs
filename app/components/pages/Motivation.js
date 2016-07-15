import React from 'react';

import Header from '../partials/Header'
import HelloMessage from '../partials/HelloMessage'

class Motivation extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <HelloMessage name="Motivation" />
      </div>
    )
  }
}

export default Motivation;
