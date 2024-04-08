import { Button } from 'components/Button';
import { Camera } from 'iconsax-react-native';
import { useState } from 'react';
import { Modal, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCameraBtnPress = () => {
    setShowModal(true);
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={[styles.cameraContainer, styles.elevation]}>
        <TouchableOpacity onPress={handleCameraBtnPress}>
          <Camera color="#555555" size={30} />
        </TouchableOpacity>
      </View>
      {showModal && (
        <Modal
          style={styles.modalContainer}
          visible={showModal}
          onRequestClose={() => {
            setShowModal(false);
          }}
          transparent>
          <Button>chvdv</Button>
        </Modal>
      )}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
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
    // flex: 1,
    // height: '20%',
    // top: '30%',
    // width: '90%',
    backgroundColor: 'red',
  },
  modal: {
    width: '80%',
    height: '50%',
    backgroundColor: 'red',
  },
});
