import { AnimationObject } from 'lottie-react-native';

export const gameList = [
  'something red',
  'something round',
  'something furry',
  'something shiny.',
  'something with a number on it',
  'something made of wood',
  'something that makes a sound',
  'something you can climb on',
  'something that tells time',
  'something green',
  'something that has stripes',
  'something that is made of two different materials',
  'something that is reflected in the water',
  ' something blue',
];

export interface OnboardingDataType {
  id: number;
  title: string;
  text: string;
  animation: AnimationObject;
  textColor: string;
  backgroundColor: string;
}

export const OnboardingData: OnboardingDataType[] = [
  {
    id: 1,
    title: 'Explore, Challenge, Capture',
    text: 'Embark o n a real-world adventure . Discover your surroundings and accept photo challenges',
    animation: require('../assets/animations/Map2.json'),
    textColor: '',
    backgroundColor: '#fffcc9',
  },
  {
    id: 2,
    title: 'Unique challenge awaits',
    text: 'Our app generates new challenges based on your location , testing your observation skills',
    animation: require('../assets/animations/Detective.json'),
    textColor: '',
    backgroundColor: '#FFEC9E',
  },
  {
    id: 3,
    title: 'Capture your finds ',
    text: 'Snap photos of the challenged objects. Show off your exploration skills',
    animation: require('../assets/animations/Capture.json'),
    textColor: '',
    backgroundColor: '#ffcd80',
  },
];
