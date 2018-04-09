
import React from 'react';
import { withGoogleMap, GoogleMap, Marker, withScriptjs } from 'react-google-maps';
import _ from 'lodash'
import Geocode from "react-geocode";
import firebase from "../../javascript/firebase/firebase-setup"

const AsyncGoogleMap = _.flowRight(
  withScriptjs,
  withGoogleMap,
)(props => (
  <GoogleMap
    defaultZoom={4}
    defaultCenter={props.markers.length == 0 ? { lat: 40.273502, lng: -86.126976 } : props.markers[0]}
  >
  {console.log(props.markers[0])}
  {props.markers.map((val) => {
    return (<Marker position={val}/>);
  })}
   />
  </GoogleMap>
));

class Map extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      markers: []
    }

    Geocode.setApiKey("AIzaSyDAPQZ7tiK4gG1zZ3TX1Q4GArhuS0mnays");
    Geocode.enableDebug();
  }

  componentDidMount() {
    var ref = firebase.database().ref('temp2higher/reports');
    ref.once('value', snapshot => {
      let values = snapshot.val()
      let items = []
      for (let key in values) {
        items.push(values[key].address)
      }
      items.map((value) => {
        console.log("This is value: ", value)
        Geocode.fromAddress(value).then(
          response => {
            const { lat, lng } = response.results[0].geometry.location;
            console.log("This is lat and lang: ", lat, lng)
            let newMarkers = this.state.markers
            newMarkers.push({lat, lng})
            this.setState({markers: newMarkers})
            return {lat, lng}
          },
          error => {
            console.error("Geocode had an error: ", error);
            return
          }
        );
      })
    });
  }

  render() {
    return (
      <div>
        <AsyncGoogleMap
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.25&libraries=geometry,drawing,places&key=AIzaSyDAPQZ7tiK4gG1zZ3TX1Q4GArhuS0mnays"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          markers={this.state.markers}
        />
      </div>
    )
  }
}


export default Map;
