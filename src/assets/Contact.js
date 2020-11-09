import React from 'react';
import {Pressable} from 'react-native';
import {Svg, Path} from 'react-native-svg';

function Contact({onPress, ...rest}) {
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
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </Svg>
    </Pressable>
  );
}

export default Contact;
