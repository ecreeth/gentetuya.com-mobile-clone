import React from 'react';
import {Pressable} from 'react-native';
import {Svg, Path} from 'react-native-svg';

function Videos({onPress, ...rest}) {
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
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </Svg>
    </Pressable>
  );
}

export default Videos;
