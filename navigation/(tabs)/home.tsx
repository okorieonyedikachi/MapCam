import { StackNavigationProp } from '@react-navigation/stack';
import ChallengeModal from 'components/ChallengeModal';
import GoogleMap from 'components/GoogleMap';
import ModalComponent from 'components/ModalComponent';
import { Camera } from 'iconsax-react-native';
import { gameList } from 'lib/data';
import { StackParamList } from 'navigation/tab-navigation';
import { useState } from 'react';
import { Dimensions, Pressable, SafeAreaView, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

type HomeScreenNavigationProps = StackNavigationProp<StackParamList, 'App'>;

const Home = ({ navigation }: { navigation: HomeScreenNavigationProps }) => {
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

  const openCamera = () => {
    setShowModal(false);
    navigation.navigate('CameraScreen');
  };
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
      <ModalComponent showModal={showModal} modalVisible={modalVisible}>
        <ChallengeModal
          hideModal={hideModal}
          randomChallenge={randomChallenge}
          openCamera={openCamera}
        />
      </ModalComponent>
    </SafeAreaView>
  );
};

export default Home;
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  map: {
    width,
    height,
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
    top: '80%',
  },
  elevation: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
