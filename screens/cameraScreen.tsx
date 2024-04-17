import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ArrowLeft2 } from 'iconsax-react-native';
import { StackParamList } from 'navigation/tab-navigation';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type cameraScreenNavigationProps = StackNavigationProp<StackParamList, 'CameraScreen'>;

const CameraScreen = () => {
  const navigation = useNavigation<cameraScreenNavigationProps>();

  return (
    <SafeAreaView style={{ alignItems: 'center', flex: 1 }}>
      <View style={{ left: 0, width: '100%', paddingBottom: 10, paddingLeft: 10 }}>
        <Pressable onPress={() => navigation.navigate('Home')}>
          <ArrowLeft2 color="orange" />
        </Pressable>
      </View>
      <View style={styles.camera}>
        <Text>Camera</Text>
      </View>
      <View style={styles.camControls}>
        <Text>retake</Text>
      </View>
    </SafeAreaView>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    backgroundColor: 'red',
    width: '100%',
    // aspectRatio: 4 / 3,
  },
  camControls: {
    width: '100%',
    backgroundColor: 'black',
  },
});
