import React from 'react';

import Header from '../partials/Header'
import HelloMessage from '../partials/HelloMessage'

class ResponsiveTest extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <HelloMessage name="Responsive Test" />
      </div>
    )
  }
}

export default ResponsiveTest;
