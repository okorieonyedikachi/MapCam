import { ArrowRight2, More, Notification, Profile } from 'iconsax-react-native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

type SettingsListType = {
  title: string;
  icon: React.ReactElement;
  dropdownItems: string[];
  isOpen?: boolean;
};

const SettingsList: SettingsListType[] = [
  {
    icon: <Profile color="orange" size={18} />,
    title: 'Account',
    dropdownItems: ['Edit profile', 'Delete account'],
  },
  {
    icon: <Notification color="orange" size={18} />,
    title: 'Notification',
    dropdownItems: ['Application notification'],
  },
  {
    icon: <More color="orange" size={18} />,
    title: 'More',
    dropdownItems: ['Help', 'Report a bug', 'Send a feedback'],
  },
];

type renderItemsProps = {
  item: SettingsListType;
  index: number;
};

const Settings = () => {
  const RenderItems = ({ item, index }: renderItemsProps) => (
    <View style={styles.listContainer}>
      <View style={styles.listRow}>
        {item.icon}
        <Text style={styles.listTitle}>{item.title}</Text>
      </View>

      <View style={styles.dropdownItemsBox}>
        {item.dropdownItems.map((dropdownItems, index) => (
          <View
            style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
            key={index}>
            <Text style={styles.dropdownItems}>{dropdownItems}</Text>
            <ArrowRight2 color="grey" size={15} />
          </View>
        ))}
      </View>
    </View>
  );
  return (
    <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0)' }}>
      <View style={styles.header}>
        <Text style={{ fontSize: 20, fontWeight: '500', color: '#002E63', marginBottom: 15 }}>
          Settings
        </Text>
      </View>
      <View style={styles.container}>
        <FlatList data={SettingsList} renderItem={RenderItems} />
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'orange',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 10,
    padding: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  listContainer: {
    paddingBottom: 10,
  },
  listRow: {
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 15,
    gap: 10,
    padding: 10,
    alignItems: 'center',
    borderBottomColor: 'orange',
    borderBottomWidth: 0.2,
  },
  listTitle: {
    fontSize: 17,
    fontWeight: '500',
  },
  dropdownItemsBox: {
    gap: 20,
    margin: 10,
  },
  dropdownItems: {
    color: 'grey',
    fontSize: 17,
  },
});
