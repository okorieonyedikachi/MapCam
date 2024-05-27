import RenderOnboarding from 'components/RenderOnboarding';
import { OnboardingData } from 'lib/data';
import { FlatList, StyleSheet, View } from 'react-native';

const OnboardingScreen = () => {
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
        onViewableItemsChanged={onViewableItemsChanged}
      />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
