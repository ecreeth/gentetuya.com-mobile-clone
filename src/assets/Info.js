import React from 'react';
import {Pressable} from 'react-native';
import {Svg, Path} from 'react-native-svg';

function Info({onPress, ...rest}) {
  return (
    <Pressable onPress={onPress} android_ripple={{color: '#eee'}}>
      <Svg
        {...rest}
        width={25}
        height={25}
        fill="none"
        stroke="#333"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </Svg>
    </Pressable>
  );
}

export default Info;
