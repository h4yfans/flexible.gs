import React from 'react';

class HelloMessage extends React.Component {
  render() {
    return (
      <div className="xl-tal xl-p24 xl-m24 xl-co-black-500 xl-br8 xl-ba-white xl-bw2 xl-bo-gray-200">
        <span className="xl-vam xl-fs24 xl-fw300">Hello <span className="xl-fw600">{this.props.name}</span></span>
      </div>
    );
  }
}

export default HelloMessage;
