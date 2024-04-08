import { Button } from 'components/Button';
import { Camera, CloseCircle } from 'iconsax-react-native';
import { useState } from 'react';
import { Modal, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const modalVisible = () => {
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
        <Camera color="#555555" size={30} />
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
          <View>
            <Text>I spy something red</Text>
          </View>
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
    borderRadius: 10,
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
