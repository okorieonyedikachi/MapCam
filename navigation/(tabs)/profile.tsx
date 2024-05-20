import { Location } from 'iconsax-react-native';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Profile = () => {
  // const profileList = ['name', 'email', 'city'];
  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={{ alignSelf: 'center', marginTop: 20 }}>
        <Text style={styles.header}>Profile</Text>
      </View>
      <View style={{ height: '75%', justifyContent: 'center' }}>
        <View style={styles.profilePhoto}>
          <Text>Photo</Text>
        </View>
        <View style={{ marginTop: 20, alignItems: 'center', gap: 15 }}>
          <Text style={{ fontFamily: 'BubblegumSans', fontSize: 30 }}>Cosmas Daniella</Text>
          <View
            style={{
              width: '60%',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ fontFamily: 'BubblegumSans', fontSize: 20, color: 'black' }}>
              Fun Fact :
            </Text>
            <Text
              style={{ fontFamily: 'BubblegumSans', fontSize: 20, color: 'grey', paddingLeft: 8 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vulputate ipsum nec
            </Text>
          </View>

          <View style={{ flexDirection: 'row', gap: 8 }}>
            <Location color="orange" />
            <Text style={{ fontFamily: 'BubblegumSans', fontSize: 20, color: 'black' }}>
              Lagos, Nigeria
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  header: {
    fontFamily: 'BubblegumSans',
    fontSize: 20,
    color: 'orange',
  },
  profilePhoto: {
    height: 170,
    width: 170,
    backgroundColor: 'orange',
    alignSelf: 'center',
    marginTop: 40,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
