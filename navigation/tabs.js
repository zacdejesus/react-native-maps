import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';

import HomeScreen from "../screens/HomeScreen";
import FieldsScreen from "../screens/FieldsScreen";
import MapScreen from "../screens/MapScreen";
import SettingScreen from "../screens/SettingScreen";

const tab = createBottomTabNavigator()

const tabs = () => {
    return (
        <tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    switch (route.name) {
                        case 'Home':
                            iconName = focused
                                ? 'ios-home'
                                : 'ios-home-outline';
                            break;
                        case 'Fields':
                            iconName = focused
                                ? 'ios-grid'
                                : 'ios-grid-outline';
                            break;
                        case 'Map':
                            iconName = focused
                                ? 'ios-map'
                                : 'ios-map-outline';
                            break;
                        case 'Setting':
                            iconName = focused
                                ? 'ios-settings'
                                : 'ios-settings-outline';
                            break;
                        default:
                            break;
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}

            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    elevation: 15
                }
            }}
        >
            <tab.Screen name="Setting" component={SettingScreen} />
            <tab.Screen name="Fields" component={FieldsScreen} />
            <tab.Screen name="Map" component={MapScreen} />
            <tab.Screen name="Home" component={HomeScreen} />
        </tab.Navigator>
    );
}

export default tabs;