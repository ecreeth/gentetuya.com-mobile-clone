import React from 'react';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {DrawerContent, HomeScreen} from './src/screens';
import {NavigationHeader} from './src/components';
import {ApplicationProvider} from './src/context';

// const URL =
//   "https://www.gentetuya.com/wp-json/wp/v2/posts?_fields=id,date,modified,link,title,content.rendered,author,excerpt.rendered,jetpack_featured_media_url&per_page=5&page=1";

enableScreens();

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Root() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: NavigationHeader,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <ApplicationProvider value={{hello: 'world'}}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Root"
          drawerContent={(props) => <DrawerContent {...props} />}>
          <Drawer.Screen
            name="Root"
            options={{title: 'Noticias'}}
            component={Root}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
}

export default App;
