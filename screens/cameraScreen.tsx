import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Camera } from 'expo-camera';
import { ArrowLeft2, Repeat, Save2 } from 'iconsax-react-native';
import { StackParamList } from 'navigation/tab-navigation';
import { useEffect, useRef, useState } from 'react';
import { Pressable, StyleSheet, View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type cameraScreenNavigationProps = StackNavigationProp<StackParamList, 'CameraScreen'>;

const CameraScreen = () => {
  const navigation = useNavigation<cameraScreenNavigationProps>();

  const cameraRef = useRef<Camera | null>(null);
  const [hasCameraPermissions, setHasCameraPermission] = useState<
    Camera.CameraStatus | undefined
  >();
  const [photo, setPhoto] = useState<string | undefined>();

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === 'granted');
    })();
  }, [cameraRef]);

  if (hasCameraPermissions === undefined) {
    return <Text>Requesting Permissions ...</Text>;
  } else if (!hasCameraPermissions) {
    return (
      <SafeAreaView>
        <Text>Permission not granted, change in settings </Text>
      </SafeAreaView>
    );
  }

  const takePhoto = async () => {
    if (cameraRef) {
      try {
        const newPhoto = await cameraRef.current?.takePictureAsync();
        console.log(newPhoto);
        setPhoto(newPhoto.uri);
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <View style={{ alignItems: 'center', flex: 1, backgroundColor: 'black' }}>
      {!photo ? (
        <Camera style={styles.camera} ref={cameraRef} autoFocus>
          <Pressable onPress={() => navigation.navigate('Home')} style={styles.backBtn}>
            <ArrowLeft2 color="orange" />
          </Pressable>
        </Camera>
      ) : (
        <Image source={{ uri: photo }} style={styles.preview} />
      )}
      <View style={{ backgroundColor: 'red', width: '100%', height: '5%' }}>
        {photo ? (
          <View style={{ flexDirection: 'row', backgroundColor: 'blue' }}>
            <Pressable style={styles.previewBtns}>
              <Text>Re-Take</Text>
              <Repeat />
            </Pressable>
            <Pressable style={styles.previewBtns}>
              <Text>Save</Text>
              <Save2 />
            </Pressable>
          </View>
        ) : (
          <View style={styles.camControls}>
            <Pressable style={styles.snapBtn} onPress={takePhoto}>
              <View style={styles.snapBtnInner} />
            </Pressable>
          </View>
        )}
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
  preview: {
    flex: 1,
    alignSelf: 'stretch',
  },
  previewBtns: {
    flexDirection: 'row',
    gap: 4,
  },
});
