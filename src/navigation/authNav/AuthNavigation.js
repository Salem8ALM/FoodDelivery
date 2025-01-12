import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator, createNavtiveStackNavigator} from "@react-navigation/native-stack"
import Login from '../../components/Login';
import Signup from '../../components/Signup';

const Stack= createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Signup' component={Signup}/>


    </Stack.Navigator>
  )
}

export default AuthNavigation

const styles = StyleSheet.create({})