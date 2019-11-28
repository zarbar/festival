import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
  
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 41.95,
      lng: 0.1233
    },
    zoom: 11
  };
 
  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBeHsAxs2A79KSAX8pfG82eLE1Jg7uAZAE' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
      
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;


// PostCode => Coordinates => change state => load map


