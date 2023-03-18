import React, {useState, useRef} from 'react';
import MapView from 'react-native-maps';
import {View, Text} from 'react-native';
import useFetch from './hooks/useFetch';
import Loading from './components/Loading';
import UserMarker from './components/marker/UserMarker';
import InfoCard from './components/InfoCard';

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [user, setUser] = useState();
  const mapRef = useRef();
  const {data, error, loading} = useFetch(
    'https://random-data-api.com/api/v2/users?size=30',
  );

  // console.log({data,loading,error});

  const renderUserMarkers = () => {
    return data.map(
      ({
        id,
        first_name,
        last_name,
        username,
        avatar,
        address: {coordinates},
      }) => {
        return (
          <UserMarker
            onSelect={() =>
              handleMarkerSelect(coordinates, {first_name, last_name, username})
            }
            key={id}
            coordinates={{
              latitude: coordinates.lat,
              longitude: coordinates.lng,
              key: id,
            }}
            userImageURL={avatar}
          />
        );
      },
    );
  };

  function handleMarkerSelect(coor, selectedUser) {
    setUser(selectedUser);
    handleModalVisible();
    mapRef.current.animateToRegion({
      latitude: coor.lat,
      longitude: coor.lng,
      latitudeDelta: 10,
      longitudeDelta: 10,
    });
  }

  function handleModalVisible() {
    setIsModalVisible(!isModalVisible);
  }

  return (
    <View style={{flex: 1}}>
      <MapView ref={mapRef} style={{flex: 1}}>
        {data && renderUserMarkers()}
      </MapView>
      {loading && <Loading />}
      {user && (
        <InfoCard
          user={user}
          visible={isModalVisible}
          onClose={handleModalVisible}
        />
      )}
    </View>
  );
}

export default App;
