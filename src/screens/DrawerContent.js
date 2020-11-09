import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';
import {
  Contact,
  Denunciation,
  Info,
  ExternalLink,
  News,
  Videos,
  Radio,
} from '../assets';

function DrawerContent({navigation, ...props}) {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.header}>
            <Text style={styles.title}>GenteTuya.com</Text>
          </View>
          <View style={styles.divider}>
            <DrawerItem
              icon={News}
              label="Noticias"
              labelStyle={styles.drawerItem}
              onPress={() => navigation.navigate('HomeScreen')}
            />
            <DrawerItem
              icon={Radio}
              label="Radio"
              labelStyle={styles.drawerItem}
              onPress={() => navigation.navigate('RadioScreen')}
            />
            <DrawerItem
              icon={ExternalLink}
              label="CDN TV"
              labelStyle={styles.drawerItem}
              onPress={() => console.log('ExternalLink')}
            />
            <DrawerItem
              icon={Videos}
              label="Videos"
              labelStyle={styles.drawerItem}
              onPress={() => navigation.navigate('VideoScreen')}
            />
            <DrawerItem
              icon={Denunciation}
              label="Denuncias"
              labelStyle={styles.drawerItem}
              onPress={() => navigation.navigate('DenunciationScreen')}
            />
            <DrawerItem
              icon={ExternalLink}
              label="Instagram"
              labelStyle={styles.drawerItem}
              onPress={() => console.log('ExternalLink')}
            />
            <DrawerItem
              icon={Contact}
              label="Contactos"
              labelStyle={styles.drawerItem}
              onPress={() => navigation.navigate('ContactScreen')}
            />
            <DrawerItem
              icon={Info}
              label="Informaci&oacute;n"
              labelStyle={styles.drawerItem}
              onPress={() => navigation.navigate('InformationScreen')}
            />
          </View>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 5,
    marginHorizontal: 15,
  },
  drawerContent: {
    flex: 1,
  },
  drawerItem: {
    color: '#1B224E',
    marginLeft: -20,
  },
  title: {
    fontSize: 25,
    marginVertical: 3,
  },
  divider: {
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
});

export default DrawerContent;
