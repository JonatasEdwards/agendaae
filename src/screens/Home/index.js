import React, {useState} from 'react';
import { Platform  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, Image } from 'react-native';
//import { request, PERMISSIONS } from 'react-native-permissions';
//import  Geolocation from '@react-native-community/geolocation';

import { Container,
         Scroller,
         HeaderArea,
         HeaderTitle,
         SearchButton,
         LocationArea,
         LocationInput,
         LocationFinder,
         ListArea,
         Area,
         InforArea,
         UserName,
         Especialidades,
         

        
        } from './styles';

        import BarberItem from '../../components/BarberItem';

export default () => {

    const  navigation = useNavigation();

   /*  const [locationText, setLocationText] = useState('');
    const [coords, setCoords] = useState(null);
       

    const handleLocationFinder = async () =>{
        setCoods(null);
        const granted = await PermissionsAndroid.check( PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION );

        if(granted){

            Geolocation.getCurrentPosition((info)=>{
                console.log(info);
            });

        }
    } */

    return (
        
        <Container>
            <Scroller>
                <HeaderArea>
                    <HeaderTitle numberOfline={2}>Encontre o seu barbeiro favorito</HeaderTitle>
                    <SearchButton onPress={() => navigation.navigate('Search') }>
                        <Image source = {require('C:/Users/Lucas Benevinuto/agendaaeBarber/src/assets/lupa.png')} 
                                style = {{ width: 20, height: 20, }} />
                    </SearchButton>
                </HeaderArea>

                <LocationArea>
                    <LocationInput 
                    placeholder="Onde você está?"
                    placeholderTextColor=" #f2f2f2"
                    /* value={locationText}
                    onChangeText={t => setLocationText(t)} */
                    />
                    <LocationFinder >
                       <Image source = {require('C:/Users/Lucas Benevinuto/agendaaeBarber/src/assets/globo.png')} 
                                style = {{ width: 20, height: 20, }} />
                    </LocationFinder>  
                </LocationArea>   

               
                <ListArea>
                    
                    <Area> 
                        <Image source = {require('C:/Users/Lucas Benevinuto/agendaaeBarber/src/assets/barber1.jpg')} 
                                style = {{ width: 100, height: 100, }} /> 
                        <InforArea>
                                <UserName>Joao Claudio</UserName>
                                <Especialidades>Corte social</Especialidades>
                                <Especialidades>Degradê</Especialidades>
                                <Especialidades>Navalhado</Especialidades>
                                
                        </InforArea>
                    </Area>
                    <Area> 
                        <Image source = {require('C:/Users/Lucas Benevinuto/agendaaeBarber/src/assets/barber2.jpg')} 
                                style = {{ width: 100, height: 100, }} /> 
                        <InforArea>
                                <UserName>Bruno Barreto</UserName>
                                <Especialidades>Corte social</Especialidades>
                                <Especialidades>Degradê</Especialidades>
                                <Especialidades>Navalhado</Especialidades>
                                
                        </InforArea>
                    </Area>
                    <Area> 
                        <Image source = {require('C:/Users/Lucas Benevinuto/agendaaeBarber/src/assets/barber3.jpg')} 
                                style = {{ width: 100, height: 100, }} /> 
                        <InforArea>
                                <UserName>Mizael Lima</UserName>
                                <Especialidades>Corte social</Especialidades>
                                <Especialidades>Degradê</Especialidades>
                                <Especialidades>Navalhado</Especialidades>
                                
                        </InforArea>
                    </Area>
                    <Area> 
                        <Image source = {require('C:/Users/Lucas Benevinuto/agendaaeBarber/src/assets/barber4.jpg')} 
                                style = {{ width: 100, height: 100, }} /> 
                        <InforArea>
                                <UserName>Jhonny Robert</UserName>
                                <Especialidades>Corte social</Especialidades>
                                <Especialidades>Degradê</Especialidades>
                                <Especialidades>Navalhado</Especialidades>
                                
                        </InforArea>
                    </Area>
                    <Area> 
                        <Image source = {require('C:/Users/Lucas Benevinuto/agendaaeBarber/src/assets/barber1.jpg')} 
                                style = {{ width: 100, height: 100, }} /> 
                        <InforArea>
                                <UserName>Glaubim </UserName>
                                <Especialidades>Corte social</Especialidades>
                                <Especialidades>Degradê</Especialidades>
                                <Especialidades>Navalhado</Especialidades>
                                
                        </InforArea>
                    </Area>
                    <Area> 
                        <Image source = {require('C:/Users/Lucas Benevinuto/agendaaeBarber/src/assets/barber2.jpg')} 
                                style = {{ width: 100, height: 100, }} /> 
                        <InforArea>
                                <UserName>Jeffter </UserName>
                                <Especialidades>Corte social</Especialidades>
                                <Especialidades>Degradê</Especialidades>
                                <Especialidades>Navalhado</Especialidades>
                                
                        </InforArea>
                    </Area>
                    <Area> 
                        <Image source = {require('C:/Users/Lucas Benevinuto/agendaaeBarber/src/assets/barber3.jpg')} 
                                style = {{ width: 100, height: 100, }} /> 
                        <InforArea>
                                <UserName>Dora</UserName>
                                <Especialidades>Corte social</Especialidades>
                                <Especialidades>Degradê</Especialidades>
                                <Especialidades>Navalhado</Especialidades>
                                
                        </InforArea>
                    </Area>
                            
                            
                            
                </ListArea>
                
            </Scroller>
        </Container>

    );
}