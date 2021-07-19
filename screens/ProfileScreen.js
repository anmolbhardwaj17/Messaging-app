import React, {useLayoutEffect} from 'react'
import { StyleSheet, View } from 'react-native';
import { Button, Input, Image, Text } from 'react-native-elements';
import { auth } from '../firebase';
import { StatusBar } from 'expo-status-bar';

const ProfileScreen = ({navigation}) => {

    const signOutUser = () => {
        auth.signOut().then(() => {
            navigation.replace("Login");
        });
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            title:"Profile",
            headerStyle: {backgroundColor:"#fff"},
            headerTitleStyle:{color:"black"},
            headerTintColor: "black",
           
        })
    }, [navigation]);


    return (
        <View style={styles.container}>
           <StatusBar style="light"/>
           <Image source={{
                uri:auth?.currentUser?.photoURL,
            }}
                style={{width:200, height:200, borderRadius:100, borderColor:"#656565", borderWidth:8}}
            />
            <View style={styles.inputContainer}>
            <Text h2 style={{marginBottom: 20, marginTop:50, textAlign:"center", fontWeight:"500"}}>{auth.currentUser.displayName}</Text>
            <Text h5 style={{marginBottom: 200, textAlign:"center"}}>{auth.currentUser.email}</Text>
            </View>
            <Button containerStyle={styles.button} onPress={signOutUser} type="outline" title="Logout"/>
        </View>
    )
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:10,
        backgroundColor:"white"
    },
    button:{
        width:360,
        marginTop:10,

    },
});
