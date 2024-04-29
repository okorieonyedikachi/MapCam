import { useFonts } from 'expo-font';
import { OnboardingDataType } from 'lib/data';
import LottieView from 'lottie-react-native';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
interface Props {
  item: OnboardingDataType;
  index: number;
}

const RenderOnboarding = ({ item, index }: Props) => {
  const [fontsLoaded] = useFonts({
    'SourceCodePro-Bubblegum-Sans': require('../assets/fonts/BubblegumSans-Regular.ttf'),
  });

  const { width: SCREEN_WIDTH } = useWindowDimensions();

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <View
      style={[
        styles.itemContainer,
        { width: SCREEN_WIDTH, backgroundColor: item.backgroundColor },
      ]}>
      <View>
        <LottieView
          source={item.animation}
          style={{ width: SCREEN_WIDTH * 0.9, height: SCREEN_WIDTH * 0.9 }}
          autoPlay
          loop
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.itemsHeader, { color: item.textColor }]}>{item.title}</Text>
        <Text style={[styles.itemText, { color: item.textColor }]}>{item.text}</Text>
      </View>
    </View>
  );
};

export default RenderOnboarding;

const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: 120,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  textContainer: {
    gap: 20,
    paddingVertical: 50,
  },
  itemsHeader: {
    textAlign: 'center',
    fontSize: 50,
    fontWeight: '500',
    fontFamily: 'SourceCodePro-Bubblegum-Sans',
  },
  itemText: {
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 28,
    fontFamily: 'SourceCodePro-Bubblegum-Sans',
  },
});
