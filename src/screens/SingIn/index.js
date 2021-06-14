import React, { useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import {Image} from 'react-native';
import {Container,
        InputArea,
        CustomButton,
        CustomButtonText,
        SingMessegerButton,
        SingMessegerButtonText,
        SingMessegerButtonTextBold,

        } from '../SingIn/styles';

import SingInputs from '../../components/SingInputs';

import Api from '../../Api';


export default () => {

    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleSingClick =  () =>{
     
      if(emailField !='' && passwordField  !=''){
        let res =   Api.singIn (emailField, passwordField);
       
        
      }else{
        alert("preencha os campos");
      }   

    }

    const handleMessageButtonClick = () =>{
        navigation.reset({
          routes:[{name: 'SingUp'}]
        });
    }

    

  return(
        <Container>
            <Image source = {require('C:/Users/Lucas Benevinuto/agendaaeBarber/src/assets/logo.png')} 
            style = {{ width: 160, height: 160, }}
              />
          <InputArea>

            <SingInputs 
                placeholder="Email" 
                value={emailField}
                onChangeText={t=>setEmailField(t)}
            />
            <SingInputs 
                placeholder="Senha"
                value={passwordField}
                onChangeText={t=>setPasswordField(t)}
                password={true}
            />

            

             <CustomButton onPress={handleSingClick}>
               <CustomButtonText>LOGIN</CustomButtonText>
             </CustomButton>
          </InputArea>

            <SingMessegerButton onPress={handleMessageButtonClick}>
            <SingMessegerButtonText> Ainda não possui uma conta? </SingMessegerButtonText>
            <SingMessegerButtonTextBold> Cadastre-se </SingMessegerButtonTextBold>
            </SingMessegerButton>

        </Container>


  );
}