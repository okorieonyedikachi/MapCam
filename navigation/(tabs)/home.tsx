import { Camera, CloseCircle } from 'iconsax-react-native';
import { gameList } from 'lib/data';
import { useState } from 'react';
import { Modal, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const Home = () => {
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
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
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
            style={{ backgroundColor: 'orange', width: '40%', padding: 10, borderRadius: 8 }}
            onPress={() => console.log('true')}>
            <Text style={{ fontWeight: '600' }}>Accept Challenge</Text>
          </Pressable>
        </SafeAreaView>
      </Modal>
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
    top: '40%',
    height: '20%',
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
