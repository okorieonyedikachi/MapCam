// import { useNavigation } from '@react-navigation/native';
import GoogleMap from 'components/GoogleMap';
import * as Location from 'expo-location';
import { Camera, CloseCircle } from 'iconsax-react-native';
import { gameList } from 'lib/data';
import { useEffect, useState } from 'react';
import { Modal, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const Home = ({}) => {
  const [showModal, setShowModal] = useState(false);
  const [randomChallenge, setRandomChallenge] = useState('');

  const modalVisible = () => {
    const randomIndex = Math.floor(Math.random() * gameList.length); //index
    setRandomChallenge(gameList[randomIndex]);
    setShowModal(true);
  };
  const hideModal = () => {
    setShowModal(false);
  };
  const { cameraReference } = GoogleMap();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <MapView
        style={StyleSheet.absoluteFill}
        provider={PROVIDER_GOOGLE}
        ref={cameraReference}
        showsUserLocation
      />

      <Pressable style={[styles.cameraContainer, styles.elevation]} onPress={modalVisible}>
        <Camera color="#555555" size={28} />
      </Pressable>

      <Modal
        visible={showModal}
        onRequestClose={() => {
          setShowModal(false);
        }}
        onShow={modalVisible}
        animationType="fade"
        transparent>
        <SafeAreaView style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', flex: 1 }}>
          <SafeAreaView style={styles.modalContainer}>
            <View style={styles.closeBtn}>
              <Pressable onPress={hideModal}>
                <CloseCircle color="orange" />
              </Pressable>
              <Text style={styles.modalHeader}>Challenge</Text>
            </View>
            <View style={{ marginTop: 20, marginBottom: 30 }}>
              <Text style={{ fontSize: 18 }}>I spy with my little eye .... {randomChallenge}</Text>
            </View>

            <Pressable
              style={{ backgroundColor: 'orange', width: '40%', padding: 10, borderRadius: 8 }}>
              <Text style={{ fontWeight: '600' }}>Accept Challenge</Text>
            </Pressable>
          </SafeAreaView>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
  cameraContainer: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 100,
    position: 'absolute',
    left: '85%',
    top: '90%',
  },
  elevation: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  modalContainer: {
    top: '40%',
    height: '23%',
    alignSelf: 'center',
    width: '90%',
    backgroundColor: '#fffaf0',
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  closeBtn: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  modalHeader: {
    fontSize: 20,
    fontWeight: '600',
  },
});
