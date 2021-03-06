/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {FontAwesome, Ionicons} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import {ColorSchemeName, Pressable, Image, View, TextInput, SafeAreaView} from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import HomeScreen from '../screens/HomeScreen';
import AccountScreen from '../screens/AccountScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import {Badge, SearchBar} from "react-native-elements";
import styleToBarStyle from "expo-status-bar/build/styleToBarStyle";

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
          //tabBarActiveBackgroundColor:Colors[colorScheme].background,
          tabBarActiveTintColor: Colors[colorScheme].tint,
          //tabBarInactiveTintColor:Colors[colorScheme].background,
          //tabBarInactiveBackgroundColor:Colors[colorScheme].tint,
          headerShown: true,
      }}
    >
        <BottomTab.Screen
            name="Home"
            component={HomeScreen}
            options={({ navigation }: RootTabScreenProps<'Home'>) => ({
                headerTitle:"xx",
                title: 'Home',
                tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
                headerRight: () => (
                    <Pressable
                        onPress={() => navigation.navigate('Modal')}
                        style={({ pressed }) => ({
                            opacity: pressed ? 0.5 : 1,
                        })}>

                        <FontAwesome
                            name="bell-o"
                            size={25}
                            color={Colors[colorScheme].text}
                            style={{ marginRight: 15 }}
                        />
                        <Badge
                            status="error"
                            value={9}
                            containerStyle={{ position: 'absolute', top: 0, left: 12 }}
                        />

                    </Pressable>
                ),
                headerLeft: () => (
                    <Pressable
                        onPress={() => navigation.navigate('Modal')}
                        style={({ pressed }) => ({
                            opacity: pressed ? 0.5 : 1,
                        })}>

                        <Image
                            style={{ width: 30, height: 30 ,marginLeft:15}}
                            source={require('../assets/images/icon.png')}
                        />

                    </Pressable>
                ),
            })}
        />
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'Tab One',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
        <BottomTab.Screen
            name="Account"
            component={AccountScreen}
            options={{
                title: 'Account',
                tabBarIcon: ({ color }) => <TabBarIcon name="user-circle-o" color={color} />,
            }}
        />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
