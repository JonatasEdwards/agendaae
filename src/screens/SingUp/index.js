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
    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleSingClick = () =>{
      
      if(emailField !='' && passwordField  !='' && nameField != ''){
          
        let res =   Api.singUp (emailField, passwordField);
       
      }else{
           
        alert("Preencha todos os campos!");
        
      }   
   
    }

    const handleMessageButtonClick = () =>{
        navigation.reset({
          routes:[{name: 'SingIn'}]
        });
    }

    

  return(
        <Container>
            <Image source = {require('C:/Users/Lucas Benevinuto/agendaaeBarber/src/assets/logo.png')} 
            style = {{ width: 160, height: 160, }}
              />
          <InputArea>

          <SingInputs 
                placeholder="Nome" 
                value={nameField}
                onChangeText={t=>setNameField(t)}
            />

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
               <CustomButtonText>CADASTRAR</CustomButtonText>
             </CustomButton>
          </InputArea>

            <SingMessegerButton onPress={handleMessageButtonClick}>
            <SingMessegerButtonText> Já possui uma conta? </SingMessegerButtonText>
            <SingMessegerButtonTextBold> Faça Login </SingMessegerButtonTextBold>
            </SingMessegerButton>

        </Container>


  );
}