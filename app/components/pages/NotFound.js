import React from 'react';

import Header from '../partials/Header'
import HelloMessage from '../partials/HelloMessage'

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <HelloMessage name="Not Found" />
      </div>
    )
  }
}

export default NotFound;
