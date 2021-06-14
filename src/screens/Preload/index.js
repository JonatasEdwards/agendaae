import React, {useEffect} from 'react';
import { Image} from 'react-native';
import {Container, LoadingIcon } from './styles';
import { useNavigation } from '@react-navigation/native';
import firebase from "../../config_firebase";





export default () => {

  const navigation =  useNavigation();


firebase.auth().onAuthStateChanged(function(user) {
  var user = firebase.auth().currentUser;
  if (user) {
      //alert("Ja existe usuario");
      navigation.reset({
      
        routes:[{name: 'Home'}]
    });
  } else {
    alert("Nao existe usuario logado");
    navigation.reset({
      
      routes:[{name: 'SingIn'}]
  });
  }
});
  
  
  return(
        <Container>
            <Image source = {require('C:/Users/Lucas Benevinuto/agendaaeBarber/src/assets/logo.png')} 
            style = {{ width: 160, height: 160, }}
              />
            <LoadingIcon size="large" color="#000"/>

        </Container>
  );
  }