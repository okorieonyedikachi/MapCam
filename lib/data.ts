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
    title: 'Lorem ipsum doro it amet',
    text: 'Lorem ipsum something something something',
    animation: require('../assets/animations/Map2 .json'),
    textColor: '',
    backgroundColor: '',
  },
  {
    id: 2,
    title: 'Lorem ipsum doro it amet',
    text: 'Lorem ipsum something something something',
    animation: require('../assets/animations/Detective.json'),
    textColor: '',
    backgroundColor: '',
  },
  {
    id: 3,
    title: 'Lorem ipsum doro it amet',
    text: 'Lorem ipsum something something something',
    animation: require('../assets/animations/Capture.json'),
    textColor: '',
    backgroundColor: '',
  },
];
