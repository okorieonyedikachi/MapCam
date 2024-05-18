import { CloseCircle } from 'iconsax-react-native';
import React from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

interface ChallengeModalProps {
  hideModal: () => void;
  randomChallenge: string;
  openCamera: () => void;
}

const ChallengeModal: React.FC<ChallengeModalProps> = ({
  hideModal,
  randomChallenge,
  openCamera,
}) => {
  return (
    <SafeAreaView style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', flex: 1 }}>
      <SafeAreaView style={[styles.modalContainer, styles.elevation]}>
        <View style={styles.closeBtn}>
          <Pressable onPress={hideModal}>
            <CloseCircle color="orange" />
          </Pressable>
          <Text style={styles.modalHeader}>Challenge</Text>
        </View>
        <View style={{ marginVertical: 20 }}>
          <Text style={{ fontSize: 18, fontFamily: 'BubblegumSans' }}>
            I spy with my little eye .... {randomChallenge}
          </Text>
        </View>

        <Pressable style={styles.acceptChallengeBtn} onPress={openCamera}>
          <Text style={{ fontWeight: '600', fontFamily: 'BubblegumSans' }}>Accept Challenge</Text>
        </Pressable>
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default ChallengeModal;

const styles = StyleSheet.create({
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
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  closeBtn: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  modalHeader: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'BubblegumSans',
  },
  acceptChallengeBtn: {
    backgroundColor: 'orange',
    width: '42%',
    padding: 10,
    borderRadius: 8,
  },
});
