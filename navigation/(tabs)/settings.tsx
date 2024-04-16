import { StyleSheet, Text, View } from 'react-native';

const Settings = () => {
  // const settingList = ['notification', 'account', 'help', 'about'];

  return (
    <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0)' }}>
      <View style={styles.header}>
        <Text>Settings</Text>
      </View>
      <View style={styles.container} />
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'orange',
    height: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
  },
  container: {
    borderRadius: 60,
    flex: 1,
    backgroundColor: 'white',
    marginTop: 10,
  },
});
