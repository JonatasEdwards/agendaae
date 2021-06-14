import React from 'react';
import styled from  'styled-components/native';


export const Container = styled.SafeAreaView`
    background-color: #ff914c;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const InputArea = styled.View`
    width: 90%
    paddin: 40px;
`;

export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    background-color: #000 ;
    border-radius: 30px;
    justify-content: center;
    align-Items: center;
    margin-top: 50px;
`;
export const CustomButtonText = styled.Text`
    font-size: 18px;
    color: #FFF;
`;

export const SingMessegerButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
    marging-bottom: 20px;
`;
export const SingMessegerButtonText = styled.Text`
    font-size: 16px;
    color: #000;
`;
export const SingMessegerButtonTextBold = styled.Text`
    font-size: 16px;
    color: #000;
    font-weight: bold;
    margin-left: 5px
`;

/* InputArea,
CustomButton,
CustomButtonText,
SingMessegerButton,
SingMessegerButtonText,
SingMessegerButtonTextBold, */

