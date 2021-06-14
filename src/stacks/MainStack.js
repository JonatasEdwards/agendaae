import React from 'react';
import   { createStackNavigator } from '@react-navigation/stack';
import Preload from '../screens/Preload';
import SingIn from '../screens/SingIn';
import SingUp from '../screens/SingUp';
import MainTab from '../stacks/MainTab';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Appointments from '../screens/Appointments';
import Favorites from '../screens/Favorites';
import Profile from '../screens/Profile';


const Stack =  createStackNavigator();

export default () => (
     <Stack.Navigator
        initialRouteName = "Preload"
        screenOptions={{
            headerShown: false
        }}>
        <Stack.Screen name="Preload" component={Preload} />
         <Stack.Screen name="SingIn" component={SingIn} />
         <Stack.Screen name="SingUp" component={SingUp} />
         <Stack.Screen name="MainTab" component={MainTab} />
         <Stack.Screen name="Home" component={Home} />
         <Stack.Screen name="Search" component= {Search}/>
         <Stack.Screen name="Appointments" component= {Appointments}/>
         <Stack.Screen name="Favorites" component= {Favorites}/>
         <Stack.Screen name="Profile" component= {Profile}/>
         
        
     </Stack.Navigator>   
);