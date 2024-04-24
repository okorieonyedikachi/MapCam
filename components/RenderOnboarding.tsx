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
      <View>
        <Text style={styles.itemsHeader}>{item.title}</Text>
        {/* <Text>{item.text}</Text> */}
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
  },
  itemsHeader: {
    textAlign: 'center',
    fontSize: 30,
  },
});
