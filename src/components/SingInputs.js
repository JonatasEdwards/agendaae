import React from 'react';
import styled from  'styled-components/native';
import {Image} from 'react-native';

const InputArea = styled.View`
    width:100%;
    height: 60px;
    background-color: #FFF;
    flex-direction: row;
    border-radius: 30px;
    padding-left: 15px;
    align-Items: center;
    margin-top: 20px;

`;
const Input = styled.TextInput`
    flex: 1;
    font-size: 16;
    color: #000;
    margin-left: 10px;
    font-weight: bold;
`;

export default ({placeholder, value, onChangeText, password}) => { 
    return(
        <InputArea>
            <Input 
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
            />
        </InputArea>
    );
}