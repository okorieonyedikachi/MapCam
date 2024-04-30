import { Text, Pressable, StyleSheet } from 'react-native';

type ImageButtonsProps = {
  icon: React.ReactElement;
  title: string;
  onPress: () => void;
};
const ImageButtons = ({ icon, title, onPress }: ImageButtonsProps) => {
  return (
    <Pressable style={styles.buttonContainer} onPress={onPress}>
      {icon}
      <Text style={{ fontSize: 20, color: '#e5e5e5', fontFamily: 'BubblegumSans' }}>{title}</Text>
    </Pressable>
  );
};
export default ImageButtons;
const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    padding: 12,
    margin: 20,
    gap: 10,
    backgroundColor: '#616365',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
