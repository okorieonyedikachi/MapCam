import { OnboardingData, OnboardingDataType } from 'lib/data';
import LottieView from 'lottie-react-native';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';

interface Props {
  item: OnboardingDataType;
  index: number;
}

const RenderOnboarding = ({ item, index }: Props) => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  return (
    <View style={styles.itemContainer}>
      <View>
        <LottieView
          source={item.animation}
          style={{ width: SCREEN_WIDTH * 0.9, height: SCREEN_WIDTH * 0.9 }}
          autoPlay
          loop
        />
      </View>
    </View>
  );
};

export default RenderOnboarding;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'red',
    marginBottom: 120,
  },
});
