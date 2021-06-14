import React from 'react';
import  { NavigationContainer} from '@react-navigation/native';
import UserContextProvider from './src/contexs/UserContex';
import MainStak from './src/stacks/MainStack';


export default () => {
  return (
    <UserContextProvider>
        <NavigationContainer>
            <MainStak />
        </NavigationContainer>
    </UserContextProvider>
   
  );
}

