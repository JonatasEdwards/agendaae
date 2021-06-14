import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #ff914c;
`;
export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 20px;
`;
export const HeaderArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const HeaderTitle = styled.Text`
    width: 250px;
    font-size: 24px;
    font-weight: bold;
    color: #000;
`;
export const SearchButton = styled.TouchableOpacity`
    width: 26px;
    height: 26px;
`;
export const LocationArea = styled.View`
    background-color: #ffa366
    height: 60px;
    border-radius: 30px;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 30px;
`;
export const LocationInput = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #000;
`;
export const LocationFinder = styled.TouchableOpacity`
    width: 24px;
    height: 24px;
`;
export const ListArea = styled.View`
    magin-top: 20px;
    magin-bottom: 20px;
`;
export const Area = styled.TouchableOpacity`
    background-color: #fff;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 20px;
    padding: 15px
    flex-direction: row;

`;

export const InforArea = styled.View`
    margin-left: 20px;
    justify-content: space-between;

`;

export const UserName = styled.Text`
    fonte-size: 40px;
    font-weight: bold;
    align-self: center;
`;

export const Especialidades = styled.Text`
    width: 85px;
    height: 26px;
    border: 1px solid #fff;
    border
`;



/* 
        Scroller,
         HeaderArea,
         HeaderTitle,
         SearchButton,
         LocationArea,
         LocationInput,
         LocationFinder, */