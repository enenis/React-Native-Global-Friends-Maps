import React from 'react';
import {View, Image} from 'react-native';
import styles from './UserMarker.style';
import {Marker} from 'react-native-maps';

const UserMarker = ({coordinates, userImageURL,onSelect}) => {
  return (
    <Marker coordinate={coordinates} onPress={onSelect}>
      <Image style={styles.image} source={{uri: userImageURL}} />
    </Marker>
  );
};
export default UserMarker;
