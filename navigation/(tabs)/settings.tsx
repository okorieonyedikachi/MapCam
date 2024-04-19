import { More, Notification, Profile } from 'iconsax-react-native';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

type SettingsListType = {
  title: string;
  icon: React.ReactElement;
  dropdownItems: string[];
};

const SettingsList: SettingsListType[] = [
  {
    icon: <Profile color="orange" />,
    title: 'Account',
    dropdownItems: ['Edit profile', 'Delete account'],
  },
  {
    icon: <Notification color="orange" />,
    title: 'Notification',
    dropdownItems: ['Application notification'],
  },
  {
    icon: <More color="orange" />,
    title: 'More',
    dropdownItems: ['Report a bug', 'Send a feedback'],
  },
];

type renderItemsProps = {
  item: SettingsListType;
  index: number;
};

const Settings = () => {
  // const [settingsList, setSettingList] = useState<SettingsList[]>();

  const RenderItems = ({ item, index }: renderItemsProps) => (
    <View style={styles.listContainer}>
      <View style={styles.listRow}>
        {item.icon}
        <Text style={styles.listTitle}>{item.title}</Text>
      </View>
      <View>
        {item.dropdownItems.map((dropdownItems) => (
          <Text key={dropdownItems}>{dropdownItems}</Text>
        ))}
      </View>
    </View>
  );
  return (
    <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0)' }}>
      <View style={styles.header}>
        <Text style={{ fontSize: 30, fontWeight: '600', color: '#002E63', marginBottom: 20 }}>
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
    height: '25%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderRadius: 60,
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
    borderBottomColor: 'orange',
    borderBottomWidth: 0.2,
    paddingBottom: 10,
  },
  listRow: {
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 15,
    gap: 10,
    padding: 10,
    alignItems: 'center',
  },
  listTitle: {
    fontSize: 23,
    fontWeight: '500',
  },
});
