import firebase from "./config_firebase";
import   { createStackNavigator } from '@react-navigation/stack';
const Stack =  createStackNavigator();

export default {

   
    checkToken: async () =>{

    },

    // Logando Usuario
    singIn: async (email, password) =>{

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        if(user){
            alert("logado"); 
            navigation.reset({
                routes:[{name: 'MainTab'}]
            });
        }else{
            alert("Erro");
        }
        // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        });

    },

    // Cadastrando_Usuario
    singUp: async (email, password) =>{
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            if(user){
                alert("usuario criado");
                navigation.reset({
      
                    routes:[{name: 'Preload'}]
                });
            }else{
                alert("Erro");
            }
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });

    },
};

