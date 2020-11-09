import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DrawerActions, useNavigation} from '@react-navigation/native';

import {Refresh, Menu} from '../assets';

function NavigationHeader() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Menu
        onPress={() => {
          navigation.dispatch(DrawerActions.openDrawer());
        }}
      />
      <Text style={styles.title}>GenteTuya.com</Text>
      <Refresh />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  title: {
    color: '#333',
    fontSize: 17,
  },
});

export default NavigationHeader;
