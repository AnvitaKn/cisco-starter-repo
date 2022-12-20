import request from'request';
import React, { Component } from 'react';


class IPAddressComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    url: props.url,
    ipAddress: null
    };
  }

  componentDidMount() {   /*you can call the fetchIPAddress function to make an 
                            HTTP request to the ipify API.  */
    this.fetchIPAddress();
  }

  fetchIPAddress() {
    const { type } = this.props;
    const url = `https://api.ipify.org?format=${type}`;

    request(url, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        this.setState({ ipAddress: body });
      }
    });
  }

  render() {   /*you can display the IP address 
                by accessing the ipAddress property of the component's state. */
    const { ipAddress } = this.state;
    return (
      <div>
        {ipAddress ? `Your ${this.props.type} address is: ${ipAddress}` : 'Loading...'}
      </div>
    );
  }
}

import { render } from 'react-dom';
import IPAddressComponent from './IPAddressComponent';

render(<IPAddressComponent type="ipv4" />, document.getElementById('root'));


export default IPAddressComponent;