import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ArrowLeft2 } from 'iconsax-react-native';
import { StackParamList } from 'navigation/tab-navigation';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type cameraScreenNavigationProps = StackNavigationProp<StackParamList, 'CameraScreen'>;

const CameraScreen = () => {
  const navigation = useNavigation<cameraScreenNavigationProps>();

  return (
    <View style={{ alignItems: 'center', flex: 1, backgroundColor: 'black' }}>
      <View style={styles.camera}>
        <Pressable onPress={() => navigation.navigate('Home')} style={styles.backBtn}>
          <ArrowLeft2 color="orange" />
        </Pressable>

        <Text>Camera</Text>
      </View>
      <View style={styles.camControls}>
        <Pressable style={styles.snapBtn}>
          <View style={styles.snapBtnInner} />
        </Pressable>
      </View>
    </View>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  backBtn: {
    left: 0,
    width: 50,
    height: 50,
    marginLeft: 20,
    backgroundColor: 'rgba(218, 223, 225, .4)',
    position: 'absolute',
    top: 80,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
    // aspectRatio: 4 / 3,
    // position: 'absolute',
  },
  camControls: {
    width: '100%',
    flexDirection: 'row',
    height: 130,
    alignItems: 'center',
    justifyContent: 'center',
  },
  snapBtn: {
    backgroundColor: 'orange',
    width: 85,
    height: 85,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  snapBtnInner: {
    width: 72,
    height: 72,
    backgroundColor: 'white',
    borderRadius: 120,
    margin: 'auto',
  },
});
