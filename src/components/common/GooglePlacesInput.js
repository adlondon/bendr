import React, { Component } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { View } from 'react-native';
import { GOOGLE_PLACES_KEY } from '../../config/globals';
import { Colors, BorderRadius } from '../../config/styles';

class GooglePlacesInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      onRowPress
    } = this.props;
    const { locationAutocompleteStyle } = styles;

    return (
      (
        <GooglePlacesAutocomplete
          placeholder="Address"
          minLength={2} // minimum length of text to search
          autoFocus={false}
          returnKeyType="search" // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
          listViewDisplayed="auto" // true/false/undefined
          fetchDetails
          renderDescription={row => row.description} // custom description render
          onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
              onRowPress(details);
            }}

          getDefaultValue={() => ''}

          query={{
              // available options: https://developers.google.com/places/web-service/autocomplete
              key: GOOGLE_PLACES_KEY,
              language: 'en', // language of the results
              types: ['street_address', 'establishment'], // default: 'geocode'
            }}

          styles={locationAutocompleteStyle}

          currentLocation={false} // Will add a 'Current location' button at the top of the predefined places list
          currentLocationLabel="Current location"
          nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
          GoogleReverseGeocodingQuery={{
              // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
            }}
          GooglePlacesSearchQuery={{
              // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
            }}

          filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities

          debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
          />
      )
    );
  }
}

const styles = {
  locationAutocompleteStyle: {
    container: {
      zIndex: 10,
      overflow: 'visible',
      height: 50
    },
    textInputContainer: {
      backgroundColor: 'rgba(0,0,0,0)',
      borderRadius: BorderRadius['medium'].all,
      borderTopWidth: 0,
      borderBottomWidth: 0,
    },
    textInput: {
      borderRadius: BorderRadius['medium'].all,
      borderColor: Colors.lightGrey,
      color: Colors.primaryGrey,
      backgroundColor: 'white',
      borderWidth: 1,
      marginLeft: -1,
      marginRight: -1,
      height: 37
    },
    listView: {
      position: 'absolute',
      top: 60,
      left: 10,
      right: 10,
      backgroundColor: 'white',
      borderRadius: 5,
      flex: 1,
      elevation: 3,
      zIndex: 10
    },
    description: {
      color: '#1faadb'
    },
    predefinedPlacesDescription: {
      color: '#1faadb'
    }
  }
};

export default GooglePlacesInput;
