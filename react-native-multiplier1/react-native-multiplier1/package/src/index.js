/**
 * @format
 */


import React from 'react';

import {View,Text} from 'react-native';
//import { adder } from './Adder/Add';
import { adder } from './Component/Adder/Add';
import { multiply } from './Component/Multiplier/Multiplier';

function App(){

  return (
    <View><Text>Hello-</Text></View>
  )

}

 function square(a){
    //console.log(a,b)
    return (a * a);
  }


export {App, adder, multiply, square};

// import {
//   requireNativeComponent,
//   UIManager,
//   Platform,
//   ViewStyle,
// } from 'react-native';

// const LINKING_ERROR =
//   `The package 'react-native-multiplier' doesn't seem to be linked. Make sure: \n\n` +
//   Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
//   '- You rebuilt the app after installing the package\n' +
//   '- You are not using Expo Go\n';

// type MultiplierProps = {
//   color: string;
//   style: ViewStyle;
// };

// const ComponentName = 'MultiplierView';

// export const MultiplierView =
//   UIManager.getViewManagerConfig(ComponentName) != null
//     ? requireNativeComponent<MultiplierProps>(ComponentName)
//     : () => {
//         throw new Error(LINKING_ERROR);
//       };
