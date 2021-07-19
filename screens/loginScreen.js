import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react'
import { KeyboardAvoidingView } from 'react-native';
import { StyleSheet, View, Text } from 'react-native';
import { Button, Input, Image } from 'react-native-elements';
import { auth } from '../firebase';


const loginScreen = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if(authUser){
                navigation.replace("Home");
            }
        });
        return unsubscribe;
    },[])

    const signIn = () => {
        auth.signInWithEmailAndPassword(email, password).catch(error => alert(error));
    };

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <StatusBar style="light"/>
            <Image source={{
                uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/OOjs_UI_icon_message-progressive.svg/2048px-OOjs_UI_icon_message-progressive.svg.png",
            }}
                style={{width:160, height:160}}
            />
            <View style={styles.inputContainer}>
                <Input placeholder="Email" type="email" value={email} onChangeText={text=> setEmail(text)}/> 
                <Input placeholder="Password" secureTextEntry value={password}  type="password" onChangeText={text=> setPassword(text)}/>
            </View>
            <Button containerStyle={styles.button} onPress={signIn} title="Login"/>
            <Button containerStyle={styles.button} onPress={() => navigation.navigate('Register')} type="outline" title="Register"/>
            <View style={{height:100}}/>
        </KeyboardAvoidingView>
    )
}

export default loginScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:10,
    },
    inputContainer:{
        width:360,
    },
    button:{
        width:360,
        marginTop:10,
    },
});
