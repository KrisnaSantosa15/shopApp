import React from 'react';
import { View, Text, Button, Image, Platform } from 'react-native';
import  { HeaderButton }  from 'react-navigation-header-buttons'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Ionicons} from '@expo/vector-icons';

import Colors from '../../constants/Colors';

const Stack = createNativeStackNavigator();

const CustomHeaderButton = props => {
	return (
		<HeaderButton {...props} IconComponent={Ionicons} iconSize={23} color={Platform.OS === 'android' ? 'white' : Colors.primary}></HeaderButton>
	)
}

export default CustomHeaderButton;
