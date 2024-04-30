import { ArrowLeft2, ArrowRight2 } from 'iconsax-react-native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Pagination = () => {
  return (
    <View style={styles.container}>
      <ArrowLeft2 color="black" />
      <Text>Pagination</Text>
      <ArrowRight2 color="black" />
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});
