import React from 'react';

class HelloMessage extends React.Component {
  render() {
    return (
      <div className="xl-m24">
        <div className="xl-maw1280 xl-ma">
          <div className="wrap xl-gutter-24">
            <div className="col xl-9-12">
              <div className="xl-tal xl-px24 xl-py16 xl-co-black-500 xl-br8 xl-ba-white xl-bw2 xl-bo-gray-200">
                <div className="xl-lh40 xl-fs24 xl-fw600 xl-mb8">{this.props.name}</div>
                <div className="xl-lh36 xl-fs18 xl-fw300">
                  Flexible Grid System is a <span class="xl-fw600">Responsive CSS Framework.</span><br/>
                  This framework will let you create your web applications in a flexible way that you've never experienced before.
                </div>
              </div>
            </div>
            <div className="col xl-3-12">

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HelloMessage;
