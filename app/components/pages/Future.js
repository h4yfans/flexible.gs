import React from 'react';

import Header from '../partials/Header'
import HelloMessage from '../partials/HelloMessage'

class Future extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <HelloMessage name="Future" />
      </div>
    )
  }
}

export default Future;
