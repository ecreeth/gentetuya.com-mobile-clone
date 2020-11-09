import React from 'react';
import {Pressable} from 'react-native';
import {Svg, Path} from 'react-native-svg';

function News({onPress, ...rest}) {
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
          d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
        />
      </Svg>
    </Pressable>
  );
}

export default News;
