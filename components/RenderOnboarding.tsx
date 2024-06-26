import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { OnboardingDataType } from 'lib/data';
import LottieView from 'lottie-react-native';
import { StackParamList } from 'navigation/tab-navigation';
import { Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

// import Pagination from './Pagination';
interface Props {
  item: OnboardingDataType;
  index: number;
}
type OnboardingScreenNavigationProps = StackNavigationProp<StackParamList, 'Onboarding'>;

const RenderOnboarding = ({ item, index }: Props) => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  const navigation = useNavigation<OnboardingScreenNavigationProps>();
  const navigateLoginScreen = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={[styles.itemContainer, { width: SCREEN_WIDTH, backgroundColor: '#fffaeb' }]}>
      <Pressable onPressIn={navigateLoginScreen} style={[styles.skipBtn]}>
        <Text
          style={{
            color: 'grey',
            fontSize: 23,
            fontFamily: 'BubblegumSans',
            alignSelf: 'flex-end',
          }}>
          Skip
        </Text>
      </Pressable>
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
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
      {/* <Pagination /> */}
      {item.id === 3 && (
        <Pressable style={styles.startButton} onPress={navigateLoginScreen}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontFamily: 'BubblegumSans',
              fontWeight: '800',
            }}>
            GET STARTED
          </Text>
        </Pressable>
      )}
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
  skipBtn: {
    paddingRight: 20,
    width: 60,
    height: 40,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    gap: 20,
    paddingVertical: 50,
  },
  itemsHeader: {
    textAlign: 'center',
    fontSize: 50,
    fontWeight: '500',
    fontFamily: 'BubblegumSans',
  },
  itemText: {
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 28,
    fontFamily: 'BubblegumSans',
  },
  startButton: {
    backgroundColor: 'orange',
    width: '50%',
    height: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  pagination: {
    bottom: 0,
    backgroundColor: 'red',
  },
});
