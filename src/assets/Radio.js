import React from 'react';
import {Pressable} from 'react-native';
import {Svg, Path} from 'react-native-svg';

function ExternalLink({onPress, ...rest}) {
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
          d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
        />
      </Svg>
    </Pressable>
  );
}

export default ExternalLink;