import React, {useLayoutEffect, useState, useEffect} from 'react'
import { ScrollView } from 'react-native'
import { SafeAreaView, TouchableOpacity } from 'react-native'
import { StyleSheet, View, Text } from 'react-native'
import CustomListItem from '../components/CustomListItem'
import { Avatar } from 'react-native-elements';
import { auth, db } from '../firebase';
import {AntDesign, SimpleLineIcons} from "@expo/vector-icons";

const HomeScreen = ({navigation}) => {
    const [chats, setChats] = useState([]);

    

    useEffect(() => {
        const unsubscribe = db.collection("chats").onSnapshot((snapshot) => 
            setChats(
                snapshot.docs.map((doc) => ({
                id:doc.id,
                data:doc.data(),
            }))
        ));

        return unsubscribe;
    }, [])

    useLayoutEffect(() => {
        navigation.setOptions({
            title:"Chats",
            headerStyle: {backgroundColor:"#fff"},
            headerTitleStyle:{color:"black"},
            headerTintColor: "black",
            headerRight: () => (
                <View style={{
                    flexDirection:"row",
                    justifyContent: "space-between",
                    width: 80,
                    marginRight: 20,
                }}>
                   <TouchableOpacity onPress={() => navigation.navigate("AddChat")} activeOpacity={0.5}>
                       <SimpleLineIcons name="pencil"  size={24} color="black"/>
                   </TouchableOpacity>
                   <TouchableOpacity onPress={() => navigation.navigate("Profile")} activeOpacity={0.5}>
                    <Avatar rounded source={{uri : auth?.currentUser?.photoURL}}/>
                </TouchableOpacity>
                </View>
            )
        })
    }, [navigation]);

    const enterChat = (id, chatName) => {
        navigation.navigate("Chat", {id, chatName})
    }


    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
            {chats.map(({id, data: { chatName }}) => (
                <CustomListItem key={id} id={id} chatName={chatName} enterChat={enterChat}/>
            ))}   
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        height:"100%"
    }
});
