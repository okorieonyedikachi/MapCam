import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ArrowLeft2 } from 'iconsax-react-native';
import { StackParamList } from 'navigation/tab-navigation';
import { Pressable, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type cameraScreenNavigationProps = StackNavigationProp<StackParamList, 'CameraScreen'>;

const CameraScreen = () => {
  const navigation = useNavigation<cameraScreenNavigationProps>();

  return (
    <SafeAreaView style={{ alignItems: 'center', backgroundColor: 'red', flex: 1 }}>
      <Pressable onPress={() => navigation.navigate('Home')}>
        <ArrowLeft2 />
      </Pressable>
      <Text>CameraScreen</Text>
    </SafeAreaView>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({});
