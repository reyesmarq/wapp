import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import * as React from "react";
import {ColorSchemeName, Text, View} from "react-native";
import Colors from "../constants/Colors";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import NotFoundScreen from "../screens/NotFoundScreen";
import {RootStackParamList} from "../types";
import MainTabNavigator from "./MainTabNavigator";
import ChatsScreen from "../screens/ChatsScreen";
import ChatRoomScren from "../screens/ChatRoomScreen";
import ContactsScreen from "../screens/ContactsScreen";

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.light.tint,
          shadowOpacity: 0,
          elevation: 0,
        },
        headerTintColor: Colors.light.background,
        headerTitleAlign: "left",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Root"
        options={{
          title: "wapp",
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                width: 60,
                justifyContent: "space-between",
                marginRight: 10,
              }}
            >
              <FontAwesome name="search" color="white" size={22} />
              <Entypo name="dots-three-vertical" color="white" size={22} />
            </View>
          ),
        }}
        component={MainTabNavigator}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoomScren}
        options={({route}) => ({
          title: route.params.name,
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                width: 100,
                justifyContent: "space-between",
                marginRight: 10,
              }}
            >
              <FontAwesome name="video-camera" color="white" size={22} />
              <FontAwesome name="phone" color="white" size={22} />
              <Entypo name="dots-three-vertical" color="white" size={22} />
            </View>
          ),
        })}
      />
      <Stack.Screen name="Contacts" component={ContactsScreen} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{title: "Oops!"}}
      />
    </Stack.Navigator>
  );
}
