import React from 'react';

import Header from '../partials/Header'
import HelloMessage from '../partials/HelloMessage'

class Learn extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <HelloMessage name="Learn" />
      </div>
    )
  }
}

export default Learn;
