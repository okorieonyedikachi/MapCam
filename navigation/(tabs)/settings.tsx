import { More, Notification, Profile } from 'iconsax-react-native';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const SettingsList = [
  { icon: <Profile color="orange" />, title: 'Profile' },
  { icon: <Notification color="orange" />, title: 'Notification' },
  { icon: <More color="orange" />, title: 'More' },
];

type renderItemsProps = {
  title: string;
  icon: React.ReactElement;
};
const RenderItems = ({ title, icon }: renderItemsProps) => (
  <View style={styles.listContainer}>
    <View>{icon}</View>
    <Text>{title}</Text>
  </View>
);

const Settings = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0)' }}>
      <View style={styles.header}>
        <Text>Settings</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={SettingsList}
          renderItem={({ item }) => <RenderItems title={item.title} icon={item.icon} />}
        />
      </View>
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
    flex: 1,
    backgroundColor: 'white',
    marginTop: 10,
  },
  listContainer: {},
});
