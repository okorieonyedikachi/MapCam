import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import RenderOnboarding from 'components/RenderOnboarding';
import { OnboardingData } from 'lib/data';
import { StackParamList } from 'navigation/tab-navigation';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';

type OnboardingScreenNavigationProps = StackNavigationProp<StackParamList, 'Onboarding'>;
const OnboardingScreen = () => {
  const navigation = useNavigation<OnboardingScreenNavigationProps>();
  const navigateHome = () => {
    navigation.navigate('App');
  };
  const flatListIndex = useSharedValue(0);
  const onViewableItemsChanged = () => {};
  return (
    <View style={styles.container}>
      <FlatList
        data={OnboardingData}
        renderItem={({ item, index }) => <RenderOnboarding item={item} index={index} />}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        scrollEventThrottle={16}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        // viewabilityConfig={{minimumViewTime: 300, viewAreaCoveragePercentThreshold: 10}}
        onViewableItemsChanged={onViewableItemsChanged}
      />
      {/* <Pressable onPress={navigateHome}>
        <Text>Home</Text>
      </Pressable> */}
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
