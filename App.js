import React from 'react';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  HomeScreen,
  RadioScreen,
  VideoScreen,
  ContactScreen,
  DrawerContent,
  InformationScreen,
  DenunciationScreen,
} from './src/screens';
import {NavigationHeader} from './src/components';
import {ApplicationProvider} from './src/context';

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
      <Stack.Screen name="RadioScreen" component={RadioScreen} />
      <Stack.Screen name="VideoScreen" component={VideoScreen} />
      <Stack.Screen name="DenunciationScreen" component={DenunciationScreen} />
      <Stack.Screen name="ContactScreen" component={ContactScreen} />
      <Stack.Screen name="InformationScreen" component={InformationScreen} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <ApplicationProvider value={{hello: 'world'}}>
      <NavigationContainer>
        <Drawer.Navigator
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
