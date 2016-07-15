import React from 'react';

import Header from '../partials/Header'
import HelloMessage from '../partials/HelloMessage'

class Install extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <HelloMessage name="Install" />
      </div>
    )
  }
}

export default Install;
